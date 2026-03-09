'use client'
import React, { useState } from "react";
import styles from "./faq.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqData = [
        {
            question: "Is Sai University recognized by UGC?",
            answer: (
                <>
                    Yes. Sai University is established under the Sai University Act passed by the Tamil Nadu Legislative Assembly (2018) and is recognized by the University Grants Commission (UGC).
                    <br /><br />
                    The B.A. LL.B. (Hons.) program is also recognized by the Bar Council of India.
                </>
            ),
        },
        {
            question: "What makes Sai University different from other universities?",
            answer: (
                <>
                    Sai University follows a multidisciplinary liberal education model that allows students to combine majors, minors, and courses across multiple fields such as Artificial Intelligence, Business, Media Studies, Law, and Social Sciences.
                    <br /><br />
                    This approach encourages critical thinking, innovation, and cross-disciplinary learning, preparing students for emerging global careers.
                </>
            ),
        },
        {
            question: "How many schools are there at Sai University?",
            answer: (
                <>
                    Sai University offers programs through eight academic schools, including:
                    <ul>
                        <li>School of Arts & Sciences</li>
                        <li>School of Computing and Data Science</li>
                        <li>School of Artificial Intelligence</li>
                        <li>School of Technology</li>
                        <li>School of Business</li>
                        <li>School of Media</li>
                        <li>School of Law</li>
                        <li>School of Allied Health Sciences</li>
                    </ul>
                </>
            ),
        },
        {
            question: "Is there an entrance exam for admission?",
            answer: (
                <>
                    Sai University follows a holistic admission process that considers:
                    <ul>
                        <li>Academic performance</li>
                        <li>Application essay</li>
                        <li>Extracurricular achievements</li>
                        <li>Interaction with the admissions team</li>
                    </ul>
                    Students who have not taken other national or state-level entrance exams may take the SaiU CAT, which is optional.
                </>
            ),
        },
        {
            question: "What documents are required during admission?",
            answer: (
                <>
                    Applicants typically need to submit:
                    <ul>
                        <li>Class 10 and Class 12 mark sheets</li>
                        <li>Identity proof</li>
                        <li>Passport-size photographs</li>
                        <li>Academic certificates or achievements (if applicable)</li>
                    </ul>
                    Additional documents may be requested during the admission process.
                </>
            ),
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
                                <div>{item.answer}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );

};

export default Faq;
