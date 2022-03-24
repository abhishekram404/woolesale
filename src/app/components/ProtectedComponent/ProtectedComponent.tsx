import React from "react";
import { AuthContext } from "app/context/AuthContext";
import { IProtectedComponent } from "app/Interfaces/IProtectedComponent";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
const ProtectedComponent = ({ outlet }: IProtectedComponent) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return outlet;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedComponent;
