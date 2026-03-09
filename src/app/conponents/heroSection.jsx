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
                    font-size: 3.5rem;
                    font-weight: 700;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                }
                .hero-lead {
                    font-size: 1.25rem;
                    font-weight: 400;
                    opacity: 0.9;
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
                .stat-number {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 0;
                }
                .stat-label {
                    letter-spacing: 0.5px;
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
                    .stat-number {
                        font-size: 1.8rem;
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
                    .stat-number {
                        font-size: 1.4rem;
                    }
                    .stat-label {
                        font-size: 0.7rem;
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
                    .stat-number {
                        font-size: 1.2rem;
                    }
                    .stat-label {
                        font-size: 0.6rem;
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
                                India's First International University in Chennai
                            </h1>
                            <p className="hero-lead mb-0">
                                Where Multidisciplinary Education Meets Excellence.<br />
                                Craft Your Path. Design Your Own Degree.
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
                        <div className="row no-gutters text-center align-items-center flex-wrap">
                            <div className="col-6 col-md-3 stat-col" style={{ borderRight: '1px solid rgba(255,255,255,0.3)' }}>
                                <div className="px-2">
                                    <h2 className="stat-number">30+</h2>
                                    <div className="text-white small stat-label">Undergraduate Programs</div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 stat-col" style={{ borderRight: '1px solid rgba(255,255,255,0.3)' }}>
                                <div className="px-2">
                                    <h2 className="stat-number">8+</h2>
                                    <div className="text-white small stat-label">Undergraduate Programs</div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 stat-col" style={{ borderRight: '1px solid rgba(255,255,255,0.3)' }}>
                                <div className="px-2">
                                    <h2 className="stat-number">130+</h2>
                                    <div className="text-white small stat-label">Research Papers Published</div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 stat-col">
                                <div className="px-2">
                                    <h2 className="stat-number">1,000+</h2>
                                    <div className="text-white small stat-label">Students from Across India</div>
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
