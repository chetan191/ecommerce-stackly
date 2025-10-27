"use client";
import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const features = [
  {
    id: 1,
    icon: <LocalShippingIcon fontSize="medium" sx={{ color: "purple" }} />,
    text: "Free & Fast Shipping",
  },
  {
    id: 2,
    icon: <SecurityIcon fontSize="medium" sx={{ color: "purple" }} />,
    text: "Secure Checkout",
  },
  {
    id: 3,
    icon: <AutorenewIcon fontSize="medium" sx={{ color: "purple" }} />,
    text: "Easy 7-Day Returns",
  },
  {
    id: 4,
    icon: <AccessTimeIcon fontSize="medium" sx={{ color: "purple" }} />,
    text: "24/7 Support",
  },
];

const Trust = () => {
  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 2, sm: 4, md: 8 },
        textAlign: "center",
        bgcolor: "white",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h6"
        fontWeight="600"
        gutterBottom
        sx={{ color: "purple", mb: 3 }}
      >
        Why Thousands Trust Us for Style & Tech
      </Typography>

      {/* Features */}
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={feature.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{ textAlign: "left" }}
            >
              {feature.icon}
              <Typography
                variant="body1"
                sx={{ fontSize: "0.95rem", fontWeight: 500, color: "#333" }}
              >
                {feature.text}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Trust;