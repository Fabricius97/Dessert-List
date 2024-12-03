import "./App.css";
import React, { useState } from "react";
import DessertCard from "./components/DessertCard";
import Checkout from "./components/Checkout";
import ConfirmedCheckout from "./components/ConfirmedCheckout";
import data from "../data.json";

const App = () => {
  const [cart, setCart] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false); // Hanterar popupens synlighet
  const [resetCart, setResetCart] = useState(false);

  // Lägg till en produkt i varukorgen
  const handleAddToCart = (dessert, newQuantity) => {
    setCart((prevCart) => {
      const currentItem = prevCart[dessert.id] || {
        quantity: 0,
        price: dessert.price,
        name: dessert.name,
        id: dessert.id,
        image: dessert.image,
      };

      return {
        ...prevCart,
        [dessert.id]: {
          ...currentItem,
          quantity: newQuantity,
        },
      };
    });
  };

  // Ta bort en produkt från varukorgen
  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[id];
      return updatedCart;
    });
  };

  // Bekräfta beställning och visa popup
  const handleConfirmOrder = () => {
    setIsConfirmed(true);
    setResetCart(true);
  };

  // Stäng popup och töm varukorgen
  const handleStartNewOrder = () => {
    setCart({});
    setIsConfirmed(false);
    setResetCart(false);
  };

  return (
    <div className="App">
      {isConfirmed && (
        <ConfirmedCheckout cart={cart} onClose={handleStartNewOrder} />
      )}
      <DessertCard
        onAddToCart={handleAddToCart}
        cart={cart}
        desserts={data}
        resetCart={resetCart}
      />
      <Checkout
        cart={cart}
        removeItem={handleRemoveFromCart}
        onConfirmOrder={handleConfirmOrder} // Lägg till en callback
      />
    </div>
  );
};

export default App;
