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
                                <p className='policy-para mb-5'>Welcome to JobHorizon, your trusted source for jobs worldwide. This Privacy Policy explains how we collect, use, and protect your personal information when you visit and use our website, JobHorizon. We are committed to safeguarding your privacy and ensuring that your personal information is handled in a secure and responsible mann.</p>

                                <h3 className='policy-heading mb-3'>1: Information We Collect</h3>
                                <p className='policy-para mb-5'>We collect various types of information to provide and improve our services. The information we collect includes:
                                    <h5 className='policy-sub-heading mb-3'>a. Personal Information</h5>
                                    <p className='policy-para mb-5'>When you register, apply for jobs, or use certain services on JobHorizon, we may ask for personal details such as:</p>
                                    <ul>
                                        <li>Name</li>
                                        <li>Email</li>
                                        <li>Phone Number</li>
                                        <li>Resume/CV</li>
                                        <li>Job preferences</li>
                                        <li>Location</li>
                                        <li>Work history and educational background</li>
                                    </ul>

                                    <h5 className='policy-sub-heading mb-3'>b. Non-Personal Information</h5>
                                    <p className='policy-para mb-5'>We also collect non-personally identifiable information that does not directly identify you, such as:</p>
                                    <ul>
                                        <li>IP address</li>
                                        <li>Browser type</li>
                                        <li>Device information</li>
                                        <li>Cookies</li>
                                        <li>Usage data (pages visited, links clicked, etc.)</li>
                                    </ul>

                                    <h5 className='policy-sub-heading mb-3'>c. Sensitive Information</h5>
                                    <p className='policy-para mb-5'>We do not collect any sensitive personal information such as financial details or information relating to your race, religion, or health unless specifically required for certain job applications and permitted by applicable laws.</p>
                                </p>

                                <h3 className='policy-heading mb-3'>2: How We Use Your Information</h3>
                                <p className='policy-para mb-5'>We use the information we collect to:</p>
                                <ul className='policy-para mb-5'>
                                    <li>Provide job listings and related services</li>
                                    <li>Personalize your experience by displaying relevant jobs and recommendations</li>
                                    <li>Communicate with you, including sending job alerts, newsletters, and updates</li>
                                    <li>Process your job applications and share them with potential employers</li>
                                    <li>Improve our website’s functionality, content, and security</li>
                                    <li>Respond to your inquiries and support requests</li>
                                    <li>Detect, prevent, and address technical issues and fraud</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                                <h3 className='policy-heading mb-3'>3: Sharing of Your Information</h3>
                                <p className='policy-para mb-5'>We respect your privacy and do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
                                <h5 className='policy-sub-heading mb-3'>a. With Employers</h5>
                                <p className='policy-para mb-5'>When you apply for a job through JobHorizon, we may share your personal information (such as your name, contact details, and resume) with potential employers or recruiters</p>

                                <h5 className='policy-sub-heading mb-3'>b. Service Providers</h5>
                                <p className='policy-para mb-5'>We may share your information with trusted third-party service providers who assist us in operating our website, such as hosting services, email delivery services, and analytics providers. These providers have access to your personal information only to perform their specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

                                <h5 className='policy-sub-heading mb-3'>c. Legal Requirements</h5>
                                <p className='policy-para mb-5'>We may disclose your information if required by law or in good faith belief that such action is necessary to:</p>
                                <ul className='policy-para mb-5'>
                                    <li>Comply with legal obligations</li>
                                    <li>Protect and defend our rights or property</li>
                                    <li>Prevent fraud or illegal activity</li>
                                    <li>Protect the safety of our users or the public</li>
                                </ul>

                                <h5 className='policy-sub-heading mb-3'>d. Business Transfers</h5>
                                <p className='policy-para mb-5'>In the event of a merger, acquisition, or sale of all or a portion of JobHorizon’s assets, your personal information may be transferred as part of that transaction.</p>

                                <h3 className='policy-heading mb-3'>4:  Data Retention</h3>
                                <p className='policy-para mb-5'>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. After this period, we will securely delete or anonymize your data, unless retention is required to comply with legal obligations, resolve disputes, or enforce agreements.</p>

                                <h3 className='policy-heading mb-3'>5:  Google AdSense and Analytics</h3>
                                <p className='policy-para mb-5'>We use Google AdSense to display ads on JobHorizon. Google may use cookies and other tracking technologies to show you personalized ads based on your browsing behavior. For more information on how Google uses your data, please visit the <Link target='_blank' to='https://policies.google.com/privacy'>Google Privacy Policy</Link>.</p>
                                <p className='policy-para mb-5'>We also use Google Analytics to gather statistical data about how users interact with our website. This helps us improve our content and services. Google Analytics does not identify individual users.</p>

                                <h3 className='policy-heading mb-3'>6: Children’s Privacy</h3>
                                <p className='policy-para mb-5'>JobHorizon is not intended for use by individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe that your child has provided personal information to us, please contact us, and we will take steps to remove such information.</p>

                                <h3 className='policy-heading mb-3'>7: Links to Other Websites</h3>
                                <p className='policy-para mb-5'>JobHorizon may contain links to third-party websites. This Privacy Policy applies only to our website, and we are not responsible for the privacy practices or content of other sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>

                                <h3 className='policy-heading mb-3'>8: Changes to This Privacy Policy</h3>
                                <p className='policy-para mb-5'>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and the "Effective Date" will be revised. We encourage you to review this policy periodically.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Policy
