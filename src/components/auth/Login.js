import React, { useState } from 'react'
import '../../assets/styles/Login.css'
import loginBG from '../../assets/images/bg.png'
import logo from '../../assets/images/logo.jpg'
import Loading from '../loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { LoginSchema } from '../validation/Validate';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../reducers/UserSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { resetForm, setSubmitting, setErrors }) => {
      setLoading(true);
      try {
        const response = await dispatch(loginUser(values)).unwrap();
        const { user } = response;
        console.log(user, 'user');
        resetForm();
        toast.success('Login successful!');
        if (user.role === 'employer') {
          navigate('/employer-dashboard');
        } else {
          navigate('/');
        }
      } catch (error) {
        if (error?.message === 'This Email is not Registered!') {
          toast.error('This Email is not Registered!');
        } else if (error?.message === 'Your Password is Incorrect!') {
          toast.error('Your Password is Incorrect!');
        } else {
          setErrors({ form: 'Login failed. Please try again.' });
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
                  <h2 className="title text-center mt-3">Welcome Back To JobHorizon</h2>
                  <div className="input-div">
                    <div className="div">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className='mt-4'
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
                        className='mt-4'
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
                  <div className='remember d-flex align-items-center justify-content-between mt-3'>
                    <div className='radio d-flex align-items-center gap-3'>
                      <input type='checkbox' style={{ width: '13px' }} />
                      <p className='m-0'>Remember me</p>
                    </div>
                    <div className='forget'>
                      <Link to="/forget-password">Forget Password?</Link>
                    </div>
                  </div>
                  <div class="login-btn text-center mt-3">
                    <button className='btn' type="submit" disabled={loading}>
                      {loading ? <Loading /> : 'Login'}
                    </button>
                  </div>
                  <div className='account text-center mt-4'>
                    Create an account?    <Link to="/register"> Sign Up</Link>
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

export default Login
