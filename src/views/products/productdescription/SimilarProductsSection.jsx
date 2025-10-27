import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import ProductCard from "./ProductCard";

import earphoneImg from "../../../assets/ph4.jpg";
import laptopImg from "../../../assets/ph4.jpg";

const products = [
  {
    id: 1,
    name: "Wireless Earphone",
    brand: "Sony",
    price: "₹2,999",
    oldPrice: "₹3,999",
    discount: "25%",
    rating: 5,
    img: earphoneImg,
  },
  {
    id: 2,
    name: "Gaming Laptopjkhgfdsfghjkljlhgfdsfdfghjkljkhfdsdfghjkljhfdsadfgh",
    brand: "Dell",
    price: "₹74,999",
    oldPrice: "₹84,999",
    discount: "12%",
    rating: 5,
    img: laptopImg,
  },
  {
    id: 3,
    name: "Smart Mobile",
    brand: "Samsung",
    price: "₹19,999",
    oldPrice: "₹22,999",
    discount: "15%",
    rating: 5,
    img: earphoneImg,
  },
  {
    id: 4,
    name: "Smart Watch",
    brand: "Apple",
    price: "₹29,999",
    oldPrice: "₹34,999",
    discount: "10%",
    rating: 5,
    img: laptopImg,
  },
];

export default function SimilarProductsSection() {
      const handleViewAll = () => {
    alert("View All - Interested Products");
  };

  return (
    <Box sx={{ width: "100%", mt: 3 }}>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Similar Products
        </Typography>
    
        <Button
          variant="text"
          endIcon={<ArrowForwardIos />}
          onClick={handleViewAll}
          sx={{ textTransform: "none" }}  >
          View All
        </Button>
      </Box>
    
      <Grid
        container
        spacing={2}
        sx={{ margin: 0, width: "100%" }}
      >
        {products.slice(0,4).map((product, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3} 
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
    
  );
}
