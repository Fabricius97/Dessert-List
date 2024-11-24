import "./App.css";
import React from "react";
import DessertCard from "./components/DessertCard";
import Checkout from "./components/Checkout";

const App = () => {
  return (
    <div className="App">
      <DessertCard />
      <Checkout />
    </div>
  );
};

export default App;
