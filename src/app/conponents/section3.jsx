import React from 'react';
import styles from './section3.module.css';

export default function Section3() {
    return (
        <section className={styles.section3}>
            <div className={styles.container}>
                <div className={styles.overlay}>
                    <div className={styles.textSide}>
                        <h2>Rankings And<br />Accreditations</h2>
                    </div>
                    <div className={styles.boxesSide}>
                        <div className={styles.whiteBox}>
                            <h3>Interdisciplinary Learning</h3>
                            <p>Combine fields like AI, economics, psychology, and biology to solve real-world problems.</p>
                        </div>
                        <div className={styles.whiteBox}>
                            <h3>Global Faculty</h3>
                            <p>Learn from internationally trained faculty with strong research and industry experience.</p>
                        </div>
                        <div className={styles.whiteBox}>
                            <h3>Research Opportunities</h3>
                            <p>Engage in research, projects, and experiential learning from the early years.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}