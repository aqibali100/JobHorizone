import React, { useState } from 'react'
import '../../assets/styles/Login.css'
import loginBG from '../../assets/images/bg.png'
import logo from '../../assets/images/logo.jpg'
import Loading from '../loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { LoginSchema, RegistrationSchema } from '../validation/Validate';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch} from 'react-redux';
import { registerUser } from '../../reducers/UserSlice';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            phone: '',
        },
        validationSchema: RegistrationSchema,
        onSubmit: async (values, { resetForm, setErrors }) => {
            setLoading(true);
            try {
                const response =  await dispatch(registerUser({
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    phone: values.phone,
                })).unwrap();
                resetForm();
                const userId = response; 
                navigate(`/role-selection/${userId}`);
            } catch (error) {
                if (error?.message === 'Email is Already Registered!') {
                    toast.error('Email is Already Registered!');
                } else {
                    setErrors({ form: 'Registration failed. Please try again.' });
                }
            } finally {
                setLoading(false);
            }
        },
    });
    return (
        <>
            <div class="login-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="login-img">
                                <img src={loginBG}></img>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div className="login-content">
                                <form className='form-border' onSubmit={formik.handleSubmit}>
                                    <div className='login-icon'>
                                        <img className='avatar' src={logo} alt="Avatar" />
                                    </div>
                                    <h2 className="title text-center mt-3">Sign Up</h2>
                                    <div className="input-div">
                                        <div className="div">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                className='mt-3'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.name}
                                            />
                                        </div>
                                    </div>
                                    {formik.touched.name && formik.errors.name ? (
                                        <div className="error">{formik.errors.name}</div>
                                    ) : null}
                                    <div className="input-div">
                                        <div className="div">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                className='mt-3'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                            />
                                        </div>
                                    </div>
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="error">{formik.errors.email}</div>
                                    ) : null}
                                    <div className="input-div pass">
                                        <div className="div">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                className='mt-3'
                                                placeholder="Password"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                            />
                                            <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer', position: 'absolute', top: '15px' }}>
                                                <FontAwesomeIcon className='i' icon={showPassword ? faEyeSlash : faEye} />
                                            </span>
                                        </div>
                                    </div>
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className="error">{formik.errors.password}</div>
                                    ) : null}
                                    <div className="input-div">
                                        <div className="div">
                                            <input
                                                type="number"
                                                name="phone"
                                                placeholder="phone"
                                                className='mt-3'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.phone}
                                            />
                                        </div>
                                    </div>
                                    {formik.touched.phone && formik.errors.phone ? (
                                        <div className="error">{formik.errors.phone}</div>
                                    ) : null}
                                    <div class="login-btn text-center mt-3">
                                        <button className='btn' type="submit" disabled={loading}>
                                            {loading ? <Loading /> : 'Sign Up'}
                                        </button>
                                    </div>
                                    <div className='account text-center mt-4'>
                                        Alreadt have an account?    <Link to="/login">Login</Link>
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

export default Register
