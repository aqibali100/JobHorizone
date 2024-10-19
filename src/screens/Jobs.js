import React, { useEffect, useState } from 'react'
import '../assets/styles/Job.css'
import jobImg from '../assets/images/job.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../reducers/JobSlice';
import { formatDistanceToNow } from 'date-fns';
import webdesign from '../assets/images/webdesign.jpg'
import webdev from '../assets/images/webdev.jpg'
import seo from '../assets/images/seo.jpg'
import graphics from '../assets/images/GRAPHIC-DESIGN-BANNER-copy.webp'
import ui from '../assets/images/uxdesign.png'
import Carousel from 'react-bootstrap/Carousel';
import sliderImg1 from '../assets/images/testimonial-1-100x100.jpg'
import sliderImg2 from '../assets/images/testimonial-2-100x100.jpg'
import sliderImg3 from '../assets/images/testimonial-3-100x100.jpg'
import sliderImg4 from '../assets/images/testimonial-4-100x100.jpg'



const Jobs = () => {
  return (
    <>
      <div className="hero-bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="hero-flex">
                <div className="hero-text">
                  <h1>Our <span>Popular</span><br /> Services</h1>
                  <p>Unlock your potential with our expert digital services. From SEO to UI/UX<br></br> design, your success is our mission!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="technology-bg mt-5">
        <div class="container">
          <div class="row mt-5">
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="technology">
                <div className="technology-img">
                  <img src={webdesign} alt='Web Design'></img>
                </div>
                <div className="technology-name text-white mt-4 text-center">
                  <h2 className='common-color'>Web Design</h2>
                  <p className='mt-2 text-dark'>Affordable and Professional Web Design Services and many more</p>
                  <div className="pricing mt-3">
                    <ul className='list-unstyled'>
                      <li>1: Custom Website Design</li>
                      <li>2: Responsive Layout</li>
                      <li>3: SEO Optimization</li>
                      <li>4 :Content Management System (CMS)</li>
                    </ul>
                    <h3 className='text-primary'>Price $50</h3>
                  </div>
                  <a href="/contact-us" className='btn btn-primary mt-3' aria-label="Get Graphics Design Services">Get Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="technology">
                <div className="technology-img">
                  <img src={webdev} alt='Web Development Services Illustration' />
                </div>
                <div className="technology-name text-white mt-4 text-center">
                  <h2 className='common-color'>Web Development</h2>
                  <p className='mt-2 text-dark'>Professional and Scalable Web Development Solutions</p>
                  <div className="pricing mt-3">
                    <ul className='list-unstyled'>
                      <li>1: Full-Stack Development</li>
                      <li>2: API Integration</li>
                      <li>3: E-commerce Solutions</li>
                      <li>4: Performance Optimization</li>
                    </ul>
                    <h3 className='text-primary'>Price $100</h3>
                  </div>
                  <a href="/contact-us" className='btn btn-primary mt-3' aria-label="Get Graphics Design Services">Get Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="technology">
                <div className="technology-img">
                  <img src={seo} alt='SEO Optimization Services Illustration' />
                </div>
                <div className="technology-name text-white mt-4 text-center">
                  <h2 className='common-color'>SEO Optimization</h2>
                  <p className='mt-2 text-dark'>Boost Your Online Visibility and get more Traffic on website</p>
                  <div className="pricing mt-3">
                    <ul className='list-unstyled'>
                      <li>1: Keyword Research</li>
                      <li>2: On-Page Optimization</li>
                      <li>3: Link Building</li>
                      <li>4: Performance Tracking</li>
                    </ul>
                    <h3 className='text-primary'>Price $80</h3>
                  </div>
                  <a href="/contact-us" className='btn btn-primary mt-3' aria-label="Get Graphics Design Services">Get Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="technology">
                <div className="technology-img">
                  <img src={graphics} alt='Graphics Design Services Illustration' />
                </div>
                <div className="technology-name text-white mt-4 text-center">
                  <h2 className='common-color'>Graphics Design</h2>
                  <p className='mt-2 text-dark'>Creative and Impactful Visual Solutions</p>
                  <div className="pricing mt-3">
                    <ul className='list-unstyled'>
                      <li>1: Logo Design</li>
                      <li>2: Branding & Identity</li>
                      <li>3: Marketing Materials</li>
                      <li>4: Social Media Graphics</li>
                    </ul>
                    <h3 className='text-primary'>Price $70</h3>
                  </div>
                  <a href="/contact-us" className='btn btn-primary mt-3' aria-label="Get Graphics Design Services">Get Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="technology">
                <div className="technology-img">
                  <img src={ui} alt='UI/UX Design Services Illustration' />
                </div>
                <div className="technology-name text-white mt-4 text-center">
                  <h2 className='common-color'>UI/UX Design</h2>
                  <p className='mt-2 text-dark'>Creative and Impactful Visual Solutions</p>
                  <div className="pricing mt-3">
                    <ul className='list-unstyled'>
                      <li>1: User Research</li>
                      <li>2: Wireframing & Prototyping</li>
                      <li>3: Interactive UI Design</li>
                      <li>4: Usability Testing</li>
                    </ul>
                    <h3 className='text-primary'>Price $120</h3>
                  </div>
                  <a href="/contact-us" className='btn btn-primary mt-3' aria-label="Get UI/UX Design Services">Get Now</a>
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
                      <p>Thanks to LoyaltyPromo, our graphic designs are now more engaging! Their creative team delivered stunning visuals that perfectly represent our brand. and many more</p>
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
                      <p>The team at LoyaltyPromo is fantastic! Their dedication to quality and client satisfaction makes them a trusted partner for all our digital marketing needs.and many more.</p>
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

export default Jobs
