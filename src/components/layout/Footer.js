import React from 'react';
import '../../assets/styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="copyright-bg">
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
            </div>
        </>
    );
}

export default Footer;
