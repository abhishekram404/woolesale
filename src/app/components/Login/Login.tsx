import React, { useContext, useEffect, useState } from "react";
import styles from "app/components/Register/Register.module.scss";
import InputLabelGroup from "../InputLabelGroup/InputLabelGroup";
import { Formik, Form } from "formik";
import PrimaryButton from "app/components/Buttons/PrimaryButton/PrimaryButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "app/firebase/firebase";
import { AuthContext } from "app/context/AuthContext";
import { ILoginState } from "app/Interfaces/ILogin";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const initialValues = { email: "", password: "" };
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (values: ILoginState) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      setUser(userCredentials.user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleSubmit = (values: ILoginState) => {
    console.log(values);
    login(values);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <div className={styles.login}>
        <Form className={styles.form}>
          <h2 className={styles.formTitle}>Login</h2>
          <p className={styles.formDescription}>
            Please login to unleash the features of WooleSale that only true
            customers can have.
          </p>
          <InputLabelGroup name="email" label="Email" type="email" />
          <InputLabelGroup name="password" label="Password" type="password" />
          <PrimaryButton type="submit">Login</PrimaryButton>
        </Form>
      </div>
    </Formik>
  );
};
export default Login;
