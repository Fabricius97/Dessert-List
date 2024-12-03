import React from "react";
import "../styles/ConfirmedCheckout.css";
import ConfirmedCheckoutImg from "../../public/images/icon-order-confirmed.svg";

const ConfirmedCheckout = ({ cart, onClose }) => {
  const cartItems = Object.values(cart);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="ConfirmedCheckout">
      <div className="popupContent">
        <img src={ConfirmedCheckoutImg} alt="Order Confirmed" />
        <h1>Order Confirmed</h1>
        <p>We hope you enjoy your food!</p>
        <div className="checkoutItems">
          {cartItems.map((item) => (
            <div key={item.id} className="ConfirmedCheckoutCardWrapper">
              <div className="ConfirmedCheckoutCards">
                <div className="order">
                  <div className="ConfirmedCheckoutImage">
                    <img
                      src={item.image?.thumbnail}
                      alt={item.name}
                      style={{ width: "60px", borderRadius: "8px" }}
                    />
                  </div>
                  <div className="ConfirmedCheckoutItems">
                    <p style={{ fontWeight: "600" }}>{item.name}</p>
                    <span style={{ color: "hsl(14, 86%, 42%)" }}>
                      {item.quantity}x{" "}
                      <span
                        style={{
                          color: "hsl(14, 65%, 9%)",
                          opacity: "0.8",
                        }}
                      >
                        ${item.price.toFixed(2)}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="total">
                  <h3>${(item.quantity * item.price).toFixed(2)}</h3>
                </div>
              </div>
              <hr style={{ margin: "10px 0", opacity: "0.3" }} />
            </div>
          ))}
          <div className="orderSummary">
            <p>Order total:</p>
            <h3>${totalAmount.toFixed(2)}</h3>
          </div>
        </div>

        <button className="startNewOrder" onClick={onClose}>
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default ConfirmedCheckout;
