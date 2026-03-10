"use client";
import React, { useState } from 'react';
import styles from './section4.module.css';
import Image from 'next/image';

const schoolsData = [
    {
        id: 1,
        name: "School of Arts & Sciences",
        programs: [
            { name: "Biological Sciences", duration: "3 Year" },
            { name: "Psychology", duration: "3 Year" },
            { name: "Economics", duration: "3 Year" },
            { name: "Politics, Philosophy and Economics (PPE)", duration: "3 Year" },
        ],
        logo: "/school of arts and science.avif" // Using UniversityLogo as placeholder
    },
    {
        id: 2,
        name: "School of Computing & Data Science",
        programs: [
            { name: "Computer Science", duration: "4 Year" },
            { name: "Data Science", duration: "4 Year" },
            { name: "Cyber Security", duration: "4 Year" },
        ],
        logo: "/school of computer and science.avif"
    },
    {
        id: 3,
        name: "School of Artificial Intelligence",
        programs: [
            { name: "AI & Machine Learning", duration: "4 Year" },
            { name: "Robotics", duration: "4 Year" },
        ],
        logo: "/school of ai.avif"
    },
    {
        id: 4,
        name: "School of Technology",
        programs: [
            { name: "Information Technology", duration: "4 Year" },
            { name: "Software Engineering", duration: "4 Year" },
        ],
        logo: "/school of technology.avif"
    },
    {
        id: 5,
        name: "School of Business",
        programs: [
            { name: "Business Administration", duration: "3 Year" },
            { name: "Marketing", duration: "3 Year" },
            { name: "Finance", duration: "3 Year" },
        ],
        logo: "/school of business.avif"
    },
    {
        id: 6,
        name: "School of Law",
        programs: [
            { name: "LLB", duration: "3 Year" },
            { name: "LLM", duration: "2 Year" },
        ],
        logo: "/school of law.avif"
    },
    {
        id: 7,
        name: "School of Media",
        programs: [
            { name: "Mass Communication", duration: "3 Year" },
            { name: "Journalism", duration: "3 Year" },
        ],
        logo: "/school of media.avif"
    },
    {
        id: 8,
        name: "School of Allied Health Sciences",
        programs: [
            { name: "Nursing", duration: "4 Year" },
            { name: "Physiotherapy", duration: "4 Year" },
        ],
        logo: "/school of Allied Health Sciences.avif"
    }
];

const Section4 = () => {
    const [activeSchoolId, setActiveSchoolId] = useState(1);
    const activeSchool = schoolsData.find(s => s.id === activeSchoolId);

    return (
        <section className={styles.section4}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Explore Our 8 Schools</h2>
                    <p>Discover a wide range of undergraduate and postgraduate programs designed for the future.</p>
                </div>

                <div className={styles.contentWrapper}>
                    <div className={styles.schoolsList}>
                        {schoolsData.map((school) => (
                            <button
                                key={school.id}
                                className={`${styles.schoolTab} ${activeSchoolId === school.id ? styles.activeTab : ''}`}
                                onClick={() => setActiveSchoolId(school.id)}
                            >
                                {school.name}
                            </button>
                        ))}
                    </div>

                    <div className={styles.schoolDetails}>
                        <div className={styles.detailsHeader}>
                            <div className={styles.schoolInfo}>
                                <div className={styles.logoContainer}>
                                    {/* Since I don't have the specific school logos, I'll use text or a placeholder */}
                                    <Image
                                        src={activeSchool.logo}
                                        alt="School Logo"
                                        width={60}
                                        height={60}
                                        className={styles.schoolLogo}
                                    />
                                </div>
                                <h3 className={styles.schoolName}>{activeSchool.name}</h3>
                            </div>
                            <div className={styles.programsBadge}>Programs Offered</div>
                        </div>

                        <div className={styles.programsList}>
                            {activeSchool.programs.map((program, index) => (
                                <div key={index} className={styles.programItem}>
                                    <div className={styles.programName}>{program.name}</div>
                                    <div className={styles.programInfo}>
                                        <div className={styles.duration}>Duration : {program.duration}</div>
                                        <a href="#" className={styles.applyLink}>
                                            Apply Now <span className={styles.arrowIcon}>↗</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;