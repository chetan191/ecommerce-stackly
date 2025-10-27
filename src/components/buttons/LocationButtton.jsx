import React, { useState, useEffect } from "react";
import { Button, CircularProgress } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";

const LocationButton = ({ onLocationChange }) => {
  const [locationText, setLocationText] = useState("Detecting...");
  const [loading, setLoading] = useState(false);

  const fetchLocationName = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      );
      const data = await res.json();
      const city =
        data.address?.city ||
        data.address?.town ||
        data.address?.village ||
        data.address?.state ||
        "Unknown Location";
      setLocationText(city);
      onLocationChange?.(city);
    } catch (error) {
      console.error("Error fetching location name:", error);
      setLocationText("Location unavailable");
    }
  };

  const detectLocation = () => {
    setLoading(true);
    if (!navigator.geolocation) {
      setLocationText("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        fetchLocationName(latitude, longitude);
        setLoading(false);
      },
      (error) => {
        console.error("Location access denied:", error);
        setLocationText("Enable location access");
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    detectLocation();
  }, []);

  return (
    <Button
      variant="outlined"
      startIcon={loading ? <CircularProgress size={18} /> : <RoomIcon />}
      onClick={detectLocation}
      sx={{
        borderRadius: "999px",
        textTransform: "none",
        borderColor: "#ddd",
        color: "#333",
        height: { xs: 40, md: 48 },
        px: 2,
        fontSize: { xs: "0.7rem", sm: "0.85rem", md: "0.95rem" },
        fontFamily: "Sora, sans-serif",
      }}
    >
      {locationText}
    </Button>
  );
};

export default LocationButton;