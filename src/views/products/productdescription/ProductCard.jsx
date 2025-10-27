import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Chip,
} from "@mui/material";
import { Star } from "@mui/icons-material";

export default function ProductCard({ product }) {
  const { rating = 0 } = product;

  const stars = "⭐".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "100%",
        p: 2,
        borderRadius: 3,
        boxShadow: 3,
        bgcolor: "#f8e9ff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      {product.discount && (
        <Chip
          label={`${product.discount} OFF`}
          color="secondary"
          size="small"
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            backgroundColor: "#943DCC",
            color: "#FFFFFF",
            fontWeight: "bold",
          }}
        />
      )}

      <CardMedia
        component="img"
        image={product.img}
        alt={product.name}
        sx={{
          height: "150px",
          // width:"213px",
          objectFit: "contain",
          mt: 5,
          mb: 1,
        }}
      />

      <CardContent
        //  sx={{ flexGrow: 1, }}
        sx={{
          flexGrow: 1,
          pb: "4px",
          "&:last-child": { pb: "4px" },
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "30ch",
            "@media (max-width: 350px)": {
              maxWidth: "20ch",
            },
          }}
        >
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {product.brand}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" mt={1}>
          <Typography variant="h6" color="black">
            {product.price}
          </Typography>
          <Typography
            variant="body2"
            sx={{ textDecoration: "line-through", color: "gray" }}
          >
            {product.oldPrice}
          </Typography>
        </Stack>

        {/* <Typography
          variant="body2"
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            background: "radial-gradient(circle,  #602884, #C776FA)",
            // background: "radial-gradient(circle,  #562e6fff, #C776FA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          {stars}
        </Typography>
       */}

        <Stack direction="row" spacing={0.5} mt={1}>
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              sx={{
                fontSize: "24px",
                fill: index < rating ? "url(#purpleGradient)" : "#d1b2e0",
                filter:
                  index < rating ? "drop-shadow(0 0 3px #C776FA66)" : "none",
                transition: "transform 0.2s ease, filter 0.2s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  filter: "drop-shadow(0 0 6px #C776FA99)",
                },
              }}
            />
          ))}

          {/* SVG Gradient Definition */}
          <svg width="0" height="0">
            <defs>
              <radialGradient id="purpleGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C776FA" />
                <stop offset="100%" stopColor="#602884" />
              </radialGradient>
            </defs>
          </svg>
        </Stack>
      </CardContent>
    </Card>
  );
}
