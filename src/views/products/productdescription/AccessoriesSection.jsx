import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ProductCard from "./ProductCard";

import earphoneImg2 from "../../../assets/earphones.png";
import lap1 from "../../../assets/lap1.jpeg";
import phoneimg from "../../../assets/phoneimg.jpeg"



const products = [
  {
    id: 1,
    name: "Wireless Earphone",
    brand: "Sony",
    price: "₹2,999",
    oldPrice: "₹3,999",
    discount: "25%",
    rating: 3,
    img: lap1,
  },
  {
    id: 2,
    name: "Gaming Laptop",
    brand: "Dell",
    price: "₹74,999",
    oldPrice: "₹84,999",
    discount: "12%",
    rating: 5,
    img: lap1,
  },
  {
    id: 3,
    name: "Smart Mobile",
    brand: "Samsung",
    price: "₹19,999",
    oldPrice: "₹22,999",
    discount: "15%",
    rating: 5,
    img: earphoneImg2,
  },
  {
    id: 4,
    name: "Smart Watch",
    brand: "Apple",
    price: "₹29,999",
    oldPrice: "₹34,999",
    discount: "10%",
    rating: 5,
    img: phoneimg,
  },
  
  {
    id: 5,
    name: "Smart Watch",
    brand: "Apple",
    price: "₹29,999",
    oldPrice: "₹34,999",
    discount: "10%",
    rating: 5,
    img: phoneimg,
  },
];

export default function AccessoriesSection() {

   const scrollRef = useRef(null);
     const [showLeftArrow, setShowLeftArrow] = useState(false);
     const [showRightArrow, setShowRightArrow] = useState(true);
   
     const theme = useTheme();
     const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
   
     const handleScroll = (direction) => {
       const container = scrollRef.current;
       if (!container) return;
   
       const scrollAmount = container.clientWidth * 0.9;
       const newScroll =
         direction === "left"
           ? container.scrollLeft - scrollAmount
           : container.scrollLeft + scrollAmount;
   
       container.scrollTo({
         left: newScroll,
         behavior: "smooth",
       });
     };
   
     const checkScrollPosition = () => {
       const container = scrollRef.current;
       if (!container) return;
   
       const scrollLeft = container.scrollLeft;
       const maxScrollLeft = container.scrollWidth - container.clientWidth;
   
       setShowLeftArrow(scrollLeft > 0);
       setShowRightArrow(scrollLeft < maxScrollLeft - 1);
     };
   
     useEffect(() => {
       const container = scrollRef.current;
       if (container) {
         container.addEventListener("scroll", checkScrollPosition);
         checkScrollPosition();
       }
       return () => {
         if (container) {
           container.removeEventListener("scroll", checkScrollPosition);
         }
       };
     }, []);
   
     return (
       <Box sx={{ position: "relative", px: { xs: 1, sm: 1, md: 1.5 }, py: 4 }}>
         {/* Header */}
         <Box
           sx={{
             display: "flex",
             justifyContent: "space-between",
             alignItems: "center",
             mb: 2,
           }}
         >
           <Typography
             variant="h6"
             sx={{
               fontWeight: "bold",
               color: "#222",
               fontSize: { xs: "16px", md: "20px" },
             }}
           >
             Accessories
           </Typography>
           <Typography
             variant="body2"
             sx={{
               color: "#943DCC",
               fontWeight: 600,
               cursor: "pointer",
               "&:hover": { textDecoration: "underline" },
             }}
           >
             View All →
           </Typography>
         </Box>
   
         {/* Left Arrow */}
         {!isMobile && showLeftArrow && (
           <IconButton
             onClick={() => handleScroll("left")}
             sx={{
               position: "absolute",
               left: 10,
               top: "50%",
               transform: "translateY(-50%)",
               zIndex: 2,
               bgcolor: "white",
               boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
               "&:hover": { bgcolor: "#f3e5f5" },
             }}
           >
             <ArrowBackIos fontSize="small" />
           </IconButton>
         )}
   
         {/* Right Arrow */}
         {!isMobile && showRightArrow && (
           <IconButton
             onClick={() => handleScroll("right")}
             sx={{
               position: "absolute",
               right: 10,
               top: "50%",
               transform: "translateY(-50%)",
               zIndex: 2,
               bgcolor: "white",
               boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
               "&:hover": { bgcolor: "#f3e5f5" },
             }}
           >
             <ArrowForwardIos fontSize="small" />
           </IconButton>
         )}
   
         {/* Product Cards */}
         <Box
           ref={scrollRef}
           sx={{
             display: "flex",
             gap: { xs: 6, sm: 6, md: 6 },
             overflowX: "auto",
             scrollBehavior: "smooth",
             scrollbarWidth: "none",
             "&::-webkit-scrollbar": { display: "none" },
             py: 1,
           }}
         >
           {products.slice(0, 6).map((product) => (
             <Box
               key={product.id}
               sx={{
                 gap: 10,
                 flex: {
                   xs: "0 0 90%",
                   sm: "0 0 43%",
                   md: "0 0 23%",
                 },
                 scrollSnapAlign: "start",
               }}
             >
               <ProductCard product={product} />
             </Box>
           ))}
         </Box>
       </Box>
     );
   };
   