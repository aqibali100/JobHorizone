import React, { useEffect } from 'react';
import '../assets/styles/JobPost.css';
import { ApplicationSchema } from '../components/validation/Validate';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobById } from '../reducers/JobSlice';
import { toast } from 'react-toastify';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import { postApplication } from '../reducers/ApplicationSlice';

const Application = () => {
    const jobId = useParams();
    const dispatch = useDispatch();
    const job = useSelector((state) => state.jobs.job);
    const { user } = useSelector((state) => state.users);
    console.log(user)
    useEffect(() => {
        if (jobId) {
            dispatch(fetchJobById(jobId));
        }
    }, [dispatch, jobId]);
    const formik = useFormik({
        initialValues: {
            jobTitle: '',
            companyName: '',
            firstName: '',
            lastName: '',
            Phone: '',
            currentSalary: '',
            Email: '',
            expectedSalary: '',
            Location: '',
            experience: '',
        },
        validationSchema: ApplicationSchema,
        onSubmit: async (values, { resetForm, setSubmitting, setErrors }) => {
            try {
                const applicationData = {
                    ...values,
                    jobTitle: job?.jobTitle,
                    companyName: job?.companyName,
                    jobId: jobId,
                    userId: user?.user?.id
                };
                await dispatch(postApplication({ applicationData, config: { headers: { Authorization: `Bearer ${user.token}` } } }));
                resetForm();
                toast.success('Application submitted successfully!');
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
                                        <input type='text' name='jobTitle' placeholder=' ' value={job?.jobTitle} readOnly />
                                        <label>Job Title</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field-2 mt-5'>
                                        <input type='text' name='companyName' placeholder=' ' value={job?.companyName} readOnly />
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
                                    <div className='input-field mt-5'>
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
                                    <div className='industry mt-5'>
                                        <select
                                            name="Location"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.Location}
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Your Location</option>
                                            <option value="lahore">Lahore</option>
                                            <option value="faisalabad">Faisalabad</option>
                                            <option value="karachi">Karachi</option>
                                            <option value="islamabad">Islamabad</option>
                                            <option value="multan">Multan</option>
                                            <option value="sialkot">Sialkot</option>
                                            <option value="bahawalpur">Bahawalpur</option>
                                        </select>
                                    </div>
                                    {formik.touched.Location && formik.errors.Location ? (
                                        <div className="post-error">{formik.errors.Location}</div>
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
                                        <input type='number' name='currentSalary' placeholder=' ' onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.currentSalary} />
                                        <label>Current Salary</label>
                                    </div>
                                    {formik.touched.currentSalary && formik.errors.currentSalary ? (
                                        <div className="post-error">{formik.errors.currentSalary}</div>
                                    ) : null}
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='number' name='expectedSalary' placeholder=' '
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.expectedSalary} />
                                        <label>Expected Salary</label>
                                    </div>
                                    {formik.touched.expectedSalary && formik.errors.expectedSalary ? (
                                        <div className="post-error">{formik.errors.expectedSalary}</div>
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