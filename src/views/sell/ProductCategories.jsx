import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  MenuItem,
  Select,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";

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

const StyledSelect = styled(Select)({
  borderRadius: "12px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#c77dff",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#6a0dad",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#6a0dad",
    borderWidth: "1.5px",
  },
  "& .MuiSelect-select": {
    padding: "14px 16px",
  },
});

const categories = [
  "Electronics",
  "Fashion",
  "Grocery",
  "Home & Kitchen",
  "Books",
  "Beauty & Personal Care",
  "Sports & Fitness",
  "Toys & Baby Products",
  "Automotive",
  "Other",
];

const ProductCategories = ({ nextStep, prevStep }) => {
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("IN");
  const [compliance, setCompliance] = useState({
    hazardous: false,
    regulations: false,
  });

  const handleSubmit = () => {
    if (category && country && compliance.regulations) {
      nextStep();
    } else {
      alert("Please fill all fields and accept compliance!");
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
        Product Categories & address
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Select your selling category and enter your business area
      </Typography>

      {/* Form */}
      <Stack
        spacing={2}
        sx={{
          width: { xs: "90vw", md: "50vw" },
          maxWidth: "600px",
        }}
      >
        <StyledTextField placeholder="Product Name" fullWidth />
        <StyledTextField placeholder="Product Description" fullWidth />

        {/* Category Select */}
        <StyledSelect
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          displayEmpty
          fullWidth
        >
          <MenuItem disabled value="">
            Select Category
          </MenuItem>
          {categories.map((cat, index) => (
            <MenuItem key={index} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </StyledSelect>

        {/* Country Select */}
        <StyledSelect
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          fullWidth
        >
          <MenuItem value="IN">🇮🇳 India</MenuItem>
          <MenuItem value="US">🇺🇸 USA</MenuItem>
          <MenuItem value="UK">🇬🇧 UK</MenuItem>
        </StyledSelect>

        {/* Compliance Section */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" sx={{ color: "purple", mb: 1 }}>
            Compliance
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={compliance.hazardous}
                onChange={(e) =>
                  setCompliance({ ...compliance, hazardous: e.target.checked })
                }
              />
            }
            label="This product is not hazardous or restricted"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={compliance.regulations}
                onChange={(e) =>
                  setCompliance({
                    ...compliance,
                    regulations: e.target.checked,
                  })
                }
              />
            }
            label="I confirm this product complies with regulations in my country"
          />
        </Box>

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

export default ProductCategories;