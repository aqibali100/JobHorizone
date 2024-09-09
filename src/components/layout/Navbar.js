import React, { useState } from 'react'
import logo from '../../assets/images/logo.jpg'
import '../../assets/styles/Navbar.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useSelector } from 'react-redux';
import defaultImg from '../../assets/images/no-user.jpg'

const Navbar = () => {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const isAuthenticated = useSelector((state) => state.users.user);
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

  const handleLinkClick = () => {
    if (navOpen) {
      handleCloseNav();
    }
  };
  return (
    <>
      <div className="header-bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header-flex">
                <div className="logo">
                  <Link to='/'><div className="logo-img">
                    <img src={logo} alt='logo'></img>
                  </div></Link>
                  <Link to='/'><p>Job<span>Horizon</span></p></Link>
                </div>
                <nav>
                  <ul>
                    <li><NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink></li>
                    <li><NavLink to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>About</NavLink></li>
                    <li><NavLink to="/all-jobs" className={location.pathname === '/all-jobs' ? 'active' : ''}>All Jobs</NavLink></li>
                    <li><NavLink to="/privacy-policy" className={location.pathname === '/privacy-policy' ? 'active' : ''}>Privacy Policy</NavLink></li>
                    <li><NavLink to="/terms-and-conditions" className={location.pathname === '/terms-and-conditions' ? 'active' : ''}>Terms & Conditions</NavLink></li>
                    <li><NavLink to="/contact-us" className={location.pathname === '/contact-us' ? 'active' : ''}>Contact</NavLink></li>
                    <li className='profile'>
                      {isAuthenticated ? (
                        <Link to="/profile">
                          <img src= {defaultImg} alt="Profile" className="profile-icon" />
                        </Link>
                      ) : (
                        <li className='employer-btn'>
                          <Link to="/login">Login</Link>
                        </li>
                      )}
                    </li>
                  </ul>
                </nav>
                <div className="menu-icon">
                  <MenuIcon onClick={handleNavOpen} />
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
              <Link to='/' onClick={handleLinkClick}>Home</Link>
              <Link to='/about-us' onClick={handleLinkClick}>About</Link>
              <Link to='/contact-us' onClick={handleLinkClick}>Contact</Link>
              <Link to='/all-jobs' onClick={handleLinkClick}>All Jobs</Link>
              <Link to='/privacy-policy' onClick={handleLinkClick}>Privacy Policy</Link>
              <Link to='/terms-and-conditions' onClick={handleLinkClick}>Terms & Conditions</Link>
              <Link to='/login' className='employer-btn text-white' onClick={handleLinkClick}>Login</Link>
            </nav>
          </div>
        </ClickAwayListener>
      )}
    </>
  )
}

export default Navbar
