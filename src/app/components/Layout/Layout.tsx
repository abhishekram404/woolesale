import React from "react";
import TopNavbar from "app/components/TopNavbar/TopNavbar";
import Navbar from "app/components/Navbar/Navbar";
import Homepage from "app/components/Homepage/Homepage";
import Cart from "app/components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Layout = () => {
  return (
    <Router>
      <TopNavbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
};

export default Layout;
