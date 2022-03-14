import React, { useState } from "react";
import InputLabelGroup from "app/components/InputLabelGroup/InputLabelGroup";
import styles from "./Register.module.scss";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { GrStatusGood, GrFormClose } from "react-icons/gr";
import { Formik, Form } from "formik";
import * as Yup from "yup";
const Register = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [satisfyUppercase, setSatisfyUppercase] = useState(false);
  const [satisfyLowercase, setSatisfyLowercase] = useState(false);
  const [satisfyNumber, setSatisfyNumber] = useState(false);
  const [satisfySpecialChar, setSatisfySpecialChar] = useState(false);
  const [satisfy8Chars, setSatisfy8Chars] = useState(false);

  const checkUppercase = (text: string) => {
    return /[A-Z]+/.test(text);
  };
  const checkLowercase = (text: string) => {
    return /[a-z]+/.test(text);
  };
  const checkNumber = (text: string) => {
    return /[0-9]+/.test(text);
  };
  const checkSpecialChars = (text: string) => {
    return /[@$#!%.*?&]+/.test(text);
  };
  const check8Chars = (text: string) => {
    return text.length >= 8;
  };

  const checkPasswordRequirements = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = e.target.value;
    if (checkUppercase(value)) {
      setSatisfyUppercase(true);
    } else {
      setSatisfyUppercase(false);
    }
    if (checkLowercase(value)) {
      setSatisfyLowercase(true);
    } else {
      setSatisfyLowercase(false);
    }
    if (checkNumber(value)) {
      setSatisfyNumber(true);
    } else {
      setSatisfyNumber(false);
    }
    if (checkSpecialChars(value)) {
      setSatisfySpecialChar(true);
    } else {
      setSatisfySpecialChar(false);
    }
    if (check8Chars(value)) {
      setSatisfy8Chars(true);
    } else {
      setSatisfy8Chars(false);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email is not valid.")
      .required("Email is required."),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters.")
      .max(32, "Password can't be more than 32 characters.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ @$#!%.*?&])[A-Za-z\d @$#!%*.?&]{8,}$/,
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
            name="email"
            label="Email"
            type="email"
            required={true}
          />
          <InputLabelGroup
            name="password"
            label="Password"
            type="password"
            required={true}
            onKeyUp={checkPasswordRequirements}
          />
          <PrimaryButton type="submit">Register</PrimaryButton>
        </Form>
        <section className={styles.helperSection}>
          <h3>Password requirements</h3>
          <ul className={styles.passwordRulesList}>
            <li className={styles.passwordRule}>
              {satisfyUppercase ? <GrStatusGood /> : <GrFormClose />}
              At least 1 uppercase letter
            </li>
            <li className={styles.passwordRule}>
              {satisfyLowercase ? <GrStatusGood /> : <GrFormClose />}
              At least 1 lowercase letter
            </li>
            <li className={styles.passwordRule}>
              {satisfySpecialChar ? <GrStatusGood /> : <GrFormClose />}
              At least 1 special character
            </li>
            <li className={styles.passwordRule}>
              {satisfyNumber ? <GrStatusGood /> : <GrFormClose />}
              At least 1 number
            </li>
            <li className={styles.passwordRule}>
              {satisfy8Chars ? <GrStatusGood /> : <GrFormClose />}
              Must be at least 8 characters long
            </li>
          </ul>
        </section>
      </div>
    </Formik>
  );
};
export default Register;
