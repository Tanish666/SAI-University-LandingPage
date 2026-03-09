import styles from './section2.module.css';

export default function Section2() {
    return (
        <section className={styles.section2}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.colImage}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="/S2Img1.svg"
                                alt="Sai University Students"
                                className={styles.mainImage}
                            />
                            <div className={styles.experienceBadge}>
                                <h3>8+</h3>
                                <p>Years of Academic Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.colContent}>
                        <h2 className={styles.heading}>About Sai University</h2>
                        <p className={styles.description}>
                            Sai University is a landmark private institution established in 2018 under the Sai University Act passed by the Tamil Nadu Legislative Assembly. It is among the first private universities legislated in the state in over ninety years, reflecting a bold new vision for higher education in southern India.
                        </p>
                        <p className={styles.description}>
                            India’s first international university dedicated to transformative liberal education, Sai University integrates excellence in teaching, research, innovation, and ethical leadership. Students design their academic journeys by combining majors and minors across AI, Business, Media Studies, Data Science, Economics, Philosophy, Cognitive Neuroscience, and more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}