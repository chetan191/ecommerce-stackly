import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Box } from "@mui/material";

function Layout() {
  const location = useLocation();

  const hideLayout = ["/signin", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}
      <Box sx={{ minHeight: "80vh", py: 6 }}>
        <AppRoutes />
      </Box>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;