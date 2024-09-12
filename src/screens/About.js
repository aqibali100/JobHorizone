import React from 'react'
import '../assets/styles/About.css'
import Capitalone from '../assets/images/Capitalone.png'
import airbnb from '../assets/images/airbnb.png'
import shipBob from '../assets/images/Shipbob.png'
import discord from '../assets/images/Discord.png'
import walmart from '../assets/images/Walmart.png'
import dropbox from '../assets/images/Dropbox.png'
import slack from '../assets/images/Slack.png'
import dribble from '../assets/images/Dribble.png'
import achieveImg from '../assets/images/women.png'
import { Verified, Business, AttachMoney, Public } from '@mui/icons-material';

const About = () => {
    return (
        <>
            <div class="hero-bg">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="hero-flex">
                                <div class="hero-text">
                                    <h1>About <span>Us</span>
                                    </h1>
                                    <p>We connect job seekers with opportunities that match their skills<br></br> and aspirations. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="company-bg mt-5 pt-5">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="company-text text-center">
                                <h1>More Than <span>50+ companies</span> sponsorship with us</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row pt-5">
                        <div class="col-lg-3 col-md-6 mb-5">
                            <div class="company-img">
                                <img src={airbnb} alt='company-img'></img>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-5">
                            <div class="company-img">
                                <img src={shipBob} alt='company-img'></img>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-5">
                            <div class="company-img">
                                <img src={discord} alt='company-img'></img>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-5">
                            <div class="company-img">
                                <img src={walmart} alt='company-img'></img>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-5">
                            <div class="company-img">
                                <img src={Capitalone} alt='company-img'></img>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-5">
                            <div class="company-img">
                                <img src={dropbox} alt='company-img'></img>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-5">
                            <div class="company-img">
                                <img src={slack} alt='company-img'></img>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-5">
                            <div class="company-img">
                                <img src={dribble} alt='company-img'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="achieve-bg mt-5 pt-5">
                <div class="container">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-6 mb-4">
                            <div class="achieve-img">
                                <img src={achieveImg} alt='achieve-img'></img>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="achieve-text">
                                <h2>Find <span className='common'>Million Of Jobs</span> And<br></br>
                                    Achieve Success</h2>
                                <p>Explore countless career opportunities and unlock your path to success. Our platform offers a wealth of resources and tools to help you navigate the job market, enhance your skills, and reach your career goals. Embrace the journey of personal and professional growth with confidence. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="process-bg mt-5 pt-5">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="process-heading text-center">
                                <h2>Why<span className='common'> Choose</span> Us?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 d-flex justify-content-center pt-3">
                        <div className="col-lg-3 col-md-6 mb-5">
                            <div className="process-card">
                                <div className="card-icon text-center mt-2">
                                    <Verified style={{ fontSize: 40, color: "#3f51b5" }} />
                                </div>
                                <div className="card-heading">
                                    <h5>Trusted Quality</h5>
                                </div>
                                <div className="card-text">
                                    <p>Join our platform to showcase your skills with a trusted and quality-driven job search experience.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-5">
                            <div className="process-card">
                                <div className="card-icon text-center mt-2">
                                    <Business style={{ fontSize: 40, color: "#3f51b5" }} />
                                </div>
                                <div className="card-heading">
                                    <h5>Top Companies</h5>
                                </div>
                                <div className="card-text">
                                    <p>Connect with top companies worldwide offering jobs that match your qualifications and career goals.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-5">
                            <div className="process-card">
                                <div className="card-icon text-center mt-2">
                                    <AttachMoney style={{ fontSize: 40, color: "#3f51b5" }} />
                                </div>
                                <div className="card-heading">
                                    <h5>No Extra Charges</h5>
                                </div>
                                <div className="card-text">
                                    <p>Our platform is completely free to use for both job seekers and employers. No hidden costs or additional fees involved!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-5">
                            <div className="process-card">
                                <div className="card-icon text-center mt-2">
                                    <Public style={{ fontSize: 40, color: "#3f51b5" }} />
                                </div>
                                <div className="card-heading">
                                    <h5>International Jobs</h5>
                                </div>
                                <div className="card-text">
                                    <p>Explore international job opportunities and apply for positions that fit your skills and location preferences.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
