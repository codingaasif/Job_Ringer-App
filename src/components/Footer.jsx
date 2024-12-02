import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <p className="disclaimer">
                    <strong>Disclaimer:</strong> All Trademarks and Logos are the property of their respective owners,
                    depicted here purely for representation purposes. We take all reasonable steps to ensure the
                    information on this site is genuine. However, we do not take any responsibility in this regard.
                    Job Applicants are advised to evaluate independently. We do not guarantee any job to any jobseeker.
                </p>
                <div className="recognized">
                    <p>Recognized By</p>
                    <p className="startup-india">#startupindia</p>
                </div>
            </div>

            <div className="footer-middle">
                <div className="social-links">
                    <p>Follow us on</p>
                    <div className="social-icons">
                        <a href="#" aria-label="WhatsApp" className="icon whatsapp"></a>
                        <a href="#" aria-label="Facebook" className="icon facebook"></a>
                        <a href="#" aria-label="Twitter" className="icon twitter"></a>
                        <a href="#" aria-label="Instagram" className="icon instagram"></a>
                        <a href="#" aria-label="LinkedIn" className="icon linkedin"></a>
                        <a href="#" aria-label="Telegram" className="icon telegram"></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="links">
                    <a href="#">Terms and Conditions</a>
                    <span>|</span>
                    <a href="#">Privacy Policy</a>
                    <span>|</span>
                    <a href="#">Refund / Cancellation Policy</a>
                    <span>|</span>
                    <a href="#">About Us</a>
                    <span>|</span>
                    <a href="#">Contact Us</a>
                    <span>|</span>
                    <a href="#">FAQ</a>
                </div>
                <p>© All Rights Reserved @ 2024 Job Ringer.</p>
            </div>
        </footer>
    );
};

export default Footer;
