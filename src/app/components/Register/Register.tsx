import React from "react";
import InputLabelGroup from "app/components/InputLabelGroup/InputLabelGroup";
import styles from "./Register.module.scss";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { Formik, Form } from "formik";
import * as Yup from "yup";
const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(30, "Name can't be longer than 30 characters.")
      .min(3, "Name must be minimum 3 characters.")
      .required("Name is required."),
    email: Yup.string()
      .email("Email is not valid.")
      .required("Email is required."),
    phone: Yup.number()
      .min(10, "Phone no. is too short.")
      .max(13, "Phone number can't be any longer than 13 characters.")
      .required("Phone is required."),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters.")
      .max(32, "Password can't be more than 32 characters.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%.*?&])[A-Za-z\d@$#!%*.?&]{8,}$/,
        "Password is not valid."
      )
      .required("Password is required."),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
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
            type="number"
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
