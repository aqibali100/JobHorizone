import React, { useState } from 'react'
import '../../assets/styles/Login.css'
import loginBG from '../../assets/images/bg.png'
import logo from '../../assets/images/loyaltyPromo.jpg'
import Loading from '../loading/Loading';
import {  useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { ResretPasswordSchema } from '../validation/Validate';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { resetPassword } from '../../reducers/UserSlice';
import { useDispatch } from 'react-redux';


const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: {
        password: '',
    },
    validationSchema: ResretPasswordSchema,
    onSubmit: async (values, { resetForm, setSubmitting, setErrors }) => {
        try {
            const res = await dispatch(resetPassword({ token, password: values.password })).unwrap();
            resetForm();
            toast.success('Password reset successful!');
            navigate('/login');
        } catch (error) {
            toast.error('Password reset token is invalid or has expired.');
        } finally {
            setSubmitting(false);
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
                  <h2 className="title text-center mt-3">Reset Password</h2>
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
                  <div class="login-btn text-center mt-3">
                    <button className='btn' type="submit" disabled={loading}>
                      {loading ? <Loading /> : 'Reset Password'}
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

export default ResetPassword
