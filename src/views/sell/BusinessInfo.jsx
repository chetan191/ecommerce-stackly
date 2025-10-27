"use client";
import React from "react";
import {
  Box,
  TextField,
  Button,
  Stack,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    "& fieldset": {
      borderColor: "#c77dff",
    },
    "&:hover fieldset": {
      borderColor: "#6a0dad",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6a0dad",
      borderWidth: "1.5px",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "14px 16px",
  },
});

const CountrySelect = styled(Select)({
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    padding: "14px 16px",
    fontSize: "14px",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
  },
});

const BusinessInfo = ({ nextStep, prevStep }) => {
  return (
    <>
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: "purple", mb: 1 }}
      >
        Tell us about your business
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Business Information
      </Typography>

      {/* Form */}
      <Box component="form" noValidate autoComplete="off">
        <Stack
          spacing={2}
          sx={{
            width: { xs: "90vw", md: "50vw" },
            maxWidth: "600px",
          }}
        >
          <StyledTextField label="Business Name" fullWidth />
          <StyledTextField label="Business Type" fullWidth />
          <StyledTextField label="Business Tax ID" fullWidth />
          <Typography variant="caption" color="textSecondary">
            * Enter your registered number (VAT / GST / other, as per your country)
          </Typography>

          <StyledTextField
            label="Street Address (Line 1)"
            placeholder="House No., Building, Street Name"
            fullWidth
          />
          <StyledTextField
            label="Street Address (Line 2)"
            placeholder="Apartment, Suite, Landmark (if needed)"
            fullWidth
          />

          {/* City + State */}
          <Stack direction="row" spacing={2}>
            <StyledTextField label="City" fullWidth />
            <StyledTextField label="State / Province / Region" fullWidth />
          </Stack>

          {/* Country + ZIP */}
          <Stack direction="row" spacing={2}>
            <CountrySelect
              defaultValue="IN"
              fullWidth
              displayEmpty
              variant="outlined"
            >
              <MenuItem value="IN">🇮🇳 India</MenuItem>
              <MenuItem value="US">🇺🇸 USA</MenuItem>
              <MenuItem value="UK">🇬🇧 UK</MenuItem>
            </CountrySelect>
            <StyledTextField label="ZIP / Postal Code" fullWidth />
          </Stack>

          {/* Buttons */}
          <Stack direction="row" spacing={2} mt={2}>
            <Button
              variant="outlined"
              sx={{ borderRadius: "8px", py: 1.2 }}
              onClick={prevStep}
              fullWidth
            >
              Back
            </Button>

            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #6a0dad, #3b0066)",
                "&:hover": {
                  background: "linear-gradient(90deg, #3b0066, #6a0dad)",
                },
                borderRadius: "25px",
                py: 1.4,
                fontWeight: "bold",
                fontSize: "16px",
                textTransform: "none",
                height: "52px",
              }}
              onClick={nextStep}
              fullWidth
            >
              Continue
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default BusinessInfo;