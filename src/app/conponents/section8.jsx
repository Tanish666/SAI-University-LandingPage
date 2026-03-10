'use client'
import React, { useRef } from "react";
import styles from "./section8.module.css";


const Section8 = () => {
    const sliderRef = useRef(null);

    const scrollSlider = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = direction === 'next' ? 400 : -400;
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const studentSpeaks = [
        { id: 1, videoUrl: "https://www.youtube.com/embed/_T_7TPX7clg", title: "SaiU Student Speaks 1" },
        { id: 2, videoUrl: "https://www.youtube.com/embed/Gaw8B7XHJzE", title: "SaiU Student Speaks 2" },
        { id: 3, videoUrl: "https://www.youtube.com/embed/L1GsB1eKat0", title: "SaiU Student Speaks 3" },
        { id: 4, videoUrl: "https://www.youtube.com/embed/uEtKaA7SoXw", title: "SaiU Student Speaks 4" },
        { id: 5, videoUrl: "https://www.youtube.com/embed/fTwdJgV4ZjQ", title: "SaiU Student Speaks 5" },
    ];

    return (
        <section className={styles.section8}>
            <div className={styles.container}>
                {/* Student Speaks Slider Section */}
                <div className={styles.speaksSection}>
                    <h2 className={styles.speaksTitle}>SaiU Student Speaks</h2>
                    <div className={styles.sliderWrapper}>
                        <button className={styles.sliderBtn} onClick={() => scrollSlider('prev')} aria-label="Previous">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <div className={styles.slider} ref={sliderRef}>
                            {studentSpeaks.map((video) => (
                                <div key={video.id} className={styles.speaksCard}>
                                    <iframe
                                        src={video.videoUrl}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ))}
                        </div>
                        <button className={styles.sliderBtn} onClick={() => scrollSlider('next')} aria-label="Next">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                </div>

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
