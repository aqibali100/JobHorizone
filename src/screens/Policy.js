import React from 'react'
import '../assets/styles/Policy.css'
import { Link } from 'react-router-dom'

const Policy = () => {
    return (
        <>
            <div class="hero-bg">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="hero-flex">
                                <div class="hero-text">
                                    <h1>Privacy <span>Policy</span>
                                    </h1>
                                    <p>Follow Our Privacy Policy Guidelines.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="policy-bg">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="policy-text">
                                <h3 className='policy-heading mb-3'>Privacy Policy for JobHorizon</h3>
                                <p className='policy-para mb-5'>At LoyaltyPromo, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this Privacy Policy carefully. By accessing or using our website, you agree to the practices described in this policy.</p>

                                <h3 className='policy-heading mb-3'>1: Information We Collect</h3>
                                <p className='policy-para mb-5'>We may collect various types of information from and about you when you visit our website or use our services:
                                    <h5 className='policy-sub-heading mb-3'>a. Personal Information</h5>
                                    <p className='policy-para mb-5'>We collect personal identification information from you in several ways, including when you:</p>
                                    <ul>
                                        <li>Register on our site</li>
                                        <li>Place an order for our services</li>
                                        <li>Subscribe to a newsletter</li>
                                        <li>Fill out a form</li>
                                        <li>Respond to a survey</li>
                                    </ul>

                                    <h5 className='policy-sub-heading mb-3'>b. Non-Personal Identification Information</h5>
                                    <p className='policy-para mb-5'>We may collect non-personal identification information about you whenever you interact with our site. This includes:</p>
                                    <ul>
                                        <li>Browser type</li>
                                        <li>Internet service provider (ISP)</li>
                                        <li>Referring/exit pages</li>
                                        <li>Operating system</li>
                                        <li>Date/time stamp</li>
                                        <li>Clickstream data</li>
                                    </ul>

                                    <h5 className='policy-sub-heading mb-3'>c. Cookies and Tracking Technologies</h5>
                                    <p className='policy-para mb-5'>We use cookies and similar tracking technologies (such as web beacons, pixels, and other identifiers) to enhance your experience on our site, analyze site usage, and assist in our marketing efforts. Cookies are small text files that are placed on your device when you visit a website. You may opt to disable cookies through your browser settings.</p>
                                </p>

                                <h3 className='policy-heading mb-3'>2: How We Use Your Information</h3>
                                <p className='policy-para mb-5'>We collect and use your personal information for various purposes, including:</p>
                                <ul className='policy-para mb-5'>
                                    <li>To provide and improve our services: Your information helps us respond to your requests, deliver the services you’ve ordered, and improve our offerings.</li>
                                    <li>To personalize your experience: We use the information to tailor our services and website to your preferences.</li>
                                    <li>To process transactions: Your information is used to process payments and deliver purchased services.</li>
                                    <li>To send periodic emails: We may use your email address to send you information, updates, and offers related to our services. You can unsubscribe from promotional emails at any time.</li>
                                    <li>To improve customer service: Your feedback and information help us address your inquiries more efficiently.</li>
                                    <li>To conduct research and analysis: We use non-personal data for internal purposes such as improving the performance of our website and services.</li>
                                </ul>
                                <h3 className='policy-heading mb-3'>3: Sharing of Your Information</h3>
                                <p className='policy-para mb-5'>We respect your privacy and do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
                                <h5 className='policy-sub-heading mb-3'>a. How We Protect Your Information</h5>
                                <p className='policy-para mb-5'>We adopt industry-standard security measures to safeguard your personal information. We implement encryption, secure socket layer (SSL) technology, firewalls, and access control mechanisms to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>


                                <h3 className='policy-heading mb-3'>4: Children’s Privacy</h3>
                                <p className='policy-para mb-5'>Our website and services are not directed to children under the age of 13, and we do not knowingly collect personal information from children. If we discover that we have inadvertently collected information from a child under 13, we will take steps to delete that information promptly. If you believe that we may have collected information from a child under 13, please contact us</p>

                                <h3 className='policy-heading mb-3'>5: Third-Party Links</h3>
                                <p className='policy-para mb-5'>Our website may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party’s website. We strongly advise you to review the Privacy Policy of every site you visit. We are not responsible for the content, privacy policies, or practices of third-party sites or services.</p>

                                <h3 className='policy-heading mb-3'>6: Changes to This Privacy Policy</h3>
                                <p className='policy-para mb-5'>LoyaltyPromo reserves the right to update this Privacy Policy at any time. When we do, we will post the updated policy on this page and update the “Last Updated” date at the top of the policy. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Policy
