const HeroSection = () => {
    const primaryBlue = "#004ea2";

    return (
        <>
            <style>{`
                .hero-section {
                    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/bgHero.svg');
                    background-size: cover;
                    background-position: center;
                    min-height: 650px;
                    display: flex;
                    align-items: center;
                    position: relative;
                    color: #fff;
                }
                .hero-heading {
                    font-size: 3rem;
                    width: 80%;
                    font-weight: 700;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                }
                .hero-lead {
                    font-size: 1rem;
                    width: 80%;
                    font-weight: 400;
                    opacity: 0.7;
                }
                .stats-bar {
                    position: absolute;
                    bottom: 0;
                    left: 5%;
                    right: 5%;
                    background-color: ${primaryBlue};
                    transform: translateY(50%);
                    z-index: 50;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                }
                .stat-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: #fff;
                    font-size: 0.95rem;
                    font-weight: 500;
                }
                .stat-check {
                    color: #fff;
                    font-size: 1.2rem;
                    font-weight: 700;
                    flex-shrink: 0;
                }

                @media (max-width: 991px) {
                    .hero-section {
                        min-height: 500px;
                    }
                    .hero-heading {
                        font-size: 2.5rem;
                    }
                    .hero-lead {
                        font-size: 1.1rem;
                    }
                    .stat-item {
                        font-size: 0.85rem;
                    }
                    .stats-bar {
                        left: 3%;
                        right: 3%;
                    }
                }

                @media (max-width: 767px) {
                    .hero-section {
                        min-height: 420px;
                    }
                    .hero-heading {
                        font-size: 1.8rem;
                    }
                    .hero-lead {
                        font-size: 0.95rem;
                    }
                    .stats-bar {
                        left: 2%;
                        right: 2%;
                    }
                    .stat-item {
                        font-size: 0.75rem;
                    }
                    .stat-col {
                        flex: 0 0 50% !important;
                        max-width: 50% !important;
                        margin-bottom: 12px;
                        border-right: none !important;
                    }
                    .stat-col:nth-child(odd) {
                        border-right: 1px solid rgba(255,255,255,0.3) !important;
                    }
                }

                @media (max-width: 480px) {
                    .hero-section {
                        min-height: 350px;
                    }
                    .hero-heading {
                        font-size: 1.5rem;
                    }
                    .hero-lead {
                        font-size: 0.85rem;
                    }
                    .stat-item {
                        font-size: 0.65rem;
                    }
                }
            `}</style>
            <section className="hero-section">
                <div className="container-fluid px-md-5 px-3 py-5">
                    <div className="row align-items-center no-gutters">
                        <div className="col-lg-7">
                            <div
                                className="badge mb-3 mb-md-4 py-2 text-white"
                                style={{ backgroundColor: primaryBlue, fontSize: '14px', borderRadius: '4px' }}
                            >
                                Admissions Open 2026-27
                            </div>
                            <h1 className="hero-heading">
                                Design Your Own Degree at India’s First International Liberal Education University
                            </h1>
                            <p className="hero-lead mb-0">
                                Study across AI, Business, Law, Media, Computing and Data Science, Biotech, Psychology and more — and build a degree tailored to your career goals.
                            </p>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <div
                                style={{
                                    backgroundColor: 'rgba(211, 211, 211, 0.8)',
                                    height: '400px',
                                    width: '100%',
                                    borderRadius: '4px',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                                }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="stats-bar">
                    <div className="container-fluid py-3 py-md-4">
                        <div className="row no-gutters align-items-center flex-wrap">
                            <div className="col-6 col-md-3 stat-col" style={{ borderRight: '1px solid rgba(255,255,255,0.3)' }}>
                                <div className="px-3">
                                    <div className="stat-item">
                                        <span className="stat-check">✔</span>
                                        <span>UGC Recognized</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 stat-col" style={{ borderRight: '1px solid rgba(255,255,255,0.3)' }}>
                                <div className="px-3">
                                    <div className="stat-item">
                                        <span className="stat-check">✔</span>
                                        <span>Multidisciplinary Global Curriculum</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 stat-col" style={{ borderRight: '1px solid rgba(255,255,255,0.3)' }}>
                                <div className="px-3">
                                    <div className="stat-item">
                                        <span className="stat-check">✔</span>
                                        <span>International Faculty & Research Mentors</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 stat-col">
                                <div className="px-3">
                                    <div className="stat-item">
                                        <span className="stat-check">✔</span>
                                        <span>Industry Internships & Career Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
