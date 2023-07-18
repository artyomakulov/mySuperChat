import React, { useState } from "react";
import styles from "../styles/Main.module.css";
import { Link } from "react-router-dom";

const FIELDS = {
  NAME: "name",
  ROOM: "room",
};

const Main = () => {
  const { NAME, ROOM } = FIELDS;
  const [values, setVelues] = useState({ [NAME]: "", [ROOM]: "" });

  const handleChange = ({ target: { value, name } }) => {
    setVelues({ ...values, [name]: value });
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Join</h1>
        <form className={styles.form}>
          <div className={styles.group}>
            <input
              type="text"
              name="name"
              placeholder="call your nickname"
              value={values[NAME]}
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.group}>
            <input
              type="text"
              name="room"
              placeholder="your chat room"
              value={values[ROOM]}
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <Link
            className={styles.group}
            to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`}
          >
            <button
              type="submit"
              className={styles.button}
              disabled={values[NAME] === "" || values[ROOM] === ""}
            >
              Sign in
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Main;
