import React from "react";
import data from "../../data.json";
import AddToCartButton from "./AddToCartButton";
import "../styles/DessertCard.css";

const DessertCard = () => {
  return (
    <div>
      <h1>Desserts</h1>
      <div className="DessertCardContainer">
        {data.map((dessert) => (
          <div key={dessert.id} className="dessertCard">
            <div className="dessert">
              <div className="image-container">
                <picture>
                  <source
                    srcSet={dessert.image.mobile}
                    media="(max-width: 600px)"
                  />
                  <source
                    srcSet={dessert.image.tablet}
                    media="(max-width: 1024px)"
                  />
                  <img
                    src={dessert.image.desktop}
                    alt={dessert.name}
                    className="dessertImg"
                    width={300}
                    style={{ borderRadius: "13px" }}
                  />
                </picture>
                <AddToCartButton dessertId={dessert.id} />
              </div>
              <div className="dessert-text">
                <p>{dessert.category}</p>
                <h3>{dessert.name}</h3>
                <p>Price: ${dessert.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DessertCard;
