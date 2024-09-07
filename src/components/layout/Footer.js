import React from 'react';
import '../../assets/styles/Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div class="footer-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="footer-logo">
                                <Link to='/'><div className="logo-img">
                                    <img src={logo} alt='logo'></img>
                                </div></Link>
                                <Link to='/'><p>Job<span>Horizon</span></p></Link>
                            </div>
                            <div class="footer-text mt-3">
                                <p>Join our community today and take the next step in your career journey<br></br> or grow your team with the best talent.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="footer-title">
                                <h3>Quick Links</h3>
                            </div>
                            <div class="footer-link">
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/about'>About Us</Link></li>
                                    <li><Link to='/contact'>Contact Us</Link></li>
                                    <li><Link to='/policy'>Privacy Policy</Link></li>
                                    <li><Link to='/terms'>Terms and Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="copyright-bg">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="copyright-text">
                                <p>
                                    © {currentYear} <span>JobHorizon</span>. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Footer;
