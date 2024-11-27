import "./App.css";
import React, { useState } from "react";
import DessertCard from "./components/DessertCard";
import Checkout from "./components/Checkout";
import data from "../data.json"; // Antag att data.json innehåller listan med dessertobjekt.

const App = () => {
  const [cart, setCart] = useState({}); // Varukorgen

  // Lägg till en produkt i varukorgen
  const handleAddToCart = (dessert, newQuantity) => {
    setCart((prevCart) => {
      const currentItem = prevCart[dessert.id] || {
        quantity: 0,
        price: dessert.price,
        name: dessert.name,
        id: dessert.id,
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

  return (
    <div className="App">
      <DessertCard
        onAddToCart={handleAddToCart}
        cart={cart}
        desserts={data} // Skicka listan av desserter till DessertCard
      />
      <Checkout cart={cart} removeItem={handleRemoveFromCart} />
    </div>
  );
};

export default App;
