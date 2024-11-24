import React from "react";
import "../styles/Checkout.css";
import CheckoutCard from "./CheckoutCard";
import CarbonNeutral from "../../assets/images/icon-carbon-neutral.svg";

const Checkout = () => {
  return (
    <div className="Checkout">
      <h2 style={{ color: "hsl(14, 86%, 42%)", paddingBottom: "20px" }}>
        Your Cart ({})
      </h2>
      <CheckoutCard />
      <div className="orderTotal">
        <p>Order Total</p>
        <h2>$46.50</h2>
      </div>
      <div className="carbonNeutral">
        <img src={CarbonNeutral} alt="carbonneutral" />
        This is a <span style={{ fontWeight: "600" }}> carbon-neutral </span>
        delivery.
      </div>
      <div className="confirOrderButton">
        <button className="confirmOrder">Confirm Order</button>
      </div>
    </div>
  );
};

export default Checkout;
