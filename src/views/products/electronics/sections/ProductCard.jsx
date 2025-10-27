import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import cardImg from "../../../../assets/watch.png";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/productdescription");
  };

  return (
    <Card
      onClick={handleCardClick}
      variant="outlined"
      sx={{
        width: "100%",
        maxWidth: 210,
        minHeight: 250,
        borderRadius: 2,
        cursor:"pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 3,

        },
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Box
          sx={{
            height: 120,
            bgcolor: "grey.100",
            borderRadius: 1.5,
            mb: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={cardImg}
            alt={product.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        <Typography
          variant="body2"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontWeight: 500,
          }}
        >
          {product.title || "Product Title"}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {product.brand || "Brand Name"}
        </Typography>

        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            ₹{product.price || "999"}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
