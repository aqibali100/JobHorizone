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
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

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
                    <div class="row mt-5 d-flex justify-content-center pt-3">
                        <div class="col-lg-3 col-md-6 mb-5">
                            <div class="process-card">
                                <div class="card-icon text-center mt-2">
                                    <GroupIcon />
                                </div>
                                <div class="card-heading">
                                    <h5>Trusted Quality</h5>
                                </div>
                                <div class="card-text">
                                    <p>Sign up to start your journey. Create a personalized profile that highlights your skills and experience to attract potential employers.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-5">
                            <div class="process-card">
                                <div class="card-icon text-center mt-2">
                                    <SearchIcon />
                                </div>
                                <div class="card-heading">
                                    <h5>Top Companies</h5>
                                </div>
                                <div class="card-text">
                                    <p>Explore a wide range job opportunities that match your skills and interests. Use advanced search filters to find perfect job for you.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-5">
                            <div class="process-card">
                                <div class="card-icon text-center mt-2">
                                    <InsertDriveFileIcon />
                                </div>
                                <div class="card-heading">
                                    <h5>No Extra Charges</h5>
                                </div>
                                <div class="card-text">
                                    <p>Enhance your chances of getting noticed by uploading your resume. Our platform allows you  easily update and manage.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-5">
                            <div class="process-card">
                                <div class="card-icon text-center mt-2">
                                    <InsertDriveFileIcon />
                                </div>
                                <div class="card-heading">
                                    <h5>Internation Job</h5>
                                </div>
                                <div class="card-text">
                                    <p>Enhance your chances of getting noticed by uploading your resume. Our platform allows you  easily update and manage.</p>
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
