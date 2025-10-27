import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  TextField,
  InputAdornment,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RoomIcon from "@mui/icons-material/Room";
import PersonIcon from "@mui/icons-material/Person";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import star from "../../assets/Star.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import newArrivalsImg from "../../assets/categories/electronics.png";
import electronicsImg from "../../assets/categories/electronics.png";
import fashionImg from "../../assets/categories/fashion.png";
import accessoriesImg from "../../assets/categories/accessories.png";
import appliancesImg from "../../assets/categories/appliances.png";
import travelImg from "../../assets/categories/travel.png";
import foodImg from "../../assets/categories/food.png";
import groceryImg from "../../assets/categories/grocery.png";
import LocationButton from "../buttons/LocationButtton";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const categoryButtons = [
    {
      label: "New Arrivals",
      img: newArrivalsImg,
      special: true,
      route: "/new-arrivals",
    },
    { label: "Electronics", img: electronicsImg, route: "/electronics" },
    { label: "Fashion", img: fashionImg, route: "/fashion" },
    { label: "Accessories", img: accessoriesImg, route: "/accessories" },
    { label: "Appliances", img: appliancesImg, route: "/appliances" },
    { label: "Travel Booking", img: travelImg, route: "/travel" },
    { label: "Food", img: foodImg, route: "/food" },
    { label: "Grocery", img: groceryImg, route: "/grocery" },
  ];
  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "#ffffff",
          px: { xs: 2, md: 8 },
          py: 1,
          top: 0,
          zIndex: 1100,
          borderBottom: "1px solid rgba(0,0,0,0.04)",
          fontFamily: "Sora, sans-serif",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 2 },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: { xs: 40, md: 48 },
                width: "auto",
                cursor: "pointer",
                display: "block",
              }}
            />

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <LocationButton
                onLocationChange={(location) =>
                  console.log("User location:", location)
                }
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 2 },
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                display: "block",
                flexGrow: 1,
                maxWidth: { xs: "100%", sm: 320, md: 420 },
                mx: { xs: 2, md: 0 },
              }}
            >
              <TextField
                fullWidth
                size="small"
                placeholder="Explore brands, products, and deals..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "#999" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  height: { xs: 40, md: 48 },
                  background: "#faf7ff",
                  borderRadius: "999px",
                  "& .MuiOutlinedInput-root": {
                    height: "100%",
                    borderRadius: "999px",
                    px: 1,
                    fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" },
                    fontFamily: "Sora, sans-serif",
                    "& fieldset": { borderColor: "#ddd" },
                    "&:hover fieldset": { borderColor: "#6B2DA8" },
                    "&.Mui-focused fieldset": { borderColor: "#6B2DA8" },
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                component={Link}
                to="/sell"
                startIcon={<AddShoppingCartIcon />}
                sx={{
                  backgroundColor: "#6B2DA8",
                  borderRadius: "999px",
                  textTransform: "none",
                  px: 3,
                  height: { xs: 40, md: 48 },
                  fontSize: { sm: "0.85rem", md: "0.95rem" },
                  fontFamily: "Sora, sans-serif",
                  boxShadow: "0 8px 20px rgba(107,45,168,0.18)",
                  "&:hover": { backgroundColor: "#5a228f" },
                }}
              >
                Join as a Seller
              </Button>

              <Button
                variant="outlined"
                component={Link}
                to="/signin"
                startIcon={<PersonIcon />}
                sx={{
                  color: "#6B2DA8",
                  borderColor: "#ddd",
                  backgroundColor: "#fff",
                  borderRadius: "999px",
                  textTransform: "none",
                  px: 3,
                  height: { xs: 40, md: 48 },
                  fontSize: { sm: "0.85rem", md: "0.95rem" },
                  fontFamily: "Sora, sans-serif",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
                  display: { xs: "none", sm: "flex" },
                  "&:hover": { borderColor: "#6B2DA8" },
                }}
              >
                Log In
              </Button>
            </Box>
          </Box>
        </Toolbar>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            overflowX: "auto",
            whiteSpace: "nowrap",
            ml: { xs: 1.5, md: 0 },
            pt: 2,
            pb: 2,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {categoryButtons.map((button, index) => {
            const active = index === activeIndex;
            return (
              <Box
                key={button.label}
                sx={{ position: "relative", display: "inline-flex" }}
              >
                {button.special && (
                  <Box
                    component="img"
                    src={star}
                    alt="star"
                    sx={{
                      position: "absolute",
                      left: -1,
                      top: -6,
                      width: 16,
                      height: 16,
                    }}
                  />
                )}

                <Button
                  component={Link}
                  to={button.route}
                  onClick={() => setActiveIndex(index)}
                  variant={active ? "contained" : "outlined"}
                  sx={{
                    flexShrink: 0,
                    borderRadius: "999px",
                    color: active ? "#fff" : "#4B0082",
                    borderColor: active ? "#6B2DA8" : "#ddd",
                    backgroundColor: active ? "#6B2DA8" : "#fff",
                    textTransform: "none",
                    boxShadow: active
                      ? "0 8px 20px rgba(107,45,168,0.12)"
                      : "0px 2px 6px rgba(0,0,0,0.04)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    fontWeight: 500,
                    fontSize: { xs: "0.6rem", sm: "0.4rem", md: "0.5rem" },
                    minWidth: { xs: 90, sm: 120, md: 140 },
                    px: { xs: 1.5, sm: 2, md: 3 },
                    height: { xs: 36, md: 44 },
                    transition: "all 180ms ease",
                    fontFamily: "Sora, sans-serif",
                    "&:hover": {
                      backgroundColor: active ? "#5a228f" : "#faf7ff",
                      borderColor: active ? "#5a228f" : "#ccc",
                    },
                  }}
                >
                  {button.img && (
                    <Box
                      component="img"
                      src={button.img}
                      alt={button.label}
                      sx={{ width: 20, height: 20 }}
                    />
                  )}
                  <Typography component="span" sx={{ pl: 0.5 }}>
                    {button.label}
                  </Typography>
                </Button>

                {button.special && (
                  <Box
                    component="img"
                    src={star}
                    alt="star"
                    sx={{
                      position: "absolute",
                      right: -3,
                      bottom: -5,
                      width: 16,
                      height: 16,
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      </AppBar>
    </>
  );
};

export default Header;
