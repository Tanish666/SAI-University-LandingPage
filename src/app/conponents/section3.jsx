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
                        <div className={styles.whiteBox}></div>
                        <div className={styles.whiteBox}></div>
                        <div className={styles.whiteBox}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}