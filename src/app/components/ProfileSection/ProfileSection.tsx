import React from "react";
import formStyles from "app/components/Register/Register.module.scss";
import { Formik, Form } from "formik";
import styles from "./ProfileSection.module.scss";
import InputLabelGroup from "app/components/InputLabelGroup/InputLabelGroup";
import PrimaryButton from "app/components/Buttons/PrimaryButton/PrimaryButton";
const ProfileSection = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: any) => console.log(values)}
    >
      <Form className={styles.profileSection}>
        <h1 className={formStyles.formTitle}>Your information</h1>
        <p className={formStyles.formDescription}>
          Please specify your correct info. This info will be used when you
          checkout.
        </p>
        <InputLabelGroup name="name" label="Name" type="text" />
        <InputLabelGroup name="email" label="Email" type="email" />
        <InputLabelGroup
          name="phone"
          label="Phone (with country code)"
          type="text"
        />
        <InputLabelGroup name="address" label="Delivery Address" type="text" />
        <InputLabelGroup name="zip" label="Zip code" type="text" />
        <PrimaryButton type="submit">Save info</PrimaryButton>
      </Form>
    </Formik>
  );
};
export default ProfileSection;
