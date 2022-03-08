import React from "react";
import InputLabelGroup from "app/components/InputLabelGroup/InputLabelGroup";
import styles from "./Register.module.scss";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { Formik, Form } from "formik";
const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      <div className={styles.register}>
        <Form className={styles.form}>
          <h2 className={styles.formTitle}>Register</h2>
          <p className={styles.formDescription}>
            Register and become a part of the WooleSale family
          </p>
          <InputLabelGroup
            name="name"
            label="Name"
            type="text"
            required={true}
          />
          <InputLabelGroup
            name="email"
            label="Email"
            type="email"
            required={true}
          />
          <InputLabelGroup
            name="phone"
            label="Phone"
            type="tel"
            required={true}
          />
          <InputLabelGroup
            name="password"
            label="Password"
            type="password"
            required={true}
          />
          <PrimaryButton type="submit">Register</PrimaryButton>
        </Form>
      </div>
    </Formik>
  );
};
export default Register;
