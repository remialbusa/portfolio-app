import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Curosr icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Front-End Developer</h3>
                            <p>I'm a Front-End Developer with experience in building responsive and optimized sites.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Back-End Developer</h3>
                            <p>I have experience developing fast and optimised backend and API's</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Front-End Developer</h3>
                            <p>I'm a Front-End Developer with experience in building responsive and optimized sites.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}