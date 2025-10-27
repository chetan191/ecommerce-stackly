import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("91");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", `+${countryCode}`, phone);
  };

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        bgcolor: "#ffffff",
        px: 2,
        pt: { xs: 6, sm: 10 },
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 400, mx: "auto" }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3 },
            textAlign: "center",
            background: "transparent",
            width: "100%",
          }}
        >
          <Box display="flex" justifyContent="center" mb={3}>
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "160px",
                maxWidth: "80%",
                height: "auto",
              }}
            />
          </Box>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Login
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            mb={3}
            sx={{ fontSize: "0.95rem" }}
          >
            Grow your business with us by logging in to your seller account.
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            gap={2}
          >
            <Box display="flex" gap={1}>
              <Select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#d8bdfd",
                  },
                  height: 55,
                  minWidth: "100px",
                }}
              >
                <MenuItem value="91">🇮🇳 91+</MenuItem>
                <MenuItem value="1">🇺🇸 1+</MenuItem>
                <MenuItem value="44">🇬🇧 44+</MenuItem>
              </Select>

              {/* Phone Number */}
              <TextField
                placeholder="enter your phone number"
                variant="outlined"
                fullWidth
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    "& fieldset": { borderColor: "#d8bdfd" },
                    "&:hover fieldset": { borderColor: "#a06ff2" },
                    "&.Mui-focused fieldset": { borderColor: "#6a1b9a" },
                  },
                }}
              />
            </Box>

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 1,
                py: 1.5,
                borderRadius: 10,
                background: "linear-gradient(90deg, #9a4ef1, #2e004f)",
                color: "#fff",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(90deg, #8739d9, #24003e)",
                },
              }}
            >
              Login
            </Button>
          </Box>

          <Box
            mt={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={"10px"}
          >
            <IconButton
              onClick={() => navigate(-1)}
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#fff",
                boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
                mb: 1,
              }}
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="body2">Back</Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default SignIn;
