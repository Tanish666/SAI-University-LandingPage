'use client'
import React from 'react';

export default function Navbar() {
    const primaryBlue = "#004ea2";
    return (
        <>
            <style>{`
                .nav-bar-custom {
                    padding: 10px 48px;
                    background: #fff;
                    border-bottom: 1px solid #dee2e6;
                }
                .nav-logo img {
                    height: 50px;
                    object-fit: contain;
                }
                .nav-cta {
                    background-color: ${primaryBlue};
                    border-radius: 4px;
                    font-weight: 500;
                    color: #fff;
                    border: none;
                    padding: 10px 24px;
                    font-size: 16px;
                    white-space: nowrap;
                }
                @media (max-width: 768px) {
                    .nav-bar-custom {
                        padding: 10px 16px;
                    }
                    .nav-logo img {
                        height: 36px;
                    }
                    .nav-cta {
                        padding: 8px 14px;
                        font-size: 13px;
                    }
                }
                @media (max-width: 480px) {
                    .nav-bar-custom {
                        padding: 8px 12px;
                    }
                    .nav-logo img {
                        height: 30px;
                    }
                    .nav-cta {
                        padding: 6px 10px;
                        font-size: 11px;
                    }
                }
            `}</style>
            <nav className="nav-bar-custom">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="navbar-brand nav-logo" href="#">
                        <img src="/UniversityLogo.svg" alt="Logo" />
                    </a>
                    <button className="nav-cta">
                        Admissions Open 2026-27
                    </button>
                </div>
            </nav>
        </>
    );
};