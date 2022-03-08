import { IInputLabelGroup } from "app/Interfaces/IInputLabelGroup";
import React from "react";
import { Field } from "formik";
import styles from "./InputLabelGroup.module.scss";
const InputLabelGroup = ({
  name,
  label,
  type,
  required,
  ...props
}: IInputLabelGroup) => {
  return (
    <div className={styles.inputLabelGroup}>
      <label htmlFor={name} className={styles.label}>
        {label} {required && <span>*</span>}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        className={styles.input}
        {...props}
      />
    </div>
  );
};
export default InputLabelGroup;
