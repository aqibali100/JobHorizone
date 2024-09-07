import React from 'react'
import '../assets/styles/Job.css'
import jobImg from '../assets/images/job.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';


const Jobs = () => {
    return (
        <>
            <div className="job-bg mt-5 mb-5">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <div className="review-text">
                                <h1 className='text-center'><span>Discover</span> The best <br></br>New Jobs</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <div className="job-search-top">
                                <div className="job-by-location">
                                    <label htmlFor="job-location">Job By: </label>
                                    <div className="job-select">
                                        <select id="job-location" >
                                            <option value="" disabled selected >location</option>
                                            <option value="lahore">Lahore</option>
                                            <option value="karachi">Karachi</option>
                                            <option value="islamabad">Islamabad</option>
                                            <option value="multan">Multan</option>
                                            <option value="peshawar">Peshawar</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="job-by-search">
                                    <label htmlFor="job-search">Search Jobs:</label>
                                    <div className="search-wrapper">
                                        <input type="text" id="job-search" placeholder="Search by job title or keyword" />
                                        <button className="search-btn">
                                            <SearchIcon />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="job-card">
                                <div className="job-head">
                                    <div className="job-icon">
                                        <img src={jobImg} alt='job-icon'></img>
                                    </div>
                                    <div className="job-title">
                                        <h4>Web Designer</h4>
                                    </div>
                                </div>
                                <div className="job-location">
                                    <LocationOnIcon />
                                    <span>Lahore</span>
                                </div>
                                <div className="job-post-date">
                                    <p>Posted : 1 day ago</p>
                                    <p className='job-type bg-primary p-2'>Part-Time</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="job-card">
                                <div className="job-head">
                                    <div className="job-icon">
                                        <img src={jobImg} alt='job-icon'></img>
                                    </div>
                                    <div className="job-title">
                                        <h4>Web Designer</h4>
                                    </div>
                                </div>
                                <div className="job-location">
                                    <LocationOnIcon />
                                    <span>Lahore</span>
                                </div>
                                <div className="job-post-date">
                                    <p>Posted : 1 day ago</p>
                                    <p className='job-type bg-primary p-2'>Part-Time</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="job-card">
                                <div className="job-head">
                                    <div className="job-icon">
                                        <img src={jobImg} alt='job-icon'></img>
                                    </div>
                                    <div className="job-title">
                                        <h4>Web Designer</h4>
                                    </div>
                                </div>
                                <div className="job-location">
                                    <LocationOnIcon />
                                    <span>Lahore</span>
                                </div>
                                <div className="job-post-date">
                                    <p>Posted : 1 day ago</p>
                                    <p className='job-type bg-primary p-2'>Part-Time</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="job-card">
                                <div className="job-head">
                                    <div className="job-icon">
                                        <img src={jobImg} alt='job-icon'></img>
                                    </div>
                                    <div className="job-title">
                                        <h4>Web Designer</h4>
                                    </div>
                                </div>
                                <div className="job-location">
                                    <LocationOnIcon />
                                    <span>Lahore</span>
                                </div>
                                <div className="job-post-date">
                                    <p>Posted : 1 day ago</p>
                                    <p className='job-type bg-primary p-2'>Part-Time</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="job-card">
                                <div className="job-head">
                                    <div className="job-icon">
                                        <img src={jobImg} alt='job-icon'></img>
                                    </div>
                                    <div className="job-title">
                                        <h4>Web Designer</h4>
                                    </div>
                                </div>
                                <div className="job-location">
                                    <LocationOnIcon />
                                    <span>Lahore</span>
                                </div>
                                <div className="job-post-date">
                                    <p>Posted : 1 day ago</p>
                                    <p className='job-type bg-primary p-2'>Part-Time</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="job-card">
                                <div className="job-head">
                                    <div className="job-icon">
                                        <img src={jobImg} alt='job-icon'></img>
                                    </div>
                                    <div className="job-title">
                                        <h4>Web Designer</h4>
                                    </div>
                                </div>
                                <div className="job-location">
                                    <LocationOnIcon />
                                    <span>Lahore</span>
                                </div>
                                <div className="job-post-date">
                                    <p>Posted : 1 day ago</p>
                                    <p className='job-type bg-primary p-2'>Part-Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobs
