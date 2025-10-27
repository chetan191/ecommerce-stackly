import React from "react";
import { Box } from "@mui/material";
import HeroSection from "./herosection/Herosection";
import Banner from "./banner/Banner";
import TreandingDeals from "./trendingdeals/TreandingDeals";
import SmartSignin from "./smartsignin/SmartSignin";
import BestSeller from "./bestseller/Bestseller";
import FeaturedDeals from "./featureddeals/FeaturedDeals";
import Trust from "./featureddeals/Trust";

const HomePage = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <HeroSection />
      <Box sx={{ m: 0, p: 0 }}>
        <Banner />
      </Box>
      <Box>
        <TreandingDeals />
      </Box>
      <Box>
        <BestSeller />
      </Box>
      <FeaturedDeals />
      <Box>
        <SmartSignin />
      </Box>
      <Box>
        <Trust />
      </Box>
    </Box>
  );
};

export default HomePage;
