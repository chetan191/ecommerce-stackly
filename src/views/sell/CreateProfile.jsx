import React from "react";
import {
  Box,
  TextField,
  Button,
  Stack,
  Typography,
  InputAdornment,
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

const CountryCodeSelect = styled(Select)({
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    padding: "0 8px",
    fontSize: "14px",
  },
});

const CreateProfile = ({ nextStep }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        p: 2,
      }}
    >
        <Box sx={{ width: "100%", maxWidth: "600px", textAlign: "left" }}>
    <Typography
      variant="h4"
      fontWeight="bold"
      sx={{ color: "purple", mb: 1 }}
    >
      Start Selling today
    </Typography>
    <Typography variant="body1" sx={{ mb: 3 }}>
      Create profile
    </Typography>
  </Box>

      <Box component="form" noValidate autoComplete="off">
        <Stack
          spacing={2}
          sx={{
            width: { xs: "90vw", md: "50vw" },
            maxWidth: "600px", 
          }}
        >
          <StyledTextField placeholder="Full Name" fullWidth />
          <StyledTextField placeholder="Email ID" fullWidth />

          <StyledTextField
            placeholder="enter your phone number"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CountryCodeSelect
                    defaultValue="91"
                    variant="standard"
                    disableUnderline
                  >
                    <MenuItem value="91">🇮🇳 91+</MenuItem>
                    <MenuItem value="1">🇺🇸 1+</MenuItem>
                    <MenuItem value="44">🇬🇧 44+</MenuItem>
                  </CountryCodeSelect>
                </InputAdornment>
              ),
            }}
          />

          <StyledTextField placeholder="Password" type="password" fullWidth />

          <Button
            variant="contained"
            sx={{
              mt: 2,
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
      </Box>
    </Box>
  );
};

export default CreateProfile;