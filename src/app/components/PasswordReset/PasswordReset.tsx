import React from "react";
import styles from "app/components/Register/Register.module.scss";
import inputStyles from "../InputLabelGroup/InputLabelGroup.module.scss";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
const PasswordReset = React.memo(() => {
  return (
    <div className={styles.register}>
      <div className={styles.form}>
        <h2 className={styles.formTitle}>Reset password</h2>
        <p className={styles.formDescription}>
          You can reset your password in case you forgot it.
        </p>

        <div className={inputStyles.inputLabelGroup}>
          <label htmlFor="email" className={inputStyles.label}>
            Email address
          </label>
          <input type="email" id="email" className={inputStyles.input} />
        </div>

        <PrimaryButton type="submit">Send password reset link</PrimaryButton>
      </div>
    </div>
  );
});
export default PasswordReset;
