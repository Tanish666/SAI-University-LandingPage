import React from "react";
import styles from "./section7.module.css";

const Section7 = () => {
    return (
        <section className={styles.section7}>
            <div className={styles.container}>
                <div className={styles.topContent}>
                    <div className={styles.imageWrapper}>
                        <img src="/S7Img1.svg" alt="Research at Sai University" className={styles.image} />
                    </div>
                    <div className={styles.textContent}>
                        <span className={styles.subtitle}>Research & Innovation at SaiU</span>
                        <h2 className={styles.title}>Innovation. Inquiry. Impact.</h2>
                        <p className={styles.description}>
                            Research at Sai University is at the heart of its academic vision. The university promotes a culture of inquiry, collaboration, and multidisciplinary exploration that addresses real-world challenges and contributes meaningful solutions to society.
                        </p>
                        <p className={styles.description}>
                            Students and faculty work together across disciplines—combining technology, science, humanities, and social sciences—to generate knowledge that drives innovation and progress. The research ecosystem encourages curiosity, critical thinking, and hands-on experimentation, preparing students to become future researchers, innovators, and problem-solvers.
                        </p>
                        <p className={styles.description}>
                            Through strong collaborations with academic institutions and industry partners, Sai University supports impactful research initiatives that connect learning with global challenges and emerging technologies.
                        </p>
                    </div>
                </div>

                <h3 className={styles.statsHeading}>Research Highlights</h3>
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <h3 className={styles.statNumber}>4</h3>
                        <p className={styles.statLabel}>Advanced Research Labs</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3 className={styles.statNumber}>150+</h3>
                        <p className={styles.statLabel}>Journal Papers Published</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3 className={styles.statNumber}>199</h3>
                        <p className={styles.statLabel}>Cumulative H-Index</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3 className={styles.statNumber}>₹1.37 Cr</h3>
                        <p className={styles.statLabel}>Active Research Projects</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section7;