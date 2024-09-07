import React, { useState } from 'react'
import '../../assets/styles/Login.css'
import loginBG from '../../assets/images/bg.png'
import logo from '../../assets/images/logo.jpg'
import Loading from '../loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { ForgetPasswordSchema } from '../validation/Validate';
import { sendResetPasswordEmail } from '../../reducers/UserSlice';
import { useDispatch } from 'react-redux';


const ForgetPassword = () => {
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
    },
    validationSchema: ForgetPasswordSchema,
    onSubmit: async (values, { resetForm }) => {
        setLoading(true);
        try {
            await dispatch(sendResetPasswordEmail(values)).unwrap();
            resetForm();
            toast.success('Email sent successfully!');
            navigate('/login');
        } catch (error) {
            if (error === 'User with given email does not exist') {
                toast.error('This Email is not Found!');
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
                  <h2 className="title text-center mt-3">Forget Password</h2>
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
                  <div class="login-btn text-center mt-3">
                    <button className='btn' type="submit" disabled={loading}>
                      {loading ? <Loading /> : 'Send Email'}
                    </button>
                  </div>
                  <div className='account text-center mt-4'>
                    <Link to="/login"> Login</Link>
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

export default ForgetPassword
