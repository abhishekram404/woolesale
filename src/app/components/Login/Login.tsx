import React, { useState } from "react";
import styles from "app/components/Register/Register.module.scss";
import InputLabelGroup from "../InputLabelGroup/InputLabelGroup";
import { Formik, Form } from "formik";
import PrimaryButton from "app/components/Buttons/PrimaryButton/PrimaryButton";
const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formData, setFormData] = useState(initialValues);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => setFormData(values)}
    >
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
