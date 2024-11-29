import React from "react";
import "../styles/Checkout.css";
import CheckoutCard from "./CheckoutCard";
import CarbonNeutral from "../../assets/images/icon-carbon-neutral.svg";
import EmptyCart from "../../assets/images/illustration-empty-cart.svg";

const Checkout = ({ cart, removeItem, onConfirmOrder }) => {
  const cartItems = Object.values(cart);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="Checkout">
      <h2 style={{ color: "hsl(14, 86%, 42%)", paddingBottom: "20px" }}>
        Your Cart ({cartItems.length})
      </h2>

      {cartItems.length === 0 ? (
        <div className="emptyCartImgContainer">
          <img
            src={EmptyCart}
            alt="emptycart"
            className="emptyCartImg"
            style={{ width: "200px" }}
          />
          <p style={{ fontWeight: "600" }}>Your added items will appear here</p>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <CheckoutCard
              key={item.id}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onRemove={removeItem}
            />
          ))}
          <div className="orderTotal">
            <p>Order Total</p>
            <h2>${totalAmount.toFixed(2)}</h2>
          </div>
          <div className="carbonNeutral">
            <img src={CarbonNeutral} alt="carbonneutral" />
            This is a{" "}
            <span style={{ fontWeight: "600" }}> carbon-neutral </span>
            delivery.
          </div>
          <div className="confirOrderButton">
            <button
              className="confirmOrder"
              onClick={onConfirmOrder} // Lägg till callback för att visa popup
            >
              Confirm Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
