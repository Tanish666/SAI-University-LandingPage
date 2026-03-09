import React from "react";
import styles from "./section8.module.css";


const Section8 = () => {
    return (
        <section className={styles.section8}>
            <div className={styles.container}>
                {/* Experience Life Section */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Experience Life at Sai University</h2>
                    <p className={styles.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>
                </div>

                <div className={styles.videoGrid}>
                    {[1, 2, 3].map((item) => (
                        <div key={item} className={styles.videoCard}>
                            <svg className={styles.ytIcon} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </div>
                    ))}
                </div>

                {/* Begin Your Journey Banner */}
                <div className={styles.banner}>
                    <div className={styles.bannerContent}>
                        <h2 className={styles.bannerTitle}>Begin Your Journey at Sai University</h2>
                        <p className={styles.bannerSubtitle}>
                            Secure your place in a future-ready university built for leadership, innovation, and global impact.
                        </p>
                        <button className={styles.ctaButton}>Admissions Open 2026-27</button>
                    </div>

                    <div className={styles.bannerImageWrapper}>
                        {/* Sunburst/Spiral Graphic Graphic */}
                        <img src="/S8Img1.svg" alt="" className={styles.graphicOverlay} />
                        {/* Student Image */}
                        <img src="/S8Img2.svg" alt="Sai University Student" className={styles.bannerImage} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section8;
