import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  useMediaQuery,
  CircularProgress,
  Box,
} from "@mui/material";
import SubCategoryTabs from "../SubCategory";
import FiltersTopbar from "../filters/FiltersTopBar";
import Banner from "../sections/Banner";
import Section from "../sections/section";
import FiltersSidebar from "../filters/FilterSideBar";
import { fetchProductsByCategory } from "../../../../api/productsApi";

const categories = [
  "Mobile & Accessories",
  "Laptops & Accessories",
  "TV & Home Entertainment",
  "Audio",
  "Cameras",
  "Wearables",
  "Batteries & chargers",
];

const ElectronicsPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    let mounted = true;
    setLoadingProducts(true);
    fetchProductsByCategory(activeCategory)
      .then((res) => {
        if (!mounted) return;
        setProducts(res || []);
      })
      .catch(() => mounted && setProducts([]))
      .finally(() => mounted && setLoadingProducts(false));
    return () => (mounted = false);
  }, [activeCategory]);

  return (
    <Container maxWidth="xl" disableGutters>
      <SubCategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <Grid container sx={{ p: 1 }}>
        {!isMobile && (
          <Grid
            item
            md={3}
            sx={{
              width: "20%",
              position: "sticky",
              top: "100px", 
              alignSelf: "flex-start",
              height: "calc(100vh - 120px)", 
              overflowY: "auto", 
              pr: 1,
              "&::-webkit-scrollbar": { width: "5px" },
              "&::-webkit-scrollbar-thumb": {
                background: "#ccc",
                borderRadius: "3px",
              },
            }}
          >
            <FiltersSidebar />
          </Grid>
        )}

        <Grid
          item
          sx={{
            width: isMobile ? "100%" : "80%",
            p: 1,
            border: "1px solid #eee",
            borderRadius: "20px",
          }}
        >
          {isMobile && <FiltersTopbar />}

          {loadingProducts ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
              <CircularProgress />
            </Box>
          ) : (
            <>
              <Banner text={`Sale of this month - ${activeCategory}`} />
              <Section
                title={`Latest launches in ${activeCategory}`}
                products={products.slice(0, 5)}
              />
              <Banner text="Top Deal of this week" />
              <Section
                title={`Top ${activeCategory} deals for you`}
                products={products.slice(4, 9)}
              />
              <Banner text="Upcoming Deals" />
              <Box sx={{ mt: 2 }}>
                <Banner text={`Deals on Samsung product`} />
                <Banner text={`Deals on Oppo product`} />
                <Banner text={`Deals on Vivo product`} />
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ElectronicsPage;
