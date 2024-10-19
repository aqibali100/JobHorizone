import React, { useEffect } from 'react'
import '../assets/styles/Home.css'
import Carousel from 'react-bootstrap/Carousel';
import sliderImg1 from '../assets/images/testimonial-1-100x100.jpg'
import sliderImg2 from '../assets/images/testimonial-2-100x100.jpg'
import sliderImg3 from '../assets/images/testimonial-3-100x100.jpg'
import sliderImg4 from '../assets/images/testimonial-4-100x100.jpg'
import resumeImg from '../assets/images/boy.png'
import webdesign from '../assets/images/webdesign.jpg'
import webdev from '../assets/images/webdev.jpg'
import seo from '../assets/images/seo.jpg'
import graphics from '../assets/images/GRAPHIC-DESIGN-BANNER-copy.webp'
import jobImg from '../assets/images/job.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import SelectAllIcon from '@mui/icons-material/SelectAll'; // Import the icon for selecting services
import ContactMailIcon from '@mui/icons-material/ContactMail'; // Import the icon for contacting
import Capitalone from '../assets/images/Capitalone.png'
import airbnb from '../assets/images/airbnb.png'
import shipBob from '../assets/images/Shipbob.png'
import discord from '../assets/images/Discord.png'
import walmart from '../assets/images/Walmart.png'
import dropbox from '../assets/images/Dropbox.png'
import slack from '../assets/images/Slack.png'
import dribble from '../assets/images/Dribble.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../reducers/JobSlice';
import { formatDistanceToNow } from 'date-fns';
import CountUp from 'react-countup';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
const Home = () => {
  // const dispatch = useDispatch();
  // const jobs = useSelector((state) => state.jobs.jobs);
  // useEffect(() => {
  //   dispatch(fetchJobs());
  // }, [dispatch]);
  return (
    <>
      <div className="hero-bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="hero-flex">
                <div className="hero-text">
                  <h1>Unlock <span>Your Digital Solutions</span><br /> For Growth</h1>
                  <p>Unlock your potential with our expert digital services. From SEO to UI/UX<br></br> design, your success is our mission!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="plateform-bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="plateform-text">
                <h1 className='text-center'>One Platform<br></br>
                  <span>Many Solutions</span></h1>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-4">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="plateform-cards">
                <div className="card-flex d-flex gap-4">
                  <div className="card-icon">
                    <svg fill="#f37878" width="25" height="52" id="lni_lni-bullhorn" x="0px" y="0px" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 64 64' }}><path d="M56.9,1.3h-8.7c-3.1,0-5.7,2.5-5.7,5.7L16.7,9.5H7.3C4,9.5,1.4,12,1.4,15.2v17.1c0,2.3,1.4,4.3,3.5,5.2l3.6,20.3  c0.7,3,3.4,5.1,6.6,5.1c2.1,0,4.1-0.9,5.4-2.5c1.1-1.4,1.6-3.2,1.2-4.9l-3-17.1l23.6,4.6v0.3c0,3.2,2.6,5.8,5.8,5.8h8.7  c3.2,0,5.8-2.6,5.8-5.8V7C62.6,3.8,60,1.3,56.9,1.3z M4.9,15.2C4.9,14,6,13,7.3,13h7.8v21.3H7.3c-1.3,0-2.4-1-2.4-2.1V15.2z   M17.8,58c-0.6,0.8-1.6,1.2-2.7,1.2c-1.5,0-2.9-1-3.2-2.3L8.5,37.8h6.6L18.3,56C18.5,57,18.1,57.7,17.8,58z M18.6,34.7V12.9  l23.8-2.4v28.9L18.6,34.7z M59.1,43.1c0,1.2-1,2.3-2.3,2.3h-8.7c-1.2,0-2.3-1-2.3-2.3V7c0-1.2,1-2.3,2.3-2.3h8.7  c1.2,0,2.3,1,2.3,2.3V43.1z"></path></svg>
                  </div>
                  <div className="card-text">
                    <h5>Marketing & Communication</h5>
                    {/* <p>30 Jobs Available</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="plateform-cards">
                <div className="card-flex d-flex gap-4">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#645fd2" width="25" height="52" id="lni_lni-vector" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 64 64' }}><path d="M56.2,28.5c3.6,0,6.6-3,6.6-6.6c0-3.6-3-6.6-6.6-6.6c-3.1,0-5.7,2.2-6.4,5.1H38.4c-0.7-2.9-3.3-5.1-6.4-5.1c-3.1,0-5.7,2.2-6.4,5.1H14.2c-0.7-2.9-3.3-5.1-6.4-5.1c-3.6,0-6.6,3-6.6,6.6c0,3.6,3,6.6,6.6,6.6c2.9,0,5.4-1.9,6.3-4.6H20c-4.4,3.1-7.5,7.9-8.4,13.3H9.7c-1.7,0-3.2,1.4-3.2,3.2v5.1c0,1.7,1.4,3.2,3.2,3.2h7.7c1.7,0,3.2-1.4,3.2-3.2v-5.1c0-1.7-1.4-3.2-3.2-3.2h-2.3c1.2-5.8,5.4-10.6,10.9-12.6c1,2.3,3.3,3.8,6,3.8c2.6,0,4.8-1.5,5.9-3.6c5.4,2.1,9.3,6.8,10.4,12.4h-1.7c-1.7,0-3.2,1.4-3.2,3.2v5.1c0,1.7,1.4,3.2,3.2,3.2h7.7c1.7,0,3.2-1.4,3.2-3.2v-5.1c0-1.7-1.4-3.2-3.2-3.2h-2.5c-0.9-5.4-4-10.2-8.4-13.3h6.4C50.7,26.6,53.2,28.5,56.2,28.5z M56.2,18.8c1.7,0,3.1,1.4,3.1,3.1S57.9,25,56.2,25s-3.1-1.4-3.1-3.1S54.5,18.8,56.2,18.8z M7.8,25c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1S9.5,25,7.8,25z M17.1,45.2h-7v-4.4h7V45.2z M54,45.2h-7v-4.4h7V45.2z M32,25c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1S33.7,25,32,25z"></path></svg>
                  </div>
                  <div className="card-text">
                    <h5>Design &
                      Development</h5>
                    {/* <p>29 Jobs Available</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="plateform-cards">
                <div className="card-flex d-flex gap-4">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#73c2c3" width="25" height="52" id="lni_lni-users" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 64 64' }}><g><path d="M21.5,36.4c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3S9.2,17.3,9.2,24.1S14.7,36.4,21.5,36.4z M21.5,15.3c4.8,0,8.8,3.9,8.8,8.8c0,4.9-3.9,8.8-8.8,8.8s-8.8-3.9-8.8-8.8C12.7,19.2,16.6,15.3,21.5,15.3z"></path><path d="M21.5,40.8c-7.3,0-14.3,3-19.7,8.4c-0.7,0.7-0.7,1.8,0,2.5C2.1,52,2.6,52.2,3,52.2c0.5,0,0.9-0.2,1.2-0.5c4.7-4.8,10.8-7.4,17.2-7.4c6.3,0,12.4,2.6,17.2,7.4c0.7,0.7,1.8,0.7,2.5,0c0.7-0.7,0.7-1.8,0-2.5C35.7,43.8,28.7,40.8,21.5,40.8z"></path><path d="M47.8,36.4c3.9,0,7-3.2,7-7s-3.2-7-7-7s-7,3.2-7,7S43.9,36.4,47.8,36.4z M47.8,25.8c1.9,0,3.5,1.6,3.5,3.5s-1.6,3.5-3.5,3.5s-3.5-1.6-3.5-3.5S45.9,25.8,47.8,25.8z"></path><path d="M62.2,46.5c-5.3-5-12.7-6.9-20.1-5c-0.9,0.2-1.5,1.2-1.3,2.1c0.2,0.9,1.2,1.5,2.1,1.3c6.2-1.6,12.4,0,16.8,4.2c0.3,0.3,0.8,0.5,1.2,0.5c0.5,0,0.9-0.2,1.3-0.6C62.9,48.3,62.9,47.2,62.2,46.5z"></path></g></svg>
                  </div>
                  <div className="card-text">
                    <h5>Human Research &
                      Development</h5>
                    {/* <p>27 Jobs Available</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="plateform-cards">
                <div className="card-flex d-flex gap-4">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#efc07a" width="25" height="52" id="lni_lni-dollar" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 64 64' }}><path d="M39.7,30.3H24.3c-5.4,0-9.9-4.2-9.9-9.4s4.4-9.4,9.9-9.4h22.9c1,0,1.8-0.8,1.8-1.8S48.1,8,47.1,8H35.8V3c0-1-0.8-1.8-1.8-1.8S32.3,2,32.3,3v5h-8.1c-7.4,0-13.4,5.8-13.4,12.9c0,7.1,6,12.9,13.4,12.9h15.5c5.4,0,9.9,4.2,9.9,9.4s-4.4,9.4-9.9,9.4H13.6c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8h18.7v5c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8v-5h3.9c7.4,0,13.4-5.8,13.4-12.9S47.1,30.3,39.7,30.3z"></path></svg>
                  </div>
                  <div className="card-text">
                    <h5>Finance
                      Management</h5>
                    {/* <p>31 Jobs Available</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="plateform-cards">
                <div className="card-flex d-flex gap-4">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#b57ef5" width="25" height="52" id="lni_lni-target-customer" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 64 64' }}><g><path d="M61,30.3h-6.6c-0.9-11-9.7-19.7-20.6-20.6V3c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8v6.7c-10.9,0.9-19.7,9.6-20.6,20.6H3c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8h6.6c0.8,11.1,9.6,20,20.6,20.9V61c0,1,0.8,1.8,1.8,1.8c1,0,1.8-0.8,1.8-1.8v-6.4c11-0.9,19.8-9.8,20.6-20.9H61c1,0,1.8-0.8,1.8-1.8C62.8,31,62,30.3,61,30.3z M33.8,51.1v-0.7c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8v0.7c-9.1-0.8-16.3-8.2-17.1-17.4h3c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8h-3c0.9-9,8.1-16.2,17.1-17.1v0.4c0,1,0.8,1.8,1.8,1.8c1,0,1.8-0.8,1.8-1.8v-0.4c9,0.8,16.2,8,17.1,17.1h-0.4c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8h0.4C50.1,42.9,42.9,50.3,33.8,51.1z"></path><path d="M37.3,36.5c1.6-1.4,2.6-3.5,2.6-5.8c0-4.4-3.5-7.9-7.9-7.9s-7.9,3.5-7.9,7.9c0,2.3,1,4.4,2.6,5.8c-1.9,0.7-3.6,1.7-5.1,3c-0.7,0.6-0.8,1.7-0.1,2.5c0.3,0.4,0.8,0.6,1.3,0.6c0.4,0,0.8-0.1,1.2-0.4c2.3-2,5.1-3.1,8.1-3.1c3,0,5.9,1.1,8.1,3.1c0.7,0.6,1.8,0.6,2.5-0.1c0.6-0.7,0.6-1.8-0.1-2.5C40.9,38.2,39.2,37.2,37.3,36.5z M32,26.3c2.4,0,4.4,2,4.4,4.4c0,2.4-2,4.4-4.4,4.4c-2.4,0-4.4-2-4.4-4.4C27.6,28.2,29.6,26.3,32,26.3z"></path></g></svg>
                  </div>
                  <div className="card-text">
                    <h5>Armforce Guide &
                      Security</h5>
                    {/* <p>19 Jobs Available</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="plateform-cards">
                <div className="card-flex d-flex gap-4">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ef87f7" width="25" height="52" id="lni_lni-handshake" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 64 64' }}>
                      <path d="M61,35.6h-2.3c-0.9,0-1.7-1-1.7-2.2V18.2c0-1.3,0.8-2.3,1.8-2.3H61c1,0,1.8-0.8,1.8-1.8S62,12.4,61,12.4h-2.3c-1.9,0-3.6,1.2-4.6,2.9H40.8l-1.3-1.1c-5.3-4.6-13.2-5.1-18.7-1.1c-2.4,1.8-4.1,3.9-4.9,5c0,0.1-0.1,0.1-0.1,0.1h-2.3v-0.1c0-3.2-2.3-5.7-5.2-5.7H3c-1,0-1.8,0.8-1.8,1.8S2,15.9,3,15.9h5.2c0.9,0,1.7,1,1.7,2.2v15.1c0,1.3-0.8,2.3-1.8,2.3H3c-1,0-1.8,0.8-1.8,1.8S2,39.1,3,39.1h5.2c1.9,0,3.6-1.2,4.6-2.9h0.8c0.9,0,1.7,0.3,2.5,0.7c-0.1,0.5-0.1,1.1,0.3,1.5l2.3,3.1c0.2,0.3,0.6,0.5,0.9,0.6l3.2,0.9l1.4,3c0.2,0.5,0.6,0.8,1.1,0.9l3.3,0.9l2.1,3.4c0.2,0.4,0.6,0.6,1,0.8l5.6,1.6c0.2,0,0.3,0.1,0.5,0.1c0.6,0,1.1-0.3,1.5-0.8l11.2-16.6c0.1,0,0.1-0.1,0.3-0.1h3.5c0.9,1.7,2.6,2.9,4.5,2.9H61c1,0,1.8-0.8,1.8-1.8S62,35.6,61,35.6z M18.3,34.2c-1.4-1-3-1.5-4.7-1.5h-0.1v-11h2.3c1.2,0,2.3-0.6,3-1.5c0.7-0.9,2.1-2.7,4.1-4.2c4.2-3.1,10.2-2.7,14.4,0.9l3.4,3c0.6,0.5,1,1.2,1,1.7c0,0.4-0.1,0.7-0.4,1l-1.7,1.8c-1,1.1-2.6,1.2-3.8,0.3l-0.4-0.3c-2.5-1.9-5.9-1.6-8.1,0.6L18.3,34.2z M47.9,33.8c-0.1,0.1-0.2,0.2-0.2,0.3L37,49.9l-3.7-1l-2.1-3.4c-0.2-0.4-0.6-0.6-1-0.8L27,43.8l-1.4-3c-0.2-0.5-0.6-0.8-1.1-0.9l-3.4-0.9L20,37.5l9.8-10.1c1-0.9,2.4-1,3.5-0.2l0.4,0.3c2.6,1.9,6.2,1.6,8.4-0.7l1.7-1.8c0.9-1,1.4-2.3,1.3-3.6c0-0.9-0.3-1.7-0.8-2.5h9.1v13.9h-2.8C49.6,32.7,48.6,33.1,47.9,33.8z"></path>
                    </svg>

                  </div>
                  <div className="card-text">
                    <h5>Business &
                      Consulting</h5>
                    {/* <p>22 Jobs Available</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="plateform-cards">
                <div className="card-flex d-flex gap-4">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#49a986" width="25" height="52" viewBox="0 0 64 64" >
                      <g>
                        <path d="M60,47c-1.2-3.9-5.1-6.2-8.9-5.1c-3.6,1.1-8.5,2.5-12.1,3.6c0.5-1.4,0.3-2.5,0-3.4C38.2,40,35.8,39,33.8,39H24c-0.9,0-1.8-0.4-2.7-1.3c-1-0.9-2.3-1.4-3.7-1.4H9.7c-3.3,0-6,2.8-6,6.2v12.6c0,3.5,2.7,6.3,6.1,6.3h9.5c1.2,0,2.4-0.4,3.4-1.1l0.2,0.1c2.7,1.5,5.8,2.3,8.9,2.3c1.9,0,3.8-0.3,5.5-0.8L55,56.5l0.1,0C60.1,54.6,60.9,50.2,60,47zM9.8,57.9c-1.4,0-2.6-1.3-2.6-2.8V42.5c0-1.5,1.1-2.7,2.5-2.7h7.9c0.6,0,1.1,0.3,1.3,0.5c0.3,0.3,0.7,0.6,1,0.8v16.7c-0.2,0.1-0.4,0.1-0.6,0.1H9.8zM53.9,53.2l-17.6,5.4c-1.4,0.4-2.9,0.7-4.4,0.7c-2.5,0-5-0.6-7.3-1.9l-1.2-0.6V42.5c0.2,0,0.4,0,0.6,0h9.8c0.9,0,1.8,0.4,2,0.9c0.2,0.6-0.2,1.9-2.2,3.8l0,0c-0.6,0.6-0.7,1.4-0.3,2.1l0,0c0.7,1.3,0.7,1.3,10.4-1.6c4.2-1.2,8.4-2.5,8.4-2.5c1.9-0.5,3.9,0.6,4.5,2.7C57,49.4,57.2,52,53.9,53.2z"></path>
                        <path d="M50.5,15.4c3.9,0,7.1-3.2,7.1-7.1s-3.2-7.1-7.1-7.1c-3.9,0-7.1,3.2-7.1,7.1S46.7,15.4,50.5,15.4zM50.5,4.8c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6C47,6.3,48.6,4.8,50.5,4.8z"></path>
                        <path d="M48.2,37.1h3.3c3.9,0,7-3.1,7-7v-5.7c0-3.9-3.1-7-7-7h-3c-3.9,0-7,3.1-7,7v5.7C41.6,34,44.6,37.1,48.2,37.1zM45,24.4c0-1.9,1.6-3.5,3.5-3.5h3c1.9,0,3.5,1.6,3.5,3.5v5.7c0,1.9-1.6,3.5-3.5,3.5h-3.3c-1.7,0-3.2-1.6-3.2-3.6V24.4z"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="card-text">
                    <h5>Customer Support
                      Care</h5>
                    {/* <p>34 Jobs Available</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="plateform-cards">
                <div className="card-flex d-flex gap-4">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#8679d1" width="25" height="52" viewBox="0 0 64 64">
                      <path d="M60.5,20.8l0-5.8c0-2.3-1.9-4.2-4.2-4.2H30.8l-0.6-1.6c-0.4-0.9-1.3-1.5-2.2-1.5H8.2C5.3,7.8,3,10.2,3,13V51c0,2.9,2.3,5.2,5.2,5.2h47.6c2.9,0,5.2-2.3,5.2-5.2V22.3C61,21.8,60.8,21.3,60.5,20.8zM56.3,14.4c0.4,0,0.7,0.3,0.7,0.7v4.8H34.4l-2.2-5.5H56.3zM57.5,51c0,0.9-0.8,1.7-1.7,1.7H8.2c-0.9,0-1.7-0.8-1.7-1.7V13c0-0.9,0.8-1.7,1.7-1.7h19l4,9.9c0.5,1.3,1.8,2.2,3.2,2.2h23.1V51z"></path>
                    </svg>
                  </div>
                  <div className="card-text">
                    <h5>Project &
                      Mangement</h5>
                    {/* <p>28 Jobs Available</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="job-bg mt-5 mb-5">
        <div className="container">
          <div className="row mt-5">
            <div className="col">
              <div className="review-text">
                <h1 className='text-center'><span>Recent</span> Jobs Circulars</h1>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            {jobs.length === 0 ? (
              <div className="col-12">
                <p className="no-jobs-message text-center">No Jobs Available</p>
              </div>
            ) : (
              <>
                {jobs?.docs
                  .slice()
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .slice(0, 6)
                  .map((job) => (
                    <div className="col-lg-4 col-md-6 mb-5" key={job._id}>
                      <div className="job-card">
                        <div className="job-head">
                          <div className="job-icon">
                            <img src={job.image || jobImg} alt="job-icon" />
                          </div>
                          <div className="job-title">
                            <h4 style={{ textTransform: 'capitalize' }}>{job.jobTitle}</h4>
                          </div>
                        </div>
                        <div className="job-location d-flex justify-content-between">
                          <div className="location">
                            <LocationOnIcon />
                            <span style={{ textTransform: 'capitalize' }}>{job.jobLocation}</span>
                          </div>
                          <div className="type">
                            <p style={{ textTransform: 'capitalize' }}>{job.jobType}</p>
                          </div>
                        </div>
                        <div className="job-post-date">
                          Posted:{' '}
                          <p style={{ textTransform: 'capitalize' }}>
                            {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
                          </p>
                          <Link to={`/view-job/${job._id}`} className="job-type p-2">
                            View Job
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                <div className="more-jobs-btn">
                  <Link to='/all-jobs'>
                    <button>View More Jobs</button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div> */}
      <div class="technology-bg mt-5">
        <div class="container">
          <div class="row ">
            <div class="col">
              <div class="technology-heading text-center mt-5">
                <h1>Our <span className='common'>Services</span></h1>
              </div>
            </div>
          </div>
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
                    <h3 className='text-primary'>Price $200</h3>
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
                    <h3 className='text-primary'>Price $300</h3>
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
                    <h3 className='text-primary'>Price $250</h3>
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
                    <h3 className='text-primary'>Price $350</h3>
                  </div>
                  <a href="/contact-us" className='btn btn-primary mt-3' aria-label="Get Graphics Design Services">Get Now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col text-center mb-5">
            <a href="/services" className='btn btn-primary mt-3' aria-label="Get Graphics Design Services">View All Services</a>
            </div>
          </div>
        </div>
      </div>
      <div className="resume mt-5">
        <div className="container resume-bg">
          <div className="row">
            <div className="col-md-6">
              <div className="resume-img">
                <img
                  src={resumeImg}
                  alt="LoyaltyPromo services illustration"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="resume-text">
                <h1 className="text-white">
                  Unlock Exclusive Rewards with LoyaltyPromo
                </h1>
                <p>
                  At LoyaltyPromo, we specialize in connecting businesses with customers through personalized loyalty programs.
                  Discover how our innovative solutions can transform your customer relationships and drive growth.
                </p>
                {/* <p>
                  Just send us your business details and desired program features, and let us help you build a loyalty program
                  that truly stands out in the market!
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="company-bg mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="company-text text-center">
                <h1>More Than <span>50+ companies</span> sponsorship with us</h1>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="company-img">
                <img src={airbnb} alt='company-img'></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="company-img">
                <img src={shipBob} alt='company-img'></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="company-img">
                <img src={discord} alt='company-img'></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="company-img">
                <img src={walmart} alt='company-img'></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="company-img">
                <img src={Capitalone} alt='company-img'></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="company-img">
                <img src={dropbox} alt='company-img'></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="company-img">
                <img src={slack} alt='company-img'></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="company-img">
                <img src={dribble} alt='company-img'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="callout-bg mt-5">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-end">
              <div className="callout-text pt-5">
                <h1>
                  Elevate Your Recruitment Strategy with <span>LoyaltyPromo</span>
                </h1>
                <p>
                  In today's competitive landscape, attracting top talent is crucial for business success.
                  LoyaltyPromo provides a unique approach to enhance your recruitment efforts. Streamline your hiring process,
                  leverage data insights to identify ideal candidates,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-bg mt-5 text-center mb-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="stats-text">
                <h1>
                  LoyaltyPromo <span className='common'>Digital Services Stats</span>
                </h1>
                <p className='mt-3 stats-p'>
                  Explore how LoyaltyPromo empowers businesses with our comprehensive <br></br>digital services.
                  Here are some impressive stats showcasing<br></br> the impact we've made in the digital landscape.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="stats-card">
                <h1>
                  <CountUp end={500} duration={10} suffix="+" />
                </h1>
                <p className='common'>Digital Campaigns </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="stats-card">
                <h1>
                  <CountUp end={300} duration={10} />
                </h1>
                <p className='common'>Clients Served</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="stats-card">
                <h1>
                  <CountUp end={1500} duration={10} suffix="+" />
                </h1>
                <p className='common'>Leads Generated</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="stats-card">
                <h1>
                  <CountUp end={2000} duration={10} />
                </h1>
                <p className='common'>Social Media Followers</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="stats-card">
                <h1>
                  <CountUp end={100} duration={10} />
                </h1>
                <p className='common'>Websites Developed</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="stats-card">
                <h1>
                  <CountUp end={250} duration={10} />
                </h1>
                <p className='common'>Email Campaigns Sent</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="stats-card">
                <h1>
                  <CountUp end={90} duration={10} />
                </h1>
                <p className='common'>Client Satisfaction Rate</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="stats-card">
                <h1>
                  <CountUp end={5000} duration={10} />
                </h1>
                <p className='common'> Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="process-bg mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="process-heading text-center">
                <h2>
                  How to Get <span className='common'>Digital Services</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-5 d-flex justify-content-center pt-3">
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="process-card">
                <div className="card-icon text-center mt-2">
                  <GroupIcon />
                </div>
                <div className="card-heading">
                  <h5>Create Account</h5>
                </div>
                <div className="card-text">
                  <p>
                    Sign up to get started with our services. Create a personalized account that showcases your business needs and preferences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="process-card">
                <div className="card-icon text-center mt-2">
                  <SelectAllIcon /> {/* Use an appropriate icon for selecting services */}
                </div>
                <div className="card-heading">
                  <h5>Select Service Plan</h5>
                </div>
                <div className="card-text">
                  <p>
                    Browse our range of service plans tailored to your needs. Choose the plan that fits your goals and budget.
                    Please Select your plan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="process-card">
                <div className="card-icon text-center mt-2">
                  <ContactMailIcon />
                </div>
                <div className="card-heading">
                  <h5>Contact Us</h5>
                </div>
                <div className="card-text">
                  <p>
                    Get in touch with our team for any questions or further assistance. We're here to help you make the most of our services.
                  </p>
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

export default Home
