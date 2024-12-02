import React, { useState } from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router';

const Navbar = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogin = () => {
        navigate("/login")
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="logo-highlight">job</span>Ringer
                <span className="logo-subtitle">India's Job Portal</span>
            </div>
            <div className="navbar-tagline">Bringing You <span className="tagline-highlight">The Perfect Job</span></div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                <li><a href="/">Jobs</a></li>
                <li><a href="#employers">Active Employers</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li className="login-buttons">
                    <button onClick={handleLogin} className="jobseeker-login">Jobseeker Login</button>
                    <button onClick={handleLogin} className="employer-login">Employer Login</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
