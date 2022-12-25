import React, { useContext } from "react";
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
import Footer from "app/components/Footer/Footer";
import { auth } from "app/firebase/firebase";
import styles from "./Layout.module.scss";
import { sendEmailVerification } from "firebase/auth";
import { AuthContext } from "app/context/AuthContext";
import ProtectedComponent from "app/components/ProtectedComponent/ProtectedComponent";
import PasswordReset from "app/components/PasswordReset/PasswordReset";
const Layout = React.memo(() => {
  const { user } = useContext(AuthContext);

  const verifyEmail = () => {
    if (auth.currentUser) {
      sendEmailVerification(auth.currentUser);
      alert("Verification email sent");
    }
  };
  return (
    <Router>
      {user && !user.emailVerified && (
        <h4 className={styles.emailVerification}>
          Please verify your email address. Click{" "}
          <button onClick={verifyEmail}>here</button>
          to send a verification link to your email.
        </h4>
      )}
      <TopNavbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ViewProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/cart"
          element={<ProtectedComponent outlet={<Cart />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedComponent outlet={<Profile />} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
});

export default Layout;
