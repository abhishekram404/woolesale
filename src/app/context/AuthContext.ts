import React from "react";
import { IAuthContext } from "app/Interfaces/IAuthContext";
export const AuthContext = React.createContext<IAuthContext>({
  user: null,
  setUser: Function,
});
