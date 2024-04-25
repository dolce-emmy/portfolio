import React from "react";
import styles from "../globals.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingSpinner;
