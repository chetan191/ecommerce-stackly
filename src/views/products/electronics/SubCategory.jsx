import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

const SubCategoryTabs = ({ categories, activeCategory, onChange }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
      <Tabs
        value={activeCategory}
        onChange={(e, val) => onChange(val)}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        {categories.map((cat) => (
          <Tab key={cat} label={cat} value={cat} />
        ))}
      </Tabs>
    </Box>
  );
};

export default SubCategoryTabs;