'use client'
import React from 'react';
import styles from './section5.module.css';

const Section5 = () => {
    const [activeIndex, setActiveIndex] = React.useState(2);
    const images = [
        {
            src: '/S5Img1.svg',
            alt: 'Hostel',
            title: 'Hostel',
            desc: 'Comfortable and secure residential living (in campus and outside campus - 20 mins drive away)'
        },
        {
            src: '/S5Img2.svg',
            alt: 'Sports Court',
            title: 'Sports Court',
            desc: 'Football, Cricket, Volleyball, Basket Ball, Badminton Court, and more'
        },
        {
            src: '/S5Img3.svg',
            alt: 'Smart Classrooms',
            title: 'Smart Classrooms',
            desc: 'Technology-enabled learning environments to promote hybrid learning'
        },
        {
            src: '/S5Img4.svg',
            alt: 'Transport Facility',
            title: 'Transport Facility',
            desc: 'Safe and convenient campus connectivity through air-conditioned bus across city'
        },
        {
            src: '/S5Img5.svg',
            alt: 'Campus Infrastructure',
            title: 'Campus Infrastructure',
            desc: 'A modern campus designed for future-ready education'
        },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className={styles.section5}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Experience Life at Sai University</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>
                </div>

                <div className={styles.carouselWrapper}>
                    <div
                        className={styles.carouselContent}
                        style={{ '--active-index': activeIndex }}
                    >
                        {images.map((item, index) => {
                            const diff = (index - activeIndex + images.length) % images.length;
                            const relativePos = diff > images.length / 2 ? diff - images.length : diff;

                            let cardClass = styles.imageCard;
                            if (relativePos === 0) cardClass += ` ${styles.activeCard}`;
                            else if (Math.abs(relativePos) === 1) cardClass += ` ${styles.sideCard}`;
                            else if (Math.abs(relativePos) === 2) cardClass += ` ${styles.outerCard}`;
                            else cardClass += ` ${styles.farCard}`;

                            return (
                                <div key={index} className={cardClass} onClick={() => setActiveIndex(index)}>
                                    <div className={styles.imageInner}>
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className={styles.cardImage}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.textContentArea}>
                    <h3>{images[activeIndex].title}</h3>
                </div>


                <div className={styles.dots}>
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={index === activeIndex ? styles.dotActive : styles.dot}
                            onClick={() => setActiveIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section5;

