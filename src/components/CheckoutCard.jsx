import React from "react";
import deleteImg from "../../assets/images/icon-remove-item.svg";
import "../styles/CheckoutCard.css";

const CheckoutCard = () => {
  return (
    <div className="CheckoutCard">
      <ul>
        <li>
          <div className="orderCard">
            <div className="orderDetails">
              <p style={{ fontWeight: "600" }}>Classic tiramisu</p>
              <span className="orderQuantity">
                <span style={{ color: "hsl(14, 86%, 42%)" }}>1x</span>
                <span style={{ opacity: "0.7" }}>@$7.00</span>
                <span>$28.00</span>
              </span>
            </div>
            <img src={deleteImg} alt="deleteimg" className="deleteImg" />
          </div>
          <hr style={{ marginTop: "30px" }} />
        </li>
      </ul>
    </div>
  );
};

export default CheckoutCard;
