import React from "react";
import TopNavbar from "app/components/TopNavbar/TopNavbar";
import Navbar from "app/components/Navbar/Navbar";
import Homepage from "app/components/Homepage/Homepage";
import Cart from "app/components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "app/components/PageNotFound/PageNotFound";
import Register from "app/components/Register/Register";
import Login from "app/components/Login/Login";
import ViewProduct from "app/components/ViewProduct/ViewProduct";
import Profile from "app/components/Profile/Profile";
const Layout = React.memo(() => {
  return (
    <Router>
      <TopNavbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ViewProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
});

export default Layout;
