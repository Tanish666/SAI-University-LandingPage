import React from "react";
import styles from "./section8.module.css";


const Section8 = () => {
    return (
        <section className={styles.section8}>
            <div className={styles.container}>
                {/* Experience Life Section */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Discover Life at SaiU</h2>
                    <p className={styles.subtitle}>
                        At Sai University, learning extends far beyond the classroom. Students are part of a vibrant and diverse campus community that encourages collaboration, creativity, and personal growth.

                    </p>
                </div>

                <div className={styles.videoGrid}>
                    <div className={styles.videoCard}>
                        <iframe
                            src="https://www.youtube.com/embed/9hF1ZuS7VYM"
                            title="SAI University Video 1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className={styles.videoCard}>
                        <iframe
                            src="https://www.youtube.com/embed/BJl2xTOltWE"
                            title="SAI University Video 2"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className={styles.videoCard}>
                        <iframe
                            src="https://www.youtube.com/embed/SOfwzkJ7Wcc"
                            title="SAI University Video 3"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Begin Your Journey Banner */}
                <div className={styles.banner}>
                    <div className={styles.bannerContent}>
                        <h2 className={styles.bannerTitle}>Not Just a Degree. A Direction.</h2>
                        <p className={styles.bannerSubtitle}>
                            Explore interdisciplinary learning and build a future that reflects your ambition.
                        </p>
                        <button className={styles.ctaButton}>Admission Open 2026-2027</button>
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
