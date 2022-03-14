import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "app/firebase/firebase";
import { AuthContext } from "app/context/AuthContext";
function App() {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      console.log("auth changed", auth);
      setUser(auth.currentUser);
    });

    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Layout />
    </AuthContext.Provider>
  );
}

export default App;
