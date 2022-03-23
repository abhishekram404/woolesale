import React from "react";
import PageTitleRow from "../PageTitleRow/PageTitleRow";
import styles from "./Profile.module.scss";
import ProfileSection from "../ProfileSection/ProfileSection";
import OrdersSection from "../OrdersSection/OrdersSection";
const Profile = () => {
  return (
    <div className={styles.profile}>
      <PageTitleRow>Customer profile</PageTitleRow>
      <main className={styles.mainSection}>
        <ProfileSection />
        <OrdersSection />
      </main>
    </div>
  );
};
export default Profile;
