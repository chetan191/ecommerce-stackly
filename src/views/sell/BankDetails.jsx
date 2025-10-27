"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import stripe from "../../assets/stripe.png";
import paypal from "../../assets/paypal.png";
import razorpay from "../../assets/razorpay.png"

// Styled Input
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

const BankDetails = ({ nextStep, prevStep }) => {
  const [form, setForm] = useState({
    accountHolder: "",
    bankName: "",
    country: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.accountHolder && form.bankName && form.country) {
      nextStep();
    } else {
      alert("Please fill all mandatory fields!");
    }
  };

  return (
    <Box>
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: "purple", mb: 1 }}
      >
        Bank & Payment Details
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Enter your bank account details and UPI for secure settlements
      </Typography>

      <Stack spacing={3} sx={{ width: { xs: "90vw", md: "50vw" }, maxWidth: "600px" }}>
        {/* Account Holder */}
        <StyledTextField
          label="Account Holder Name"
          name="accountHolder"
          value={form.accountHolder}
          onChange={handleChange}
          fullWidth
        />

        {/* Bank Name */}
        <StyledTextField
          label="Bank Name"
          name="bankName"
          value={form.bankName}
          onChange={handleChange}
          fullWidth
        />

        {/* Country */}
        <StyledTextField
          label="Country of Bank"
          name="country"
          value={form.country}
          onChange={handleChange}
          fullWidth
        />

        {/* OR Continue With */}
        <Typography align="center" color="text.secondary">
          or continue with
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              p: 2,
            }}
          >
            <img src={paypal} alt="PayPal" width={40} height={40} />
          </IconButton>
          <IconButton
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              p: 2,
            }}
          >
            <img src={stripe} alt="Stripe" width={40} height={40} />
          </IconButton>
          <IconButton
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              p: 2,
            }}
          >
            <img src={razorpay} alt="Razorpay" width={40} height={40} />
          </IconButton>
        </Stack>

        {/* Buttons */}
        <Stack direction="row" spacing={2} mt={2}>
          <Button
            variant="outlined"
            onClick={prevStep}
            sx={{ borderRadius: "8px", py: 1.2 }}
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
            onClick={handleSubmit}
            fullWidth
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default BankDetails;