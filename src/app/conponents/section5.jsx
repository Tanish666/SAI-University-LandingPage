'use client'
import React from 'react';
import styles from './section5.module.css';

const Section5 = () => {

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

    const [isTransitioning, setIsTransitioning] = React.useState(true);

    // Create 5 copies to have plenty of margin for infinite scrolling
    const displayImages = [...images, ...images, ...images, ...images, ...images];

    // We start in the middle clone (set 3), which starts at index 10
    const [activeIndex, setActiveIndex] = React.useState(images.length * 2);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setActiveIndex((prev) => prev + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Infinite loop snapping mechanism
    React.useEffect(() => {
        // When we reach the start of set 4 (index 15)
        if (activeIndex === images.length * 3) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false); // Turn off transition for an instant snap
                setActiveIndex(images.length * 2); // Snap back to set 3 (index 10)
            }, 850); // Wait for the 0.8s CSS transition to finish before snapping
            return () => clearTimeout(timeout);
        }

        // When we go backward and reach the end of set 2 (index 9)
        if (activeIndex === images.length * 2 - 1) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setActiveIndex(images.length * 3 - 1); // Snap back to set 3 (index 14)
            }, 850);
            return () => clearTimeout(timeout);
        }
    }, [activeIndex, images.length]);

    return (
        <section className={styles.section5}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>More Than a Campus. A Place to Grow.</h2>
                    <p>
                        From smart classrooms and modern labs to residential living and active student communities, Sai University provides an environment where ideas grow, friendships form, and futures begin.
                    </p>
                </div>

                <div className={styles.carouselWrapper}>
                    <div
                        className={styles.carouselContent}
                        style={{
                            '--active-index': activeIndex,
                            transition: isTransitioning ? undefined : 'none'
                        }}
                    >
                        {displayImages.map((item, index) => {
                            const diff = index - activeIndex;

                            let cardClass = styles.imageCard;
                            if (diff === 0) cardClass += ` ${styles.activeCard}`;
                            else if (Math.abs(diff) === 1) cardClass += ` ${styles.sideCard}`;
                            else if (Math.abs(diff) === 2) cardClass += ` ${styles.outerCard}`;
                            else cardClass += ` ${styles.farCard}`;

                            return (
                                <div
                                    key={index}
                                    className={cardClass}
                                    onClick={() => {
                                        setIsTransitioning(true);
                                        setActiveIndex(index);
                                    }}
                                    style={{ transition: isTransitioning ? undefined : 'none' }}
                                >
                                    <div
                                        className={styles.imageInner}
                                        style={{ transition: isTransitioning ? undefined : 'none' }}
                                    >
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
                    <h3>{displayImages[activeIndex]?.title || ''}</h3>
                    <p>{displayImages[activeIndex]?.desc || ''}</p>
                </div>


                <div className={styles.dots}>
                    {images.map((_, index) => {
                        const activeImageMod = ((activeIndex % images.length) + images.length) % images.length;
                        return (
                            <div
                                key={index}
                                className={index === activeImageMod ? styles.dotActive : styles.dot}
                                onClick={() => {
                                    setIsTransitioning(true);
                                    let diff = index - activeImageMod;
                                    // if stepping forward seems to need wrapping
                                    if (diff > images.length / 2) diff -= images.length;
                                    if (diff < -images.length / 2) diff += images.length;
                                    setActiveIndex(activeIndex + diff);
                                }}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Section5;

