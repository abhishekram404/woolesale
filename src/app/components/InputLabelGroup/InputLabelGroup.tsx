import { IInputLabelGroup } from "app/Interfaces/IInputLabelGroup";
import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./InputLabelGroup.module.scss";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
const InputLabelGroup = ({
  name,
  label,
  type,
  required,
  ...props
}: IInputLabelGroup) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () =>
    setPasswordVisible((isPasswordVisible) => !isPasswordVisible);
  return (
    <div className={styles.inputLabelGroup}>
      <label htmlFor={name} className={styles.label}>
        {label} {required && <span>*</span>}
      </label>
      <div className={styles.passwordRow}>
        <Field
          type={
            type === "password"
              ? isPasswordVisible
                ? "text"
                : "password"
              : type
          }
          id={name}
          name={name}
          className={styles.input}
          {...props}
        />
        {type === "password" && (
          <button
            className={styles.togglePasswordVisibilityBtn}
            type="button"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        )}
      </div>
      <small className={styles.errorMessage}>
        <ErrorMessage name={name} />
      </small>
    </div>
  );
};
export default InputLabelGroup;
