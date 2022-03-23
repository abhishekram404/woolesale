import React from "react";
import PageTitleRow from "../PageTitleRow/PageTitleRow";
import styles from "./Profile.module.scss";
import ProfileSection from "../ProfileSection/ProfileSection";
const Profile = () => {
  return (
    <div className={styles.profile}>
      <PageTitleRow>Customer profile</PageTitleRow>
      <main className={styles.mainSection}>
        <ProfileSection />
        <section>
          <h2>Your orders</h2>
        </section>
      </main>
    </div>
  );
};
export default Profile;
