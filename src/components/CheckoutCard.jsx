import React from "react";
import deleteImg from "../../assets/images/icon-remove-item.svg";
import "../styles/CheckoutCard.css";

const CheckoutCard = ({ id, name, quantity, price, onRemove }) => {
  const totalPrice = (quantity * price).toFixed(2);

  return (
    <div className="CheckoutCard">
      <ul>
        <li>
          <div className="orderCard">
            <div className="orderDetails">
              <p style={{ fontWeight: "600" }}>{name}</p>
              <span className="orderQuantity">
                <span style={{ color: "hsl(14, 86%, 42%)" }}>{quantity}x</span>
                <span style={{ opacity: "0.7" }}>@${price.toFixed(2)}</span>
                <span>${totalPrice}</span>
              </span>
            </div>
            <img
              src={deleteImg}
              alt="deleteimg"
              className="deleteImg"
              onClick={() => onRemove(id)} // Ta bort varan från varukorgen
              style={{ cursor: "pointer" }}
            />
          </div>
          <hr style={{ marginTop: "30px" }} />
        </li>
      </ul>
    </div>
  );
};

export default CheckoutCard;
