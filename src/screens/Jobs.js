import React, { useEffect, useState } from 'react'
import '../assets/styles/Job.css'
import jobImg from '../assets/images/job.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../reducers/JobSlice';
import { formatDistanceToNow } from 'date-fns';



const Jobs = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs.jobs);
    const totalPages = useSelector((state) => state.jobs.totalPages);
    const [page, setPage] = useState(1);
    const [location, setLocation] = useState('');
    const [search, setSearch] = useState('');
    console.log(jobs)
    useEffect(() => {
        const params = {
            page,
            limit: 10,
            location,
            search,
        };
        dispatch(fetchJobs(params));
    }, [dispatch, page, location, search]);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };
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
                                        <select id="job-location" value={location} onChange={handleLocationChange}>
                                            <option value="" disabled selected >location</option>
                                            <option value="lahore">Lahore</option>
                                            <option value="karachi">Karachi</option>
                                            <option value="faisalabad">faisalabad</option>
                                            <option value="islamabad">Islamabad</option>
                                            <option value="multan">Multan</option>
                                            <option value="peshawar">Peshawar</option>
                                            <option value="bahawalpur">Bahawalpur</option>
                                            <option value="sialkot">Sialkot</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="job-by-search">
                                    <label htmlFor="job-search">Search Jobs:</label>
                                    <div className="search-wrapper">
                                        <input type="text" id="job-search" placeholder="Search by job title or keyword" value={search}
                                            onChange={handleSearchChange} />
                                        <button className="search-btn">
                                            <SearchIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {(!jobs || !jobs.docs || jobs.docs.length === 0) ? (
                            <div className="col-12">
                                <p className="no-jobs-message text-center">No Jobs Available</p>
                            </div>
                        ) : (
                            <>
                                {jobs?.docs
                                    .slice()
                                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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
                                                        Apply Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobs
