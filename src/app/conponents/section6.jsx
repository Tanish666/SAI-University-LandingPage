import React from 'react'
import styles from './section6.module.css'

const Section6 = () => {
    // Array for logo placeholders
    const logos = [
        '/logos/4I.jpg', '/logos/CEGLogo.png', '/logos/Codoid-Logo.svg', '/logos/DavaraLogo.png',
        '/logos/ELogo.jpg', '/logos/IMMERSOAiLogo.png', '/logos/SKSLogo.webp', '/logos/SenecaGlobalLogo.svg',
        '/logos/altrosynLogo.svg', '/logos/amvionLogo.svg', '/logos/annaUni.png', '/logos/britania.png',
        '/logos/cadence.png', '/logos/casagrandLogo.png', '/logos/changepondLogo.png', '/logos/dotsLogo.jpg',
        '/logos/erosLogo.webp', '/logos/flexLogo.svg', '/logos/flsLogo.png', '/logos/hivemindLogo.svg',
        '/logos/horseLogo.jpg', '/logos/htcLogo.png', '/logos/inspireAILogo.png', '/logos/jiostarLogo.png',
        '/logos/mercedez-benz.png', '/logos/netoLogo.png', '/logos/nexhsLogo.png', '/logos/pathfinderLogo.png',
        '/logos/pojoLogo.jpg', '/logos/proatLogo.png', '/logos/prodaptLogo.svg', '/logos/ramcoLogo.jpg',
        '/logos/roombrLogo.avif', '/logos/scieraLogo.png', '/logos/scripboxLogo.png', '/logos/seaportaiLogo.jpg',
        '/logos/seimensLogo.png', '/logos/techMahindraLogo.png', '/logos/tokieLogo.png', '/logos/trinityLogo.png',
        '/logos/virtusaLogo.webp', '/logos/zoho.png'
    ];
    return (
        <section className={styles.section6}>
            <div className={styles.container}>
                {/* Blue Info Box */}
                <div className={styles.blueBox}>
                    <div className={styles.textContent}>
                        <h4 className={styles.topTitle}>Student Life, Internships & Career Pathways</h4>
                        <h2 className={styles.mainTitle}>Learn. Lead. Launch Your Future.</h2>

                        <p className={styles.description}>
                            At Sai University, research is a cornerstone of our academic vision. We foster a culture of innovation, collaboration, and excellence through rigorous inquiry and multidisciplinary exploration. Our research ecosystem is designed to address real-world challenges and deliver meaningful solutions that benefit society at large.
                        </p>
                        <p className={styles.description}>
                            We encourage faculty and students to engage in transformative research that bridges disciplines, integrates technology, and drives sustainable progress.
                        </p>

                        <div className={styles.statsRow}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>1,000+</span>
                                <span className={styles.statLabel}>Students</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>10+</span>
                                <span className={styles.statLabel}>States Represented</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>60+</span>
                                <span className={styles.statLabel}>Cities Across India</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <img
                            src="/S6Img1.svg"
                            alt="Students at Sai University"

                        />
                    </div>
                </div>

                {/* Recruiter Marquee Section */}
                <div className={styles.marqueeSection}>
                    {/* Row 1 */}
                    <div className={styles.marqueeContainer}>
                        <div className={styles.marqueeRow}>
                            {[...logos, ...logos].map((e, i) => (
                                <div key={`logo-r1-${i}`} className={styles.logoItem}>
                                    <img src={e} alt="" className={styles.logoImage} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className={styles.marqueeContainer}>
                        <div className={styles.marqueeRowReverse}>
                            {[...logos, ...logos].map((e, i) => (
                                <div key={`logo-r2-${i}`} className={styles.logoItem}>
                                    <img src={e} alt="" className={styles.logoImage} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <h3 className={styles.marqueeTitle}>Trusted by 430+ Leading Recruiters</h3>
                </div>
            </div>
        </section>
    )
}

export default Section6
