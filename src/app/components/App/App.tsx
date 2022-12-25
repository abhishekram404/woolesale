import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "app/firebase/firebase";
import { AuthContext } from "app/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "firebase/auth";
import sanityClient from 'utils/sanity'

function App() {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {

      setUser(auth.currentUser);
    });

    return unsubscribe;
  }, []);
  
  // "images" : [images.image.asset->url]
  useEffect(()=> {
    sanityClient.fetch(`
     *[_type=="product"]{
       _id,
        _createdAt,
        name,
        price,
        stockQuantity,
        description,
      images[]{"url":asset->url}}
      `).then((data:any) => console.dir(data))
  },[])
  
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Layout />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnFocusLoss={false}
        pauseOnHover
      />{" "}
    </AuthContext.Provider>
  );
}

export default App;
