'use client'
import React, { useState } from "react";
import styles from "./faq.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqData = [
        {
            question: "Is Sai University recognized by UGC?",
            answer: "Yes. Sai University is established under the Sai University Act, 2018 and is recognized by the University Grants Commission (UGC). The B.A. LL.B. (Hons.) program is recognized by the Bar Council of India.",
        },
        {
            question: "What makes Sai University different from other universities?",
            answer: "Details about what makes Sai University unique would be here.",
        },
        {
            question: "How many schools are there at Sai University?",
            answer: "Information about the different schools at Sai University.",
        },
        {
            question: "Is there an entrance exam for admission?",
            answer: "Information regarding entrance exams for admission.",
        },
        {
            question: "What documents are required during admission?",
            answer: "List of documents required during the admission process.",
        },
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.leftColumn} id="faq-heading">
                <h2>Frequently Asked<br />Questions</h2>
            </div>
            <div className={styles.rightColumn}>
                {faqData.map((item, index) => (
                    <div key={index} className={styles.faqItem}>
                        <div
                            className={`${styles.faqHeader} ${activeIndex === index ? styles.active : ""}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <h3 className={styles.question}>
                                {index + 1}. {item.question}
                            </h3>
                            <span className={styles.arrow} style={{ transform: activeIndex === index ? "rotate(0deg)" : "rotate(0deg)" }}>
                                {activeIndex === index ? "↓" : "↑"}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className={styles.faqAnswer}>
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );

};

export default Faq;
