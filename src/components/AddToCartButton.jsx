import React, { useEffect, useState } from "react";
import AddToCartImg from "../../public/images/icon-add-to-cart.svg";
import PlusIcon from "../../public/images/icon-increment-quantity.svg";
import MinusIcon from "../../public/images/icon-decrement-quantity.svg";
import "../styles/AddToCartButton.css";

const AddToCartButton = ({ dessert, onAddToCart, currentCount }) => {
  const [count, setCount] = useState(currentCount);

  // Uppdatera lokala `count` när `currentCount` ändras (ex. vid återställning)
  useEffect(() => {
    setCount(currentCount);
  }, [currentCount]);

  // Hantera inkrementering
  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onAddToCart(dessert, newCount);
  };

  // Hantera dekrementering
  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onAddToCart(dessert, newCount);
    }
  };

  return (
    <button
      className={`AddToCartButton ${count > 0 ? "active" : ""}`}
      onClick={() => count === 0 && handleIncrement()} // Lägg till första produkten
    >
      {count === 0 ? (
        <>
          <img src={AddToCartImg} alt="Add to cart" />
          Add to Cart
        </>
      ) : (
        <div className="counter-container">
          <img
            src={MinusIcon}
            alt="decrease"
            className="icon minus-icon"
            onClick={(e) => {
              e.stopPropagation(); // Förhindra bubbla av händelsen
              handleDecrement();
            }}
          />
          <span className="counter">{count}</span>
          <img
            src={PlusIcon}
            alt="increase"
            className="icon plus-icon"
            onClick={(e) => {
              e.stopPropagation();
              handleIncrement();
            }}
          />
        </div>
      )}
    </button>
  );
};

export default AddToCartButton;
