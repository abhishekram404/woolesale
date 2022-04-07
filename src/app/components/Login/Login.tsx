import React, { useContext, useEffect } from "react";
import styles from "app/components/Register/Register.module.scss";
import InputLabelGroup from "../InputLabelGroup/InputLabelGroup";
import { Formik, Form } from "formik";
import PrimaryButton from "app/components/Buttons/PrimaryButton/PrimaryButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "app/firebase/firebase";
import { AuthContext } from "app/context/AuthContext";
import { ILoginState } from "app/Interfaces/ILogin";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const initialValues = { email: "", password: "" };
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (values: ILoginState) => {
    try {
      toast.promise(
        async () => {
          const userCredentials = await signInWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          return setUser(userCredentials.user);
        },
        {
          success: "Login successful",
          error: {
            render({ data }: { data: { message: string } }) {
              return data.message
                .replace("Firebase: ", "")
                .replace("auth/", "");
            },
          },
          pending: "Logging in",
        }
      );
    } catch (error: any) {
      return console.log(error.message);
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
          <p className={styles.passwordResetRow}>
            Forgot your password? <Link to="/reset-password">Reset here</Link>{" "}
          </p>
        </Form>
      </div>
    </Formik>
  );
};
export default Login;
