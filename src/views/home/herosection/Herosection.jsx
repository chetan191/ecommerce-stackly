import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import heroImage from "../../../assets/HeroSection.png";
import tabletImage from "../../../assets/image 42.png";

const slides = [
  { id: 1, custom: true },
  {
    id: 2,
    title: "Experience Innovation & Style Every Day",
    subtitle: "Your go-to store for fashion and innovation.",
    desc: "Explore top electronics and the latest fashion all in one place, curated for performance, comfort, and everyday living.",
    image: heroImage,
  },
  {
    id: 3,
    title: "Upgrade Your Lifestyle with Us",
    subtitle: "Where comfort meets technology.",
    desc: "Find premium gadgets and stylish clothing designed for your modern lifestyle.",
    image: heroImage,
  },
  {
    id: 4,
    title: "Shop Smart, Live Better",
    subtitle: "Trendy, reliable, and innovative products.",
    desc: "Choose from a wide range of fashion essentials and cutting-edge electronics at unbeatable prices.",
    image: heroImage,
  },
];

const HeroSection = () => {
  return (
    <Box
      sx={{
        "& .swiper-button-next, & .swiper-button-prev": {
          color: "#602885", // ✅ Change arrow color
        },
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        style={{ width: "100%", minHeight: "500px" }}
      >
        {slides.map((slide) =>
          slide.custom ? (
            // ✅ Tablet Promo Slide
            <SwiperSlide key={slide.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: { xs: 2, md: 6 },
                  py: { xs: 2, md: 5 }, // ✅ reduced padding
                  minHeight: "500px",
                  bgcolor: "#fff",
                }}
              >
                {/* Left Image */}
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={tabletImage}
                    alt="Tablet Promotion"
                    sx={{
                      width: "100%",
                      maxWidth: 600,
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                {/* Right Text */}
                <Box
                  sx={{
                    flex: 1,
                    textAlign: { xs: "center", md: "left" },
                    mt: { xs: 4, md: 0 },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "18px", color: "#333", mb: 1 }}
                  >
                    Your hub for cutting–edge tech
                  </Typography>

                  <Typography
                    variant="h3"
                    fontWeight="700"
                    sx={{ color: "#4B0082", mb: 2 }}
                  >
                    Power Your Day with <br /> Quality Tech.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ color: "#666", maxWidth: 450, mb: 3 }}
                  >
                    Your destination for top electronics, curated for quality,
                    efficiency, and daily comfort.
                  </Typography>

                  <Button
                    variant="contained"
                    startIcon={<ShoppingBagIcon />}
                    sx={{
                      backgroundColor: "#4B0082",
                      borderRadius: "999px",
                      px: 4,
                      py: 1.5,
                      fontWeight: "bold",
                      boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                      "&:hover": { backgroundColor: "#3A0066" },
                    }}
                  >
                    Shop Now
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ) : (
            // ✅ Normal slides
            <SwiperSlide key={slide.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column-reverse", md: "row" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: { xs: 2, md: 6 },
                  py: { xs: 2, md: 5 }, // ✅ reduced padding
                  minHeight: "500px",
                }}
              >
                {/* Left Text */}
                <Box
                  sx={{
                    flex: 1,
                    textAlign: { xs: "center", md: "left" },
                    mb: { xs: 4, md: 0 },
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    gutterBottom
                    sx={{ color: "#333" }}
                  >
                    {slide.subtitle}
                  </Typography>

                  <Typography
                    variant="h2"
                    fontWeight="700"
                    sx={{ color: "#4B0082", lineHeight: 1.2, mb: 2 }}
                  >
                    {slide.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ maxWidth: 500, mb: 3, color: "#666" }}
                  >
                    {slide.desc}
                  </Typography>

                  <Button
                    variant="contained"
                    startIcon={<ShoppingBagIcon />}
                    sx={{
                      backgroundColor: "#4B0082",
                      borderRadius: "999px",
                      px: 4,
                      py: 1.5,
                      fontWeight: "bold",
                      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                      "&:hover": { backgroundColor: "#3A0066" },
                    }}
                  >
                    Shop Now
                  </Button>
                </Box>

                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={slide.image}
                    alt="Hero Slide"
                    sx={{
                      maxWidth: { xs: "90%", md: "100%" },
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Box>
  );
};

export default HeroSection;