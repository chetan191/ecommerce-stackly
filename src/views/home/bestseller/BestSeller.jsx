import React from "react";
import "./Bestseller.css";
import watchImg from "../../../assets/watch.png";
import dressImg from "../../../assets/dress.png";

const BestSeller = () => {
  return (
    <div className="bestseller-container">   
      <div className="bestseller-text">
        <span className="badge">Best Sellers</span>
        <h2 className="title-different">Trending Top Deals</h2>

        <p className="description">
          Discover unbeatable offers on fashion and electronics. Handpicked daily to bring style and savings together.
        </p>
        <button className="see-products">See all Products ↗</button>
      </div>

      <div className="bestseller-image">
       <img src={watchImg} alt="Smart Watch" />
      </div>

      <div className="bestseller-image">
     <img src={dressImg} alt="Traditional Dress" />
      </div>

      <div className="bestseller-text">
        <span className="badge">New Arrivals</span>
        <h2 className="title-different">Trending Top Deals</h2>
        <p className="description">
          Discover unbeatable offers on fashion and electronics. Handpicked daily to bring style and savings together.
        </p>
        <button className="see-products">See all Products ↗</button>
      </div>
    </div>
  );
};

export default BestSeller;
