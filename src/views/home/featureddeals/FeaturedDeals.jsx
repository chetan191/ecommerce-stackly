import React, { useState } from 'react';
import smartwatch from "../../../assets/watch.png"
import limitedoffer from "../../../assets/earphones.png"
import clothes from "../../../assets/HeroSection.png"

const FeaturedDeals = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const deals = [
    {
      id: 1,
      tag: "Limited Time Offer",
      title: "Upto 30% Off For The Earpods",
      image: smartwatch,
      bgGradient: "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)",
      textColor: "white",
      type: "earpods"
    },
    {
      id: 2,
      tag: "Big Deal",
      title: "Upto 60% Off For The Accessories!",
      image: limitedoffer,
      bgGradient: "linear-gradient(135deg, #4a7c59 0%, #7aa86b 100%)",
      textColor: "white",
      type: "accessories"
    },
    {
      id: 3,
      tag: "Special Deal",
      title: "Upto 10% Off For The First Buying!",
      image: clothes,
      bgGradient: "linear-gradient(135deg, #c8a882 0%, #d4b896 100%)",
      textColor: "#8b4513",
      type: "clothing"
    }
  ];

  const handleButtonClick = (dealTitle) => {
    console.log(`Shop button clicked for: ${dealTitle}`);
    // Add your shop navigation logic here
  };

  return (
    <section style={{
      padding: '60px 0',
      position: 'relative',
      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 165, 0, 0.05) 100%)',
      overflow: 'hidden'
    }}>
      {/* Decorative Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(45deg, #ffd700 2px, transparent 2px),
          linear-gradient(-45deg, #ff8c00 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px, 40px 40px',
        opacity: 0.1,
        zIndex: -1
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.75rem, 5vw, 3rem)',
          fontWeight: 600,
          color: '#2c3e50',
          marginBottom: '40px',
          fontFamily: 'Georgia, serif'
        }}>
          Featured Deals
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
          gap: '24px',
          height: window.innerWidth > 768 ? '480px' : 'auto'
        }}>
          {/* Left Column - First two deals */}
          <div style={{
            display: 'grid',
            gridTemplateRows: window.innerWidth > 768 ? '1fr 1fr' : 'auto auto',
            gap: '24px'
          }}>
            {deals.slice(0, 2).map((deal) => (
              <DealCard
                key={deal.id}
                deal={deal}
                isHovered={hoveredCard === deal.id}
                onMouseEnter={() => setHoveredCard(deal.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onButtonClick={handleButtonClick}
              />
            ))}
          </div>

          {/* Right Column - Third deal */}
          <DealCard
            deal={deals[2]}
            isHovered={hoveredCard === deals[2].id}
            onMouseEnter={() => setHoveredCard(deals[2].id)}
            onMouseLeave={() => setHoveredCard(null)}
            onButtonClick={handleButtonClick}
            isLarge={true}
          />
        </div>
      </div>
    </section>
  );
};

const DealCard = ({ deal, isHovered, onMouseEnter, onMouseLeave, onButtonClick, isLarge = false }) => {
  const cardStyle = {
    background: deal.bgGradient,
    borderRadius: '20px',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: window.innerWidth > 480 ? '30px' : '20px',
    color: deal.textColor,
    minHeight: window.innerWidth > 768 ? (isLarge ? '100%' : 'auto') : (isLarge ? '220px' : '180px'),
    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
    boxShadow: isHovered ? '0 15px 40px rgba(0, 0, 0, 0.2)' : '0 5px 15px rgba(0, 0, 0, 0.1)'
  };

  const imageStyle = {
    position: 'absolute',
    right: deal.type === 'clothing' ? (window.innerWidth > 480 ? '-50px' : '-30px') : (window.innerWidth > 480 ? '-20px' : '-15px'),
    top: '50%',
    transform: 'translateY(-50%)',
    width: deal.type === 'clothing' 
      ? (window.innerWidth > 768 ? '70%' : '60%')
      : (window.innerWidth > 768 ? '150px' : window.innerWidth > 480 ? '120px' : '100px'),
    height: deal.type === 'clothing'
      ? (window.innerWidth > 768 ? '90%' : '80%')
      : (window.innerWidth > 768 ? '150px' : window.innerWidth > 480 ? '120px' : '100px'),
    zIndex: 1,
    borderRadius: deal.type === 'clothing' ? '20px 0 0 20px' : '0',
    overflow: 'hidden'
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <div>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px',
            backgroundColor: deal.type === 'clothing' ? 'rgba(139, 69, 19, 0.2)' : 'rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 500,
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            {deal.tag}
          </span>
          
          <h3 style={{
            fontSize: isLarge 
              ? (window.innerWidth > 768 ? '2rem' : '1.5rem')
              : (window.innerWidth > 480 ? '1.5rem' : '1.25rem'),
            fontWeight: 600,
            lineHeight: 1.3,
            marginBottom: isLarge ? (window.innerWidth > 768 ? '40px' : '25px') : '20px',
            fontFamily: 'Georgia, serif'
          }}>
            {deal.title}
          </h3>
        </div>
        
        <ShopButton 
          onClick={() => onButtonClick(deal.title)}
          textColor={deal.textColor}
        />
      </div>

      <div style={imageStyle}>
        <img
          src={deal.image}
          alt={deal.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: deal.type === 'clothing' ? 'cover' : 'contain'
          }}
        />
      </div>
    </div>
  );
};

const ShopButton = ({ onClick, textColor }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
    onClick();
  };

  return (
    <button
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#6c63ff',
        color: 'white',
        border: 'none',
        borderRadius: '25px',
        padding: window.innerWidth > 480 ? '12px 24px' : '10px 20px',
        fontSize: window.innerWidth > 480 ? '1rem' : '0.9rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        alignSelf: 'flex-start',
        transform: isPressed ? 'scale(0.95)' : 'scale(1)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#5a52e8';
        e.target.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#6c63ff';
        e.target.style.transform = 'scale(1)';
      }}
    >
      <span style={{ fontSize: '1.1em' }}>🛍️</span>
      Shop Now
    </button>
  );
};

export default FeaturedDeals;