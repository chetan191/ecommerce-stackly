"use client";
import React, { useState } from "react";
import { Box, Stepper, Step, StepLabel, Typography, Grid } from "@mui/material";
import sellImage from "../../assets/sellersticker.png";

import CreateProfile from "./CreateProfile";
import BusinessInfo from "./BusinessInfo";
import ProductCategories from "./ProductCategories";
import KYCVerification from "./KYCVerification";
import BankDetails from "./BankDetails";

const steps = [
  "Create profile",
  "Business Information",
  "Product Categories & Address",
  "KYC / Verification",
  "Bank & Payment Details",
];

const Sell = () => {
  const [step, setStep] = useState(0);

  const nextStep = () =>
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const stepComponents = [
    <CreateProfile nextStep={nextStep} />,
    <BusinessInfo nextStep={nextStep} prevStep={prevStep} />,
    <ProductCategories nextStep={nextStep} prevStep={prevStep} />,
    <KYCVerification nextStep={nextStep} prevStep={prevStep} />,
    <BankDetails nextStep={nextStep} prevStep={prevStep} />,
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 4 }}>
      <Stepper
        activeStep={step}
        alternativeLabel
        sx={{
          mb: 6,
          overflowX: { xs: "auto", md: "visible" },
          "& .MuiStepLabel-label": {
            fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
            whiteSpace: "nowrap",
          },
          "& .MuiStepConnector-root": {
            top: { xs: 20, sm: 22, md: 24 },
          },
        }}
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" } }}
              >
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12} md={6}>
          {stepComponents[step]}
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={sellImage}
            alt="Seller illustration"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sell;
