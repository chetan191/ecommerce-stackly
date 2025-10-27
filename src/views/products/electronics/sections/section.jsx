import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import ProductCard from "./ProductCard";

const Section = ({ title, products = [] }) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="subtitle1"
      sx={{ mb: 2, fontWeight: 600, color: "primary.main" }}
    >
      {title}
    </Typography>

    <Grid
      container
      spacing={2}
      justifyContent="flex-start"
      sx={{
        flexWrap: "wrap",
      }}
    >
      {products.map((p) => (
        <Grid
          key={p.id}
          item
          sx={{
            flex: "0 0 auto",
            width: {
              xs: "48%", 
              sm: "23%", 
              md: "22%",
              lg: "18%",
            },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Section;