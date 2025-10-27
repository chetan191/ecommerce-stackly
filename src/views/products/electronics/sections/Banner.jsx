import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = ({ text }) => (
  <Box
    sx={{
      height: 200,
      bgcolor: "grey.100",
      borderRadius: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mb: 3,
    }}
  >
    <Typography variant="h6">{text}</Typography>
  </Box>
);

export default Banner;