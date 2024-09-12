import React from 'react';
import '../assets/styles/JobPost.css';
import 'react-quill/dist/quill.snow.css';

const ViewJob = () => {
    return (
        <>
            <div className='topbar mt-4'>
                <h1>Job Details</h1>
            </div>
            <div className='bg-image'>
                <div className='main'>
                    <div className='container'>
                        <form className='job-form'>
                            <div className='row'>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='text' name='firstName' placeholder=''readonly />
                                        <label>First Name</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field'>
                                        <input type='text' name='lastName' placeholder=' 'readonly />
                                        <label>Last Name</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='text' name='companyName' placeholder=' ' readonly/>
                                        <label>Company Name</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='text' name='companyName' placeholder=' 'readonly />
                                        <label>Company Name</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='number' name='numberOfMembers' placeholder=' ' readonly/>
                                        <label>No. of Company Members</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='number' name='companyPhoneNumber' placeholder=' ' readonly/>
                                        <label>Company Phone Number</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='text' name='jobTitle' placeholder=' 'readonly />
                                        <label>Job Title</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='text' name='jobTitle' placeholder=' 'readonly />
                                        <label>Job Title</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='text' name='jobTitle' placeholder=' 'readonly />
                                        <label>Job Title</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='text' name='jobTitle' placeholder=' ' readonly/>
                                        <label>Job Title</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='number' name='minimumPay' placeholder=' 'readonly/>
                                        <label>Minimum Pay</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='number' name='maximumPay' placeholder=' 'readonly/>
                                        <label>Maximum Pay</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='input-field mt-5'>
                                        <input type='text' name='jobTitle' placeholder=' ' readonly/>
                                        <label>Job Title</label>
                                    </div>
                                </div>
                                <div className="form-btn">
                                    <button type='submit'>Apply Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewJob;