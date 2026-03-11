'use client'
import React, { useState } from "react";


const Footer = () => {
    const primaryBlue = "#004ea2";
    const [tooltip, setTooltip] = useState("");

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text).then(() => {
            setTooltip(type);
            setTimeout(() => setTooltip(""), 2000);
        });
    };


    return (
        <>
            <style>{`
                .footer-section {
                    background-color: ${primaryBlue};
                    color: white;
                    padding: 45px 70px 15px 70px;
                }
                .footer-heading {
                    font-size: 30px;
                    font-weight: 500;
                    margin-bottom: 0.5rem;
                }
                .footer-desc {
                    font-size: 14px;
                    opacity: 0.9;
                    max-width: 600px;
                    font-weight: 500;
                    color: #FFFFFF;
                }
                .footer-cta {
                    background: #fff;
                    color: #333;
                    padding: 12px 20px;
                    display: inline-block;
                    font-weight: 700;
                    font-size: 1.1rem;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }
                .footer-contact-text {
                    font-size: 0.95rem;
                    line-height: 1.5;
                    font-weight: 500;
                }
                .footer-contact-bold {
                    font-size: 1.1rem;
                    
                }
                .footer-copyright {
                    color: #FFF;
                    text-align: center;
                    font-size: 12.401px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 26.574px; /* 214.286% */
                    text-transform: capitalize;
                }
                .contact-link {
                    transition: opacity 0.2s ease;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    opacity: 1;
                }
                .contact-link:hover {
                    opacity: 0.7;
                }
                .contact-link:active {
                    opacity: 0.5;
                }


                @media (max-width: 768px) {
                    .footer-section {
                        padding: 40px 0 16px 0;
                    }
                    .footer-heading {
                        font-size: 1.8rem;
                    }
                    .footer-desc {
                        font-size: 0.95rem;
                    }
                    .footer-cta {
                        font-size: 0.95rem;
                        padding: 10px 16px;
                    }
                    .footer-contact-text {
                        font-size: 0.85rem;
                    }
                    .footer-contact-bold {
                        font-size: 0.95rem;
                    }
                }

                @media (max-width: 575px) {
                    .footer-section {
                        padding: 30px 0 14px 0;
                    }
                    .footer-heading {
                        font-size: 1.4rem;
                    }
                    .footer-desc {
                        font-size: 0.85rem;
                    }
                    .footer-cta {
                        font-size: 0.85rem;
                        padding: 8px 14px;
                    }
                    .footer-contact-text {
                        font-size: 0.8rem;
                    }
                    .footer-contact-bold {
                        font-size: 0.85rem;
                    }
                    .footer-copyright {
                        font-size: 0.75rem;
                    }
                }
            `}</style>
            <footer className="footer-section">
                <div className="container-fluid px-md-5 px-3">
                    {/* Top Section */}
                    <div className="row align-items-center mb-3">
                        <div className="col-lg-2 col-md-3 col-12 mb-3 mb-md-0">
                            <div style={{ backgroundColor: 'white', padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'fit-content' }}>
                                <img src="/UniversityLogo.svg" alt="SAI University" style={{ height: '70px', maxWidth: '100%' }} />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-12 mb-3 mb-md-0">
                            <h2 className="footer-heading">Begin Your Journey at Sai University</h2>
                            <p className="footer-desc mb-0">
                                Secure your place in a future-ready university built for leadership,<br />
                                innovation, and global impact.
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 text-md-right text-left mt-2 mt-md-0">
                            <div className="footer-cta">
                                Admissions Open 2026-27
                            </div>
                        </div>
                    </div>


                    {/* Info Bar Section */}
                    <div className="row mt-0 mb-3 align-items-start">
                        {/* Location */}
                        <div className="col-md-4 col-12 mb-3 mb-md-0 d-flex">
                            <div className="mr-3" style={{ minWidth: '24px' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white" />
                                    <circle cx="12" cy="9" r="2.5" fill="white" />
                                </svg>
                            </div>
                            <p className="mb-0 footer-contact-text">
                                Sai University, One Hub Road, Old Mahabalipuram<br />
                                Road, Paiyanur, Tamil Nadu, Chennai - 603104
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="col-md-4 col-12 mb-3 mb-md-0 d-flex justify-content-md-center position-relative">
                            <div 
                                className="contact-link" 
                                onClick={() => copyToClipboard("+91 91500 75661", "phone")}
                                title="Copy phone number"
                            >
                                <div className="mr-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white" />
                                    </svg>
                                </div>
                                <div className="position-relative">
                                    <p className="mb-0">+91 91500 75661</p>
                                    {tooltip === "phone" && (
                                        <span style={{ position: 'absolute', top: '-30px', left: '0', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', whiteSpace: 'nowrap', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', zIndex: 1 }}>Copied!</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-md-4 col-12 d-flex justify-content-md-end justify-content-start position-relative">
                            <div 
                                className="contact-link" 
                                onClick={() => copyToClipboard("admissions@saiuniversity.edu.in", "email")}
                                title="Copy email address"
                            >
                                <div className="mr-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white" />
                                    </svg>
                                </div>
                                <div className="position-relative">
                                    <p className="mb-0" style={{ wordBreak: 'break-all' }}>admissions@saiuniversity.edu.in</p>
                                    {tooltip === "email" && (
                                        <span style={{ position: 'absolute', top: '-30px', left: '0', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', whiteSpace: 'nowrap', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', zIndex: 1 }}>Copied!</span>
                                    )}
                                </div>
                            </div>
                        </div>



                    </div>

                    <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)', margin: '15px 0 10px 0' }}></div>

                    {/* Footer Bottom */}
                    <div className="text-md-center text-left">
                        <p className="mb-0 footer-copyright">
                            Copyrights &copy; All Rights Reserved SAI
                        </p>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;

