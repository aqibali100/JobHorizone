import React, { useEffect } from 'react';
import '../assets/styles/JobPost.css';
import { jobPostSchema } from '../components/validation/Validate';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { createJob, fetchJobById } from '../reducers/JobSlice';
import { toast } from 'react-toastify';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';

const Application = () => {
    const jobId = useParams();
    const dispatch = useDispatch();
    const job = useSelector((state) => state.jobs.job);
    useEffect(() => {
        if (jobId) {
            dispatch(fetchJobById(jobId));
        }
    }, [dispatch, jobId]);
    const { user } = useSelector((state) => state.users);
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            jobTitle: '',
            Phone: '',
            companyPhoneNumber: '',
            maximumPay: '',
            Email: '',
            minimumPay: '',
            rate: '',
            jobLocation: '',
            jobDescription: '',
            jobType: '',
            experience: '',
        },
        validationSchema: jobPostSchema,
        onSubmit: async (values, { resetForm, setSubmitting, setErrors }) => {
            try {
                const jobData = {
                    ...values,
                    userId: user._id
                };
                dispatch(createJob({ jobData, config: { headers: { Authorization: `Bearer ${user.token}` } } }));
                resetForm();
                toast.success('Job posted successfully!');
            } catch (error) {
                setErrors({ submit: error.message });
            } finally {
                setSubmitting(false);
            }
        },
    });
    return (
        <>
            <div className='topbar mt-4'>
                <h1>Apply For Job</h1>
            </div>
            <div className='bg-image'>
                <div className='main'>
                    <div className='container'>
                        <div className='title mb-2'>
                            <h1>Enter Your Details</h1>
                        </div>
                        <form className='job-form' onSubmit={formik.handleSubmit}>
                            <div className='row'>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field-2 mt-5'>
                                        <input type='text' name='jobTitle' placeholder=' ' readOnly/>
                                        <label>Job Title</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field-2 mt-5'>
                                        <input type='text' name='companyName' placeholder=' ' readOnly />
                                        <label>Company Name</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='text' name='firstName' placeholder=' '
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.firstName} />
                                        <label>First Name</label>
                                    </div>
                                    {formik.touched.firstName && formik.errors.firstName ? (
                                        <div className="post-error">{formik.errors.firstName}</div>
                                    ) : null}
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='text' name='lastName' placeholder=' ' onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.lastName} />
                                        <label>Last Name</label>
                                    </div>
                                    {formik.touched.lastName && formik.errors.lastName ? (
                                        <div className="post-error">{formik.errors.lastName}</div>
                                    ) : null}
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='email' name='Email' placeholder=' ' onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.Email} />
                                        <label>Email</label>
                                    </div>
                                    {formik.touched.Email && formik.errors.Email ? (
                                        <div className="post-error">{formik.errors.Email}</div>
                                    ) : null}
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field-2 mt-5'>
                                        <input type='number' name='Phone' placeholder=' '
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.Phone} />
                                        <label>Phone</label>
                                    </div>
                                    {formik.touched.Phone && formik.errors.Phone ? (
                                        <div className="post-error">{formik.errors.Phone}</div>
                                    ) : null}
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='number' name='companyPhoneNumber' placeholder=' '
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.companyPhoneNumber} />
                                        <label>Company Phone Number</label>
                                    </div>
                                    {formik.touched.companyPhoneNumber && formik.errors.companyPhoneNumber ? (
                                        <div className="post-error">{formik.errors.companyPhoneNumber}</div>
                                    ) : null}
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='text' name='jobTitle' placeholder=' '
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.jobTitle} />
                                        <label>Job Title</label>
                                    </div>
                                    {formik.touched.jobTitle && formik.errors.jobTitle ? (
                                        <div className="post-error">{formik.errors.jobTitle}</div>
                                    ) : null}
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='industry mt-5'>
                                        <select
                                            name="jobType"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.jobType}
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Select Job Type</option>
                                            <option value="full-time">Full-Time</option>
                                            <option value="part-time">Part-Time</option>
                                            <option value="temporary">Temporary</option>
                                            <option value="contract">Contract</option>
                                            <option value="internship">Internship</option>
                                            <option value="fresher">Fresher</option>
                                        </select>
                                    </div>
                                    {formik.touched.jobType && formik.errors.jobType ? (
                                        <div className="post-error">{formik.errors.jobType}</div>
                                    ) : null}
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='industry mt-5'>
                                        <select
                                            name="jobLocation"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.jobLocation}
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Select Job Location</option>
                                            <option value="lahore">Lahore</option>
                                            <option value="faisalabad">Faisalabad</option>
                                            <option value="karachi">Karachi</option>
                                            <option value="islamabad">Islamabad</option>
                                            <option value="multan">Multan</option>
                                            <option value="sialkot">Sialkot</option>
                                            <option value="bahawalpur">Bahawalpur</option>
                                        </select>
                                    </div>
                                    {formik.touched.jobLocation && formik.errors.jobLocation ? (
                                        <div className="post-error">{formik.errors.jobLocation}</div>
                                    ) : null}
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='industry mt-5'>
                                        <select
                                            name="experience"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.experience}
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Select Experience Level</option>
                                            <option value="entry-level">Entry-level</option>
                                            <option value="mid-level">Mid-level</option>
                                            <option value="senior-level">Senior-level</option>
                                        </select>
                                    </div>
                                    {formik.touched.experience && formik.errors.experience ? (
                                        <div className="post-error">{formik.errors.experience}</div>
                                    ) : null}
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='number' name='minimumPay' placeholder=' ' onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.minimumPay} />
                                        <label>Minimum Pay</label>
                                    </div>
                                    {formik.touched.minimumPay && formik.errors.minimumPay ? (
                                        <div className="post-error">{formik.errors.minimumPay}</div>
                                    ) : null}
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='number' name='maximumPay' placeholder=' '
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.maximumPay} />
                                        <label>Maximum Pay</label>
                                    </div>
                                    {formik.touched.maximumPay && formik.errors.maximumPay ? (
                                        <div className="post-error">{formik.errors.maximumPay}</div>
                                    ) : null}
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='industry mt-5'>
                                        <select
                                            name="rate"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.rate}
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Select Rate</option>
                                            <option value="per-hour">Per Hour</option>
                                            <option value="per-day">Per Day</option>
                                            <option value="per-week">Per Week</option>
                                            <option value="per-month">Per Month</option>
                                            <option value="per-year">Per Year</option>
                                        </select>
                                    </div>
                                    {formik.touched.rate && formik.errors.rate ? (
                                        <div className="post-error">{formik.errors.rate}</div>
                                    ) : null}
                                </div>
                                <div className="form-btn">
                                    <button type='submit'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Application;