import React from "react";
import TopNavbar from "app/components/TopNavbar/TopNavbar";
import Navbar from "app/components/Navbar/Navbar";
import Homepage from "app/components/Homepage/Homepage";
import Cart from "app/components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "app/components/PageNotFound/PageNotFound";
import Register from "app/components/Register/Register";
import Login from "app/components/Login/Login";
const Layout = React.memo(() => {
  return (
    <Router>
      <TopNavbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
});

export default Layout;
