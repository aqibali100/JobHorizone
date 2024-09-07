import React from 'react'
import '../../assets/styles/Login.css'
import loginBG from '../../assets/images/bg.png'
import logo from '../../assets/images/logo.jpg'

const Login = () => {
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
                <form  className='form-border'>
                  <div className='login-icon'>
                    <img className='avatar' src={logo} alt="Avatar" />
                  </div>
                  <h2 className="title text-center mt-3 mb-5">Welcome Back To JobHorizon</h2>
                  <div className="input-div one">
                    <div className="i">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="div">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className='mb-4'
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.email}
                      />
                    </div>
                  </div>
                  {/* {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null} */}
                  <div className="input-div pass">
                    <div className="i">
                      <i className="fas fa-lock"></i>
                    </div>
                    <div className="div">
                      <input
                        // type={showPassword ? "text" : "password"}
                        type="password"
                        name="password"
                        placeholder="Password"
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.password}
                      />
                      {/* <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer', position: 'absolute', top: '15px' }}>
                        <FontAwesomeIcon className='i' icon={showPassword ? faEyeSlash : faEye} />
                      </span> */}
                    </div>
                  </div>
                  {/* {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null} */}

                  <div className='remember'>
                    <div className='radio d-flex align-items-center gap-3 mt-3'>
                      <input type='checkbox' style={{ width: '13px' }} />
                      <p className='m-0'>Remember me</p>
                    </div>
                    <div className='forget'>
                      {/* <Link to="/forget-password">Forget Password?</Link> */}
                    </div>
                  </div>
                  {/* <button className='btn' type="submit" disabled={loading}>
                    {loading ? <Loading /> : 'Login'}
                  </button> */}
                  <div className='account'>
                    {/* Create an account?    <Link to="/register"> Sign Up</Link> */}
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
