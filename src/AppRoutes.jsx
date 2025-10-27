import { Routes, Route } from "react-router-dom"
import SignIn from "./views/auth/signin"
import Signup from "./views/auth/signup"
import HomePage from "./views/home/HomePage"
import Sell from "./views/sell/Sell"
import ProductDescription from "./views/products/ProductDescription"
import ElectronicsPage from "./views/products/electronics/mainsection/Electronics"
import TopDealsSection from "./views/products/electronics/mainsection/TopDealsSection"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/productdescription" element={<ProductDescription />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/electronics" element={<ElectronicsPage />} />
      <Route path="/topdeals" element={<TopDealsSection />} />

    </Routes>
  )
} 

export default AppRoutes