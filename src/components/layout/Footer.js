import React from 'react';
import '../../assets/styles/Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/file.png';
import { useSelector } from 'react-redux';


const Footer = () => {
    const currentYear = new Date().getFullYear();
    const isAuthenticated = useSelector((state) => state.users.user);

    return (
        <>
            <div className="footer-bg mt-5 pt-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="footer-logo">
                                <Link to='/'><div className="logo-img">
                                    <img src={logo} alt='logo'></img>
                                </div></Link>
                                <Link to='/'><p>Loyalty<span>Pro</span></p></Link>
                            </div>
                            <div className="footer-text mt-3">
                                <p>Join our community today and take the next step in your career journey<br></br> or grow your team with the best talent.</p>
                                <div class="div mt-5">
                                    <strong className='mt-5 pt-5'>Email: </strong><span> loyaltypromosite@gmail.com</span><br></br>
                                    <strong className='mt-5 pt-5'>Support Center: </strong><span>619-404-9343</span><br></br>
                                    <strong className='mt-5 pt-5'>Office Address: </strong><span>13162 highway 8 business spc 153
                                        El Cajon , California 92021</span><br></br>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-3 text-center mb-5">
                            <div className="footer-title">
                                <h3>Quick <span>Links</span></h3>
                            </div>
                            <div className="footer-link mt-4">
                                <ul>
                                    {!(isAuthenticated && isAuthenticated.user?.role === 'employer') && (
                                        <>
                                            <li><Link to='/'>Home</Link></li>
                                            <li><Link to='/services'>Services</Link></li>
                                        </>
                                    )}
                                    <li><Link to='/about-us'>About Us</Link></li>
                                    <li><Link to='/contact-us'>Contact Us</Link></li>
                                    <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                                    <li><Link to='/terms-and-conditions'>Terms and Conditions</Link></li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-3 text-center mb-5">
                            <div className="footer-title">
                                <h3>Newsletter <span>Signup</span></h3>
                            </div>
                            <div className="newsletter mt-4">
                                <p>Subscribe to receive the latest updates.</p>
                                <form>
                                    <input type="email" placeholder="Your email address" required className="form-control mb-3" />
                                    <button type="submit" className="btn btn-primary">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-bg">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="copyright-text">
                                <p>
                                    © {currentYear} <span>LoyaltyPromo</span>. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
