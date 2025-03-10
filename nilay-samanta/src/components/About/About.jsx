import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-stack Developer</h3>
              <p>
              I'm a full-stack web developer skilled in HTML, CSS, JavaScript, ReactJS, Node.js, and MongoDB. I specialize in building responsive, user-friendly applications with clean, efficient code, handling both front-end and back-end development to create seamless digital experiences with a robust database.
              </p>
            </div>
          </li>
      </div>
    </section>
  );
};