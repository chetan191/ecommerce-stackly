import React, { useState } from "react";
import { Box, Button, Chip, Typography, Card, CardContent, CardMedia, Rating } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import WatchIcon from "@mui/icons-material/Watch";
import KitchenIcon from "@mui/icons-material/Kitchen";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import bestdealbackground from "../../../assets/bestdealbackground.png";
import earphones from "../../../assets/earphones.png";
import laptop from "../../../assets/laptop.png";
import ipad from "../../../assets/ipad.png";

const categories = [
  { label: "Electronics", icon: <LaptopMacIcon fontSize="small" />, active: true },
  { label: "Fashion", icon: <CheckroomIcon fontSize="small" /> },
  { label: "Accessories", icon: <WatchIcon fontSize="small" /> },
  { label: "Appliances", icon: <KitchenIcon fontSize="small" /> },
];

const products = [
  { id: 1, name: "boAt Rockerz 450, 15 HRS Battery", price: 1499, oldPrice: 3990, img: {earphones}, rating: 4 },
  { id: 2, name: "Laptop XYZ", price: 49999, oldPrice: 59999, img: {laptop}, rating: 5 },
  { id: 3, name: "Tablet ABC", price: 19999, oldPrice: 24999, img: {ipad}, rating: 4 },
  { id: 4, name: "Smartwatch PQR", price: 5999, oldPrice: 7999, img: {laptop}, rating: 3 },
  { id: 5, name: "Headphones DEF", price: 2999, oldPrice: 3999, img: {earphones}, rating: 4 },
];

export default function DealsSection() {
  const [startIndex, setStartIndex] = useState(0);

  // Determine cards per view based on screen width
  const getCardsPerView = () => {
    if (window.innerWidth < 600) return 1; // Mobile
    if (window.innerWidth < 900) return 2; // Tablet
    return 3; // Desktop
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  React.useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (startIndex + cardsPerView < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      gap={{ xs: 4, md: 8 }}
      alignItems="flex-start"
      sx={{ p: 4, maxWidth: "100%", width: "100%", boxSizing: "border-box" }}
    >
      {/* Left Side Text */}
      <Box flex={{ xs: "1", md: "0 0 300px" }}>
        <Chip
          label="Best Deal of the Day"
          sx={{
            backgroundImage: `url(${bestdealbackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            mb: 2,
            fontWeight: "bold",
            px: 2,
            "& .MuiChip-label": {
              zIndex: 1,
              position: "relative"
            },
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.2)",
              borderRadius: "inherit",
              zIndex: 0
            }
          }}
        />
        <Typography variant="h5" fontWeight="bold">
          Trending Top Deals
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
          Discover unbeatable offers on fashion and electronics. Handpicked daily to bring style and savings together
        </Typography>
        <Button variant="contained" sx={{ bgcolor: "#7B1FA2" }}>
          See all Products
        </Button>
      </Box>

      {/* Right Side Products */}
      <Box flex="1" sx={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}>
        {/* Category Buttons */}
        <Box display="flex" gap={1} mb={2} flexWrap="wrap">
          {categories.map((cat, i) => (
            <Chip
              key={i}
              icon={cat.icon}
              label={cat.label}
              sx={{
                borderRadius: "20px",
                bgcolor: cat.active ? "#7B1FA2" : "transparent",
                color: cat.active ? "#fff" : "#7B1FA2",
                border: "1px solid #7B1FA2",
                "& .MuiChip-icon": { color: cat.active ? "#fff" : "#7B1FA2" },
              }}
            />
          ))}
        </Box>

        {/* Cards Slider */}
        <Box display="flex" alignItems="center" gap={1} sx={{ width: "100%" }}>
          <ArrowBackIosNewIcon
            sx={{ cursor: startIndex === 0 ? "not-allowed" : "pointer", opacity: startIndex === 0 ? 0.3 : 1 }}
            onClick={handlePrev}
          />
          <Box
            display="flex"
            gap={2}
            sx={{
              width: "100%",
              overflowX: "auto",
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for better UX
              msOverflowStyle: "none", // IE and Edge
              scrollbarWidth: "none", // Firefox
            }}
          >
            {products.slice(startIndex, startIndex + cardsPerView).map((product) => (
              <Card
                key={product.id}
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "100%", sm: "45%", md: "30%" },
                  minWidth: 200,
                  bgcolor: "#f9f2fc",
                  margin: "0 4px",
                }}
              >
                <CardMedia component="img" height="140" image={product.img} alt={product.name} />
                <CardContent>
                  <Typography variant="body2" fontWeight="bold">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">₹{product.price.toLocaleString()}</Typography>
                  <Typography variant="caption" sx={{ textDecoration: "line-through", color: "gray" }}>
                    ₹{product.oldPrice.toLocaleString()}
                  </Typography>
                  <Rating value={product.rating} readOnly size="small" sx={{ mt: 1 }} />
                </CardContent>
              </Card>
            ))}
          </Box>
          <ArrowForwardIosIcon
            sx={{
              cursor: startIndex + cardsPerView >= products.length ? "not-allowed" : "pointer",
              opacity: startIndex + cardsPerView >= products.length ? 0.3 : 1
            }}
            onClick={handleNext}
          />
        </Box>
      </Box>
    </Box>
  );
}