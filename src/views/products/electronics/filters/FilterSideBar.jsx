import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FiltersSidebar = () => {
  const categories = [
    {
      name: "Mobile Phones",
      subcategories: ["Smart Phones", "Feature Phones", "Foldable Phones"],
    },
    { name: "Phone Cases & Covers" },
    { name: "Screen Protectors" },
    { name: "Chargers & Cables" },
    { name: "Power Banks" },
    { name: "Earphones & Headphones" },
    { name: "Car Mounts & Holders" },
    { name: "Memory Card & Storage" },
    { name: "Phone Mounts" },
    { name: "Smartwatches & Wearable" },
    { name: "Mobile Gaming Accessories" },
  ];

  const dummyFilters = [
    {
      name: "Brands",
      options: ["Samsung", "Apple", "OnePlus", "Vivo", "Oppo"],
    },
    {
      name: "Price Range",
      options: ["Under ₹10,000", "₹10,000 - ₹30,000", "₹30,000 - ₹60,000", "Above ₹60,000"],
    },
    {
      name: "Discount",
      options: ["10% or more", "25% or more", "50% or more"],
    },
  ];

  return (
    <Box sx={{ pr: 1 }}>
      {/* Categories Accordion */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 700, color: "#4b0082" }}>Categories</Typography>
        </AccordionSummary>

        <AccordionDetails>
          {categories.map((cat) => (
            <Accordion key={cat.name} sx={{ boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ "& .MuiAccordionSummary-content": { margin: 0 }, py: 0.5 }}
              >
                <Typography sx={{ fontWeight: 500 }}>{cat.name}</Typography>
              </AccordionSummary>

              {cat.subcategories && (
                <AccordionDetails sx={{ pl: 3 }}>
                  <FormGroup>
                    {cat.subcategories.map((sub) => (
                      <FormControlLabel
                        key={sub}
                        control={<Checkbox size="small" />}
                        label={sub}
                      />
                    ))}
                  </FormGroup>
                </AccordionDetails>
              )}
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>

      <Divider sx={{ my: 1 }} />

      {/* Dummy Filters */}
      {dummyFilters.map((filter) => (
        <Accordion key={filter.name}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>{filter.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {filter.options.map((opt) => (
                <FormControlLabel
                  key={opt}
                  control={<Checkbox size="small" />}
                  label={opt}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FiltersSidebar;