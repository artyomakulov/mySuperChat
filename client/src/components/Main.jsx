import React from "react";
import styles from "../styles/Main.module.css";

const Main = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Join</h1>
        <form className={styles.form}>
          <div className={styles.group}>
            <input
              type="text"
              name="username"
              value=""
              className={styles.input}
              onChange={() => {}}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
