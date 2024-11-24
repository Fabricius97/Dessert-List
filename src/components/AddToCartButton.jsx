import React, { useState } from "react";
import AddToCartImg from "../../assets/images/icon-add-to-cart.svg";
import PlusIcon from "../../assets/images/icon-increment-quantity.svg";
import MinusIcon from "../../assets/images/icon-decrement-quantity.svg";
import "../styles/AddToCartButton.css";

const AddToCartButton = ({ dessertId }) => {
  const [currentCount, setCurrentCount] = useState(0); // Initial count is 0

  // Handle increment logic
  const handleIncrement = () => {
    setCurrentCount(currentCount + 1); // Increase the count
  };

  // Handle decrement logic
  const handleDecrement = () => {
    if (currentCount > 0) {
      setCurrentCount(currentCount - 1); // Decrease the count if greater than 0
    }
  };

  return (
    <button
      className={`AddToCartButton ${currentCount > 0 ? "active" : ""}`}
      onClick={() => currentCount === 0 && setCurrentCount(1)}
    >
      {currentCount === 0 ? (
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
              e.stopPropagation(); // Prevent bubbling
              handleDecrement();
            }}
          />
          <span className="counter">{currentCount}</span>
          <img
            src={PlusIcon}
            alt="increase"
            className="icon plus-icon"
            onClick={(e) => {
              e.stopPropagation(); // Prevent bubbling
              handleIncrement();
            }}
          />
        </div>
      )}
    </button>
  );
};

export default AddToCartButton;
