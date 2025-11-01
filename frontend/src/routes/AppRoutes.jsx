import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import About from "../pages/About";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  const location = useLocation();
  const hideLayout = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

const AppRoutes = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default AppRoutes;
