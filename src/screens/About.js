import React from 'react'
import Capitalone from '../assets/images/Capitalone.png'
import airbnb from '../assets/images/airbnb.png'
import shipBob from '../assets/images/Shipbob.png'
import discord from '../assets/images/Discord.png'
import walmart from '../assets/images/Walmart.png'
import dropbox from '../assets/images/Dropbox.png'
import slack from '../assets/images/Slack.png'
import dribble from '../assets/images/Dribble.png'

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
        </>
    )
}

export default About
