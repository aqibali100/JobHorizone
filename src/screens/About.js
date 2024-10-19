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
import Carousel from 'react-bootstrap/Carousel';
import sliderImg1 from '../assets/images/testimonial-1-100x100.jpg'
import sliderImg2 from '../assets/images/testimonial-2-100x100.jpg'
import sliderImg3 from '../assets/images/testimonial-3-100x100.jpg'
import sliderImg4 from '../assets/images/testimonial-4-100x100.jpg'
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
                                    <p>At LoyaltyPromo, we transform ideas into powerful digital solutions.<br></br> From SEO and content creation to graphic and UI/UX design, we deliver<br></br> tailored strategies that drive growth and success.</p>
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
                                <h2>Discover <span className='common'>Premium Digital Services</span><br></br>
                                    For Business Growth</h2>
                                <p>At LoyaltyPromo, we offer expert digital services, including SEO optimization, content writing, graphic design, and UI/UX design. Our team is dedicated to helping your business thrive online by enhancing brand visibility, improving user experiences, and crafting engaging content. Let us take your digital presence to the next level with tailored solutions designed for success.</p>
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
                                    <h5>Trusted Digital Services</h5>
                                </div>
                                <div className="card-text">
                                    <p>LoyaltyPromo deliver high-quality, reliable services tailored to meet your business needs. Trust us to help you grow with top-notch SEO, content writing, graphic design, and more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5">
                            <div className="process-card">
                                <div className="card-icon text-center mt-2">
                                    <Business style={{ fontSize: 40, color: "#3f51b5" }} />
                                </div>
                                <div className="card-heading">
                                    <h5>Expert Collaboration</h5>
                                </div>
                                <div className="card-text">
                                    <p>Partner with LoyaltyPromo to access a network of skilled professionals and collaborate on high-quality digital projects that elevate your brand and drive results.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5">
                            <div className="process-card">
                                <div className="card-icon text-center mt-2">
                                    <AttachMoney style={{ fontSize: 40, color: "#3f51b5" }} />
                                </div>
                                <div className="card-heading">
                                    <h5>Transparent Pricing</h5>
                                </div>
                                <div className="card-text">
                                    <p>At LoyaltyPromo, we believe in transparency. Our digital services come with clear pricing, ensuring you receive top-quality solutions without any hidden fees or surprises.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-5">
                            <div className="process-card">
                                <div className="card-icon text-center mt-2">
                                    <Public style={{ fontSize: 40, color: "#3f51b5" }} />
                                </div>
                                <div className="card-heading">
                                    <h5>Global Reach</h5>
                                </div>
                                <div className="card-text">
                                    <p>Leverage our global network to access a wide range of digital services and connect with clients worldwide. Experience the power of international collaboration with LoyaltyPromo.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="review-bg">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="review-text">
                                <h1 className='text-center'><span>Client Reviews</span> of Businesses That Have<br></br>
                                    Benefited from <span>LoyaltyPromo</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <Carousel className="custom-carousel">
                                <Carousel.Item>
                                    <div className="slider-card mt-5">
                                        <div className="slider-card-text text-center">
                                            <p>LoyaltyPromo transformed our digital presence! Their SEO expertise and content writing skills helped us reach a wider audience and boosted our brand visibility.</p>
                                        </div>
                                        <div className="slider-card-img">
                                            <img src={sliderImg1} alt='slider-img'></img>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slider-card mt-5">
                                        <div className="slider-card-text text-center">
                                            <p>Thanks to LoyaltyPromo, our graphic designs are now more engaging! Their creative team delivered stunning visuals that perfectly represent our brand.</p>
                                        </div>
                                        <div className="slider-card-img">
                                            <img src={sliderImg2} alt='slider-img'></img>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slider-card mt-5">
                                        <div className="slider-card-text text-center">
                                            <p>Working with LoyaltyPromo for our UI/UX design has been a game changer. They made our website user-friendly, which led to increased customer satisfaction.</p>
                                        </div>
                                        <div className="slider-card-img">
                                            <img src={sliderImg3} alt='slider-img'></img>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slider-card mt-5">
                                        <div className="slider-card-text text-center">
                                            <p>The team at LoyaltyPromo is fantastic! Their dedication to quality and client satisfaction makes them a trusted partner for all our digital marketing needs.</p>
                                        </div>
                                        <div className="slider-card-img">
                                            <img src={sliderImg4} alt='slider-img'></img>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
