import React from "react";
import PageTitleRow from "../PageTitleRow/PageTitleRow";
import styles from "./Profile.module.scss";
import formStyles from "app/components/Register/Register.module.scss";
import InputLabelGroup from "../InputLabelGroup/InputLabelGroup";
import { Formik, Form } from "formik";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
const Profile = () => {
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
      <div className={styles.profile}>
        <PageTitleRow>Customer profile</PageTitleRow>
        <Form className={styles.mainSection}>
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
          <InputLabelGroup
            name="address"
            label="Delivery Address"
            type="text"
          />
          <InputLabelGroup name="zip" label="Zip code" type="text" />
          <PrimaryButton type="submit">Save info</PrimaryButton>
        </Form>
      </div>
    </Formik>
  );
};
export default Profile;
