import React from 'react';
import styles from './section3.module.css';

export default function Section3() {
    return (
        <section className={styles.section3}>
            <div className={styles.container}>
                <div className={styles.overlay}>
                    <div className={styles.textSide}>
                        <h2>Rankings And Accreditations</h2>
                    </div>
                    <div className={styles.boxesSide}>
                        <div className={styles.whiteBox}>
                            <img src="/UGC_India_Logo.png" alt="UGC India" className={styles.logoImage} />
                            <p>Recognized by <strong>University Grants Commission (UGC)</strong></p>
                        </div>
                        <div className={styles.whiteBox}>
                            <img src="/Logo_of_Bar_Council_of_India.png" alt="Bar Council of India" className={styles.logoImage} />
                            <p>B.A. LL.B. (Hons.) programme recognised by <strong>Bar Council of India</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}