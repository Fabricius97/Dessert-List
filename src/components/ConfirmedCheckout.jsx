import React from "react";
import "../styles/ConfirmedCheckout.css";
import CheckoutCard from "./CheckoutCard";
import ConfirmedCheckoutImg from "../../assets/images/icon-order-confirmed.svg";

const ConfirmedCheckout = ({ cart, onClose }) => {
  return (
    <div className="ConfirmedCheckout">
      <div className="popupContent">
        <img src={ConfirmedCheckoutImg} alt="confirmedcheckoutimg" />
        <h1>Order Confirmed</h1>
        <p style={{ margin: "10px 0" }}>We hope you enjoy your food!</p>
        <div className="checkoutitems">
          {Object.values(cart).map((item) => (
            <CheckoutCard
              key={item.id}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onRemove={null}
            />
          ))}
          {/* Här ska total order också finnas */}
        </div>
        <button className="startNewOrder" onClick={onClose}>
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default ConfirmedCheckout;
