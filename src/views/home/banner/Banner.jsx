import React, { useRef } from "react";
import Slider from "react-slick";
import "./banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import phoneImage from "../../../assets/Phone.png";
import bannerBackground from "../../../assets/bannerBackround.png"
import { FaApple } from "react-icons/fa";


const slidesData = [
{
  
  title: "iPhone",
  subtitle: "Next-Gen AI Imaging & Ultra-Fast 5G. Powered by the Smartest iPhone Chip Ever.",
  price: "₹79,999*",
  oldPrice: "89,999",
  image: phoneImage
},
  {
    title: "iPhone 14",
    subtitle: "Sleek Design & Smart Features Powered by the Smartest iPhone Chip Ever.",
    price: "₹69,999*",
    oldPrice: "79,999",
    image: phoneImage
  },
  {
    title: "iPhone 13",
    subtitle: "Affordable & Feature-Rich Powered by the Smartest iPhone Chip Ever.",
    price: "₹49,999*",
    oldPrice: "59,999",
    image: phoneImage
  }
];

const BannerSlide = ({ slide }) => (
  <div className="banner-slide">
    <div className="banner-content">
      <img src={slide.image} alt={slide.title} className="phone-image" />
      <div className="text-section">
        <h2 className="brand-title">
          <FaApple className="apple-icon" /> {slide.title}
        </h2>
        <p className="subtitle">{slide.subtitle}</p>
        <p className="price">
          From <span className="price-highlight">{slide.price}</span>{" "}
          <span className="old-price">{slide.oldPrice}</span>
        </p>
      </div>
    </div>
  </div>
);

const Banner = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => <div className="custom-dot"></div>
  };

  return (
    <div
      className="banner-wrapper"
      style={{ backgroundImage: `url(${bannerBackground})` }} 
    >
      <button className="arrow-btn left-arrow" onClick={() => sliderRef.current.slickPrev()}>&#8249;</button>
      <Slider ref={sliderRef} {...settings}>
        {slidesData.map((slide, index) => (
          <BannerSlide key={index} slide={slide} />
        ))}
      </Slider>
      <button className="arrow-btn right-arrow" onClick={() => sliderRef.current.slickNext()}>&#8250;</button>
    </div>
  );
};

export default Banner;