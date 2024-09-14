import React, { useState } from 'react'
import '../assets/styles/Contact.css'
import { useFormik } from 'formik'
import { ContactFormSchema } from '../components/validation/Validate'
import Loading from '../components/loading/Loading'
import { toast } from 'react-toastify';


const Contact = () => {
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        validationSchema: ContactFormSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                setLoading(true);
                console.log(values);
                await new Promise((resolve) => setTimeout(resolve, 2000));
                toast.success('Form submission successful!');
                // resetForm();
            } catch (error) {
                console.error("Error submitting form:", error);
            } finally {
                setLoading(false);
            }
        },
    });
    return (
        <>
            <div className="hero-bg">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="hero-flex">
                                <div className="hero-text">
                                    <h1>Contact <span>Us</span></h1>
                                    <p>For any inquiries, please contact us. We are committed to <br />protecting your privacy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-text">
                                <h1 className='text-dark'>Let's <span>Connect</span></h1>
                                <p>We'd love to hear from you! Please fill out the form below, and<br /> our team will get back to you as soon as possible.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-box">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.name && formik.errors.name ? (
                                            <div className="error">{formik.errors.name}</div>
                                        ) : null}
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="error">{formik.errors.email}</div>
                                        ) : null}
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            type="number"
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone"
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.phone && formik.errors.phone ? (
                                            <div className="error">{formik.errors.phone}</div>
                                        ) : null}
                                    </div>

                                    <div className="mb-3">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="6"
                                            placeholder="Message"
                                            value={formik.values.message}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.message && formik.errors.message ? (
                                            <div className="error">{formik.errors.message}</div>
                                        ) : null}
                                    </div>

                                    <div className="submit-btn text-end">
                                        <button type="submit" className="btn btn-primary">
                                            {loading ? (
                                                <>
                                                    <div class="loading-flex d-flex align-items-center gap-3">
                                                        Waiting <Loading />
                                                    </div>
                                                </>
                                            ) : 'Submit'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
