import React from "react";
import styles from "app/components/Register/Register.module.scss";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "app/firebase/firebase";
import { Form, Formik } from "formik";
import InputLabelGroup from "../InputLabelGroup/InputLabelGroup";
import { toast } from "react-toastify";
import { IPasswordReset } from "app/Interfaces/IPasswordReset";
const PasswordReset = React.memo(() => {
  const handleSubmit = (values: IPasswordReset) => {
    console.log(values);
    resetPassword(values.email);
  };

  const resetPassword = async (email: string) => {
    try {
      toast.promise(
        async () => {
          await sendPasswordResetEmail(auth, email);
        },
        {
          success: "Password reset link sent to your email.",
          pending: "Sending password reset link...",
          error: {
            render({ data }: { data: { message: string } }) {
              return data.message
                .replace("Firebase: ", "")
                .replace("auth/", "");
            },
          },
        }
      );
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <Formik initialValues={{ email: "" }} onSubmit={handleSubmit}>
      <div className={styles.register}>
        <Form className={styles.form}>
          <h2 className={styles.formTitle}>Reset password</h2>
          <p className={styles.formDescription}>
            You can reset your password in case you forgot it.
          </p>

          <InputLabelGroup name="email" label="Email address" />

          <PrimaryButton type="submit">Send password reset link</PrimaryButton>
        </Form>
      </div>
    </Formik>
  );
});
export default PasswordReset;
