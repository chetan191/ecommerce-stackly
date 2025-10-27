import React from "react";
import images from "./images"; 
import "./SmartSignin.css";

const SmartSignin = () => {
  
  const marqueeImages = [...images, ...images, ...images];

  return (
    <>
    <div>
    <section className="product-hero" aria-label="Product hero">     
      <div className="marquee row-top" aria-hidden="true">
        <div className="marquee-track">
          {marqueeImages.map((img, idx) => (
            <figure className="marquee-item" key={`top-${idx}-${img.alt}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>

      <div className="marquee row-bottom" aria-hidden="true">
        <div className="marquee-track">
          {marqueeImages.map((img, idx) => (
            <figure className="marquee-item" key={`bottom-${idx}-${img.alt}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>

    
      <div className="info-card" role="region" aria-labelledby="hero-title">
        <h1 id="hero-title" className="info-title">
          Smarter Shopping Starts Here
        </h1>
        <p className="info-sub">Sign in for curated suggestions and offers</p>
        <button
          className="cta-btn"
          onClick={() => {
            
            window.location.href = "/signup";
          }}
          aria-label="Sign up"
        >
          Sign up
          <svg
            className="cta-arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="M5 12h14M13 6l6 6-6 6"
            />
          </svg>
        </button>
      </div>

      <div className="hero-overlay" aria-hidden="true"></div>
    </section>
    </div>
    </>
  );
};

export default SmartSignin;