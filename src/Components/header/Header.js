
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg'
import Logo2 from '../../assets/img/logo.svg'
import './Header.scss';



const Header = () => {


  const [navBgChange, setNavBgChange] = useState(false);
  const { pathname } = useLocation();

  if (pathname === "/LoginForm" || (pathname === "/StepFormMain")) return null;
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavBgChange(true);
    }
    else {
      setNavBgChange(false);
    }
  };

  window.addEventListener('scroll', changeNavbarColor);



  return (

    <Navbar className={`Header py-4 position-fixed start-0 end-0 top-0 ${navBgChange ? 'stickyHeader' : 'bg-transparent'} ${(pathname === '/price' || pathname === '/testimonial' || pathname === '/feature' || pathname === '/about' || pathname === '/SingUp') && 'bgBlue'}`} expand="xl">
      <Container>

        <NavLink to="/">
          <Navbar.Brand>
            {
              navBgChange ? <img src={Logo2} alt="logo" /> : <img src={Logo} alt="logo" />
            }
          </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="py-3 py-xl-0 m-auto">
            <Link to='/features' className='nLink fs-15 fwMedium text-white mb-3 mb-xl-0 mx-xl-3 mx-xxl-4 ls'>
              Features
            </Link>
            <Link to='/price' className='nLink fs-15 fwMedium text-white mb-3 mb-xl-0 mx-xl-3 mx-xxl-4 ls'>
              Pricing
            </Link>
            <Link to='/testimonial' className='nLink fs-15 fwMedium text-white mb-3 mb-xl-0 mx-xl-3 mx-xxl-4 ls'>
              Testimonial
            </Link>
            <Link to='/about' className='nLink fs-15 fwMedium text-white mb-3 mb-xl-0 mx-xl-3 mx-xxl-4 ls'>
              About
            </Link>
          </Nav>
          <div className='smBtn d-flex gap-4'>
            <Link to='/LoginForm' className='btn fs-15 fwSemiBold textYellow'>Sign in</Link>
            <Link to='/SingUp' className='btn isBg-btn fs-15 fwMedium textDark bgYellow radius2 px-4 py-2 border-0'>Start your free trial</Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;