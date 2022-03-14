import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "app/firebase/firebase";
const useSignOut = () => {
  const signOutUser = async () => {
    return await signOut(auth);
  };

  return { signOutUser };
};

export default useSignOut;
