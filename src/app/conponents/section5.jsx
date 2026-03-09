'use client'
import React from 'react';
import styles from './section5.module.css';

const Section5 = () => {
    const [activeIndex, setActiveIndex] = React.useState(2);
    const images = [
        {
            src: '/S5Img1.svg',
            alt: 'Campus Building 1',
            title: 'Modern Campus Architecture',
            desc: 'Our state-of-the-art buildings are designed to inspire learning and foster a sense of community.'
        },
        {
            src: '/S5Img2.svg',
            alt: 'Basketball Court',
            title: 'Sports & Recreation',
            desc: 'Advanced sports facilities including basketball courts for holistic physical development.'
        },
        {
            src: '/S5Img3.svg',
            alt: 'Classroom Scene',
            title: 'Interactive Learning',
            desc: 'Collaborative classrooms equipped with the latest technology for an immersive educational experience.'
        },
        {
            src: '/S5Img4.svg',
            alt: 'University Bus',
            title: 'Seamless Connectivity',
            desc: 'Reliable transportation services connecting students to various parts of the city and campus.'
        },
        {
            src: '/S5Img5.svg',
            alt: 'Campus Building 2',
            title: 'Research & Innovation',
            desc: 'Dedicated spaces for research and innovation that push the boundaries of knowledge.'
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>
                </div>

                <div className={styles.carouselWrapper}>
                    <div
                        className={styles.carouselContent}
                        style={{ transform: `translateX(calc(-${activeIndex * 33.333}% + 33.333%))` }}
                    >
                        {images.map((item, index) => {
                            const diff = (index - activeIndex + images.length) % images.length;
                            const relativePos = diff > images.length / 2 ? diff - images.length : diff;

                            let cardClass = styles.imageCard;
                            if (relativePos === 0) cardClass += ` ${styles.activeCard}`;
                            else if (Math.abs(relativePos) === 1) cardClass += ` ${styles.sideCard}`;
                            else cardClass += ` ${styles.outerCard}`;

                            return (
                                <div key={index} className={cardClass}>
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
                    <p>{images[activeIndex].desc}</p>
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

