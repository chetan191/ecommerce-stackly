import React, { useState, useRef } from "react";
import "./product.css";

import watchImg from "../../assets/Main.jpg";
import Add from "../../assets/Ph1.png";
import Add1 from "../../assets/Ph2.png";
import Add2 from "../../assets/Ph3.png";
import Add4 from "../../assets/Ph4.png";
import Add5 from "../../assets/Ph4.png";
import Add6 from "../../assets/M2.png";
import Add7 from "../../assets/M3.png";
import appleLogo from "../../assets/apple.png";

/* Small star rating */
const RatingStars = ({ value = 4.6, size = 14 }) => {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= full) stars.push("full");
    else if (i === full + 1 && half) stars.push("half");
    else stars.push("empty");
  }

  return (
    <div className="rating-stars" aria-hidden style={{ fontSize: size }}>
      {stars.map((s, i) => (
        <span key={i} className={`star ${s}`}>
          ★
        </span>
      ))}
      <span className="rating-value" style={{ marginLeft: 8, fontWeight: 700 }}>
        {value.toFixed(1)}
      </span>
    </div>
  );
};

/* Rating breakdown circular rings */
const RatingBreakdown = ({ counts = [1126, 124, 33, 17, 63], average = 4.6 }) => {
  const total = counts.reduce((a, b) => a + b, 0);
  const pcts = counts.map((c) => (total === 0 ? 0 : (c / total) * 100));

  const COLORS = ["#602884", "#602884", "#602884", "#FF8B25", "#E81D16"];
  const labels = [5, 4, 3, 2, 1];

  return (
    <div className="rating-breakdown-component">
      <div className="rb-header">
        <div className="rb-header-left">
          <span style={{ color: "#6f1bdc", fontSize: 22 }}>★</span>
          <span style={{ fontWeight: 800, fontSize: 24 }}>{average.toFixed(1)}</span>
        </div>
        <div className="rb-header-right">{total.toLocaleString()} Ratings • 99 Reviews</div>
      </div>

      <div className="rb-list">
        {labels.map((lbl, i) => {
          const pct = pcts[i];
          const r = 34;
          const circumference = 2 * Math.PI * r;
          const dash = (pct / 100) * circumference;
          return (
            <div key={lbl} className="rb-item">
              <svg width="86" height="86" viewBox="0 0 86 86">
                <circle cx="43" cy="43" r={r} fill="none" stroke="#DAB0F5" strokeWidth="8" opacity="0.5" />
                <circle
                  cx="43"
                  cy="43"
                  r={r}
                  fill="none"
                  stroke={COLORS[i]}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${dash} ${circumference - dash}`}
                  transform="rotate(-90 43 43)"
                />
                <text
                  x="43"
                  y="40"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ fontSize: 18, fontWeight: 700, fill: "#222" }}
                >
                  {lbl}
                </text>
                <text
                  x="43"
                  y="58"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ fontSize: 12, fill: COLORS[i] }}
                >
                  ★
                </text>
              </svg>
              <div className="rb-count">{counts[i].toLocaleString()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* Review item */
const ReviewItem = ({ r }) => (
  <div className="review">
    <div className="review-head">
      <div className="review-rating">{r.rating}★</div>
      <div className="review-title">{r.title}</div>
    </div>
    <div className="review-body">{r.text}</div>
    <div className="review-meta">
      {r.author} • {r.ago} • 👍 {r.thumbs}
    </div>
  </div>
);

const Product = () => {
  const thumbnails = [watchImg, Add, Add1, Add2, Add4, Add5];

  const [mainImage, setMainImage] = useState(watchImg);
  const [activeThumb, setActiveThumb] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Super Silver");
  const [selectedVariant, setSelectedVariant] = useState("8GB+128GB");
  const [zoom, setZoom] = useState({ visible: false, x: "50%", y: "50%" });
  const [showSpecs, setShowSpecs] = useState(false); // 👈 Added toggle state

  const imgRef = useRef(null);

  const reviews = [
    {
      id: 1,
      rating: 5,
      title: "Extremely good",
      text:
        "Upgrading from iP12. The difference is earth shattering. Absolute beast of a phone. Worth the price for me.",
      author: "Martin",
      ago: "2 months ago",
      thumbs: 23,
    },
    {
      id: 2,
      rating: 5,
      title: "Great value",
      text: "Excellent performance for the price. Smooth and snappy!",
      author: "Anita",
      ago: "1 month ago",
      thumbs: 5,
    },
  ];

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const offsetX = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const offsetY = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);
    const xPercent = (offsetX / rect.width) * 100;
    const yPercent = (offsetY / rect.height) * 100;
    setZoom({ visible: true, x: `${xPercent}%`, y: `${yPercent}%` });
  };

  const handleMouseLeave = () => setZoom((z) => ({ ...z, visible: false }));

  const onThumbClick = (img, idx) => {
    setMainImage(img);
    setActiveThumb(idx);
  };

  const colorOptions = [
    { name: "Super Silver", img: watchImg },
    { name: "Midnight", img: Add6 },
    { name: "Phantom", img: Add7 },
  ];

  const counts = [1126, 124, 33, 17, 63];
  const average = 4.6;

  return (
    <div className={`product-page ${zoom.visible ? "zoom-active" : ""}`}>
      <div className="product-images">
        <div className="thumbnail-list">
          {thumbnails.map((img, index) => (
            <button
              key={index}
              className={`thumb-btn ${activeThumb === index ? "active-thumb" : ""}`}
              onClick={() => onThumbClick(img, index)}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>

        <div
          className="main-image"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={imgRef}
        >
          <img src={mainImage} alt="Main product" />
          <div
            className={`magnifier ${zoom.visible ? "visible" : ""}`}
            style={{
              backgroundImage: `url(${mainImage})`,
              backgroundPosition: `${zoom.x} ${zoom.y}`,
            }}
          />
        </div>
      </div>

      <div className="product-details">
        <div
          className={`result ${zoom.visible ? "visible" : ""}`}
          style={{
            backgroundImage: `url(${mainImage})`,
            backgroundPosition: `${zoom.x} ${zoom.y}`,
            backgroundSize: "200%",
          }}
        />

        {/* ---------- PRODUCT DETAILS SECTION ---------- */}
        <h1 className="title">Apple iPhone 16 Pro Max (Desert Titanium, 256 GB)</h1>

        <div className="ratings-row">
          <RatingStars value={4.8} />
          <div className="ratings-meta">
            <div className="rating-count">1,363 Ratings & 99 Reviews</div>
            <div className="trusted-badge">Stackly Trusted</div>
          </div>
        </div>

        <div className="price-row">
          <span className="price">₹1,32,999</span>
          <span className="old-price">₹1,34,999</span>
          <span className="discount">1% OFF</span>
        </div>

        <div className="delivery">
          <p>Inclusive of all taxes</p>
          <p className="secure-delivery">
            Secure delivery by <strong>26 Sep, Friday</strong> if ordered before 1:07 PM
          </p>
        </div>
        <div className="pd-top">
          <div className="pd-brand-row">
            <div className="pd-brand-logo">
              <img
                src={appleLogo}
                alt="Apple logo"
                style={{
                  width: 35,
                  height: 34,
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="pd-brand-name">Apple</div>
          </div>

          <p className="pd-warranty">
            1 year warranty for phone and 1 year warranty for in Box Accessories.
          </p>

          <div className="pd-colors">
            <h4>Colors Available</h4>
            <div className="pd-color-list">
              {colorOptions.map((c) => (
                <div key={c.name} className="pd-color-item">
                  <img
                    src={c.img}
                    alt={c.name}
                    onClick={() => {
                      setSelectedColor(c.name);
                      setMainImage(c.img);
                    }}
                    style={{
                      cursor: "pointer",
                      border:
                        selectedColor === c.name
                          ? "2px solid #7a2be6"
                          : "1px solid #ddd",
                    }}
                  />
                  <div className="pd-color-ring" />
                </div>
              ))}
            </div>
          </div>

          <div className="pd-features">
            <h4>Features</h4>
            <ul>
              <li><strong>256 GB ROM</strong></li>
              <li>17.53 cm (6.9 inch) Super Retina XDR Display</li>
              <li>48MP + 48MP + 12MP | 12MP Front Camera</li>
              <li>A18 Pro Chip, 6 Core Processor</li>
              <li>460 PPI Graphics</li>
            </ul>
          </div>

          {/* ---- TOGGLE LINK ADDED ---- */}
          <a
            href="#specs"
            className="pd-specs-link"
            onClick={(e) => {
              e.preventDefault();
              setShowSpecs(!showSpecs);
            }}
          >
            {showSpecs ? "Hide specifications" : "Show specifications"}
          </a>

          {/* ---- SPECIFICATIONS SECTION ---- */}
          {showSpecs && (
            <div id="specs" className="pd-specs-section">
              <h3>Other Details</h3>
              <table className="specs-table">
                <tbody>
                  <tr><td>Model Name</td><td>iPhone 16 Pro Max</td></tr>
                  <tr><td>Model Number</td><td>MYVWX3HN/A</td></tr>
                  <tr><td>Color</td><td>Black Titanium</td></tr>
                  <tr><td>Browse Type</td><td>Smartphones</td></tr>
                  <tr><td>SIM Type</td><td>Dual Sim (Nano + eSIM)</td></tr>
                  <tr><td>Touchscreen</td><td>Yes</td></tr>
                  <tr><td>OTG Compatible</td><td>No</td></tr>
                  <tr><td>Sound Enhancements</td><td>Built-in Stereo Speaker</td></tr>
                  <tr><td>Width</td><td>77.6 mm</td></tr>
                  <tr><td>Height</td><td>163 mm</td></tr>
                  <tr><td>Depth</td><td>8.25 mm</td></tr>
                  <tr><td>Weight</td><td>227 g</td></tr>
                  <tr><td>Warranty</td><td>1 year for phone and 1 year for accessories</td></tr>
                  <tr><td>Internal Storage</td><td>256 GB</td></tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        {/* ---------- END PRODUCT DETAILS SECTION ---------- */}

        {/* ---------- Ratings & Reviews ---------- */}
        <div className="ratings-and-reviews">
          <h3>Ratings & Reviews</h3>
          <RatingBreakdown counts={counts} average={average} />
          <div className="reviews-list">
            {reviews.map((r) => (
              <ReviewItem key={r.id} r={r} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
