import React, { useState } from 'react'
import logo from '../../assets/images/logo.jpg'
import '../../assets/styles/Navbar.css'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useDispatch, useSelector } from 'react-redux';
import defaultImg from '../../assets/images/no-user.jpg'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { logoutUser } from '../../reducers/UserSlice';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logoutModel, setLogoutModel] = useState(false);
  const isAuthenticated = useSelector((state) => state.users.user);
  const handleClickOpen = () => setIsModalOpen(true);
  console.log(isAuthenticated, 'isAuthenticated');
  const handleNavOpen = () => {
    setNavOpen(true);
    setClosing(false);
  }
  const handleCloseNav = () => {
    setClosing(true);
    setTimeout(() => {
      setNavOpen(false);
      setClosing(false);
    }, 500);
  };
  const handleClickAway = () => {
    if (navOpen) {
      handleCloseNav();
    }
  };
  const handleClickModel = () => {
    setIsModalOpen(false)
  };

  const handleLinkClick = () => {
    if (navOpen) {
      handleCloseNav();
    }
  };
  const handleLogout = () => {
    setLogoutModel(true)
  }
  const handleClose = () => {
    setLogoutModel(false)
  }
  const handleConfirm = () => {
    dispatch(logoutUser());
    navigate('/');
  };
  return (
    <>
      <div className="header-bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header-flex">
                <div className="logo">
                  {
                    isAuthenticated && isAuthenticated.user?.role === 'employer' ? (
                      <><Link to='/employer-dashboard'><div className="logo-img"><img src={logo} alt='logo' /></div></Link><Link to='/employer-dashboard'><p>Job<span>Horizon</span></p></Link></>
                    ) : (
                      <><Link to='/'><div className="logo-img"><img src={logo} alt='logo' /></div></Link><Link to='/'><p>Job<span>Horizon</span></p></Link></>
                    )
                  }
                </div>
                <nav>
                  <ul>
                    {
                      isAuthenticated && isAuthenticated?.user?.role === 'employer' ? (
                        <li><NavLink to="/employer-dashboard" className={location.pathname === '/employer-dashboard' ? 'active' : ''}>Home</NavLink></li>
                      ) : (
                        <li><NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink></li>
                      )
                    }
                    <li><NavLink to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>About</NavLink></li>
                    {
                      isAuthenticated && isAuthenticated?.user?.role === 'employer' ? (
                        ''
                      ) : (
                        <li><NavLink to="/all-jobs" className={location.pathname === '/all-jobs' ? 'active' : ''}>All Jobs</NavLink></li>
                      )
                    }
                    <li><NavLink to="/privacy-policy" className={location.pathname === '/privacy-policy' ? 'active' : ''}>Privacy Policy</NavLink></li>
                    <li><NavLink to="/terms-and-conditions" className={location.pathname === '/terms-and-conditions' ? 'active' : ''}>Terms & Conditions</NavLink></li>
                    <li><NavLink to="/contact-us" className={location.pathname === '/contact-us' ? 'active' : ''}>Contact</NavLink></li>
                    {isAuthenticated && !window.location.pathname.includes('/role-selection')&& !window.location.pathname.includes('/login')  ? (
                      <>
                        <div className='chat' >
                          <Link to='/chat-dashboard'><ChatIcon /></Link>
                        </div>
                        <div className='notification' >
                          <Link to='/'><NotificationsIcon /></Link>
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                    {isAuthenticated && !window.location.pathname.includes('/role-selection') && !window.location.pathname.includes('/login') ? (
                      <div className='profile' onClick={handleClickOpen} >
                        <img src={defaultImg} alt="Profile" className="profile-icon" />
                      </div>
                    ) : (
                      <li className='employer-btn'>
                        <Link to="/login">Login</Link>
                      </li>
                    )}
                  </ul>
                </nav>
                <div className="navbar-left-icons">
                  {isAuthenticated && !window.location.pathname.includes('/role-selection')&& !window.location.pathname.includes('/login') ? (
                    <>
                      <div className='chat' >
                        <Link to='/chat-dashboard'><ChatIcon /></Link>
                      </div>
                      <div className='notification' >
                        <Link to='/'><NotificationsIcon /></Link>
                      </div>
                    </>
                  ) : (
                    ''
                  )}
                  {
                    isAuthenticated  && !window.location.pathname.includes('/role-selection')&& !window.location.pathname.includes('/login') ? (
                      <div className='profile' onClick={handleClickOpen} >
                        <img src={defaultImg} alt="Profile" className="profile-icon" />
                      </div>
                    ) : (
                      ''
                    )}
                  <div className="menu-icon">
                    <MenuIcon onClick={handleNavOpen} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {navOpen && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={`mobile-main ${closing ? 'slide-out' : 'slide-in'}`}>
            <div className='close-icon'>
              <CloseIcon onClick={handleCloseNav} />
            </div>
            <nav className='mobile-navbar'>
              {
                isAuthenticated && isAuthenticated?.user?.role === 'employer' ? (
                  <li><NavLink to="/employer-dashboard" onClick={handleLinkClick} className={location.pathname === '/employer-dashboard' ? 'active' : ''}>Home</NavLink></li>
                ) : (
                  <li><NavLink to="/" onClick={handleLinkClick} className={location.pathname === '/' ? 'active' : ''}>Home</NavLink></li>
                )
              }
              <Link to='/about-us' onClick={handleLinkClick}>About</Link>
              <Link to='/contact-us' onClick={handleLinkClick}>Contact</Link>
              {
                isAuthenticated && isAuthenticated?.user?.role === 'employer' ? (
                  ''
                ) : (
                  <li><NavLink to="/all-jobs" onClick={handleLinkClick} className={location.pathname === '/all-jobs' ? 'active' : ''}>All Jobs</NavLink></li>
                )
              }
              <Link to='/privacy-policy' onClick={handleLinkClick}>Privacy Policy</Link>
              <Link to='/terms-and-conditions' onClick={handleLinkClick}>Terms & Conditions</Link>
              {!isAuthenticated ? (
                <Link to='/login' className='employer-btn text-white' onClick={handleLinkClick}>Login</Link>
              ) : (
                ''
              )}
            </nav>
          </div>
        </ClickAwayListener>
      )}
      {/* profile model */}
      {isModalOpen && (
        <ClickAwayListener onClickAway={handleClickModel}>
          <div className="model-bg">
            <div className="model">
              <div className="model-header">
                <div className="model-img">
                  <img src={defaultImg} alt="Profile" className="profile-img" />
                </div>
                <div className="model-title text-center mt-3">
                  <p>{isAuthenticated?.user?.name}</p>
                </div>
              </div>
              <ul className='mt-3'>
                <li>
                  <Link to="/profile" onClick={handleClickModel}> <AccountCircleOutlinedIcon className='model-svg' /> Profile</Link>
                </li>
                <li>
                  <Link onClick={handleLogout}><LoginOutlinedIcon className='model-svg' /> Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </ClickAwayListener>
      )}

      {/* logout model open */}
      <Dialog open={logoutModel} onClose={handleClose}>
        <DialogTitle>Logout Conformation!</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to logout from This account?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleConfirm();
              handleClose();
            }}
            color="secondary"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Navbar
