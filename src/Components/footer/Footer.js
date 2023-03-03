import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.scss';
import FooterLogo from '../../assets/img/logo.svg';
import Facebook from '../../assets/img/facebook.svg';
import Twitter from '../../assets/img/twitter.svg';
import Instagram from '../../assets/img/instagram.svg';
import Linkedin from '../../assets/img/linkedin.svg';


const Footer = () => {

    const { pathname } = useLocation();

    if (pathname === "/LoginForm" || (pathname === "/StepFormMain" ) ) return null;

    return (
        <footer className='footer bgBlack'>
            <div className="footerWidgetArea">
                <div className="container">
                    <div className="footerTop sectionPadding">
                        <div className='FooterLogo text-center mb-5 pb-xl-3'>
                            <img src={FooterLogo} className='img-fluid' alt='FooterLogo' />
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-12">
                                <div className="singleWidget mb-5 mb-xl-0">
                                    <h3 className='widgetTitle fs-3 fw-bold textGray3 ff-rufina mb-4 pb-2'>
                                        Weekly Newsletter
                                    </h3>
                                    <div className="footerIntro fs-6 fw-normal textGray4 lh-base mb-4 pb-3">
                                        <p className='mb-0'>
                                            See for yourself what we do & how
                                            we empower women business owners
                                            throughout their entire journey!
                                        </p>
                                    </div>
                                    <div className="subscribe position-relative">
                                        <input type='email' className='form-control px-4 fs-12' placeholder='Write Your Email' />
                                        <button type='button' className='btn fs-6 fw-bold textDark bgYellow position-absolute border-0 px-3'>
                                            Sign up
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6 offset-xl-1">
                                <div className="singleWidget mb-5 mb-xl-0">
                                    <h3 className='widgetTitle fs-3 fw-bold textGray3 ff-rufina mb-4 pb-2'>
                                        Quick links
                                    </h3>
                                    <ul className='widgetMenu list-unstyled mb-0'>
                                        <Link to='/' className="link textGray4 fs-18 fw-normal d-block mb-4">
                                            Home
                                        </Link>
                                        <Link to='/about' className="link textGray4 fs-18 fw-normal d-block mb-4">
                                            About
                                        </Link>
                                        <Link to='/faq' className="link textGray4 fs-18 fw-normal d-block mb-0">
                                            Faq
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="singleWidget mb-5 mb-xl-0">
                                    <h3 className='widgetTitle fs-3 fw-bold textGray3 ff-rufina mb-4 pb-2'>
                                        News
                                    </h3>
                                    <ul className='widgetMenu list-unstyled mb-0'>
                                        <Link to='/review' className="link textGray4 fs-18 fw-normal d-block mb-4">
                                            Review
                                        </Link>
                                        <Link to='/guides' className="link textGray4 fs-18 fw-normal d-block mb-4">
                                            Guides
                                        </Link>
                                        <Link to='/press' className="link textGray4 fs-18 fw-normal d-block mb-0">
                                            press
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="singleWidget mb-5 mb-xl-0">
                                    <h3 className='widgetTitle fs-3 fw-bold textGray3 ff-rufina mb-4 pb-2'>
                                        Sponsors
                                    </h3>
                                    <ul className='widgetMenu list-unstyled mb-0'>
                                        <Link to='/partner' className="link textGray4 fs-18 fw-normal d-block mb-4">
                                            Partner with us
                                        </Link>
                                        <Link to='/guides' className="link textGray4 fs-18 fw-normal d-block mb-0">
                                            Scholarships
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="singleWidget">
                                    <h3 className='widgetTitle fs-3 fw-bold textGray3 ff-rufina mb-4 pb-2'>
                                        Policies
                                    </h3>
                                    <ul className='widgetMenu list-unstyled mb-0'>
                                        <Link to='/termsOfUse' className="link textGray4 fs-18 fw-normal d-block mb-4">
                                            Terms of use
                                        </Link>
                                        <Link to='/privacyPolicy' className="link textGray4 fs-18 fw-normal d-block mb-0">
                                            Privacy policy
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottomArea">
                <div className="container">
                    <div className="bottomWrapper d-flex gap-3 gap-md-5 justify-content-center justify-content-md-between align-items-center flex-wrap py-3">
                        <div className="copyRight fs-18 fw-normal textGray4">
                            <p className='mb-0'>
                                &copy; 2023 tryselfmade. All Rights Reserved
                            </p>
                        </div>
                        <div className="social">
                            <ul className='list-unstyled mb-0 d-flex gap-3 align-items-center flex-wrap'>
                                <li>
                                    <a href='/' className='singleSocial d-block text-center rounded-circle'>
                                        <img src={Facebook} className='img-fluid' alt='SIcon' />
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='singleSocial d-block text-center rounded-circle'>
                                        <img src={Instagram} className='img-fluid' alt='SIcon' />
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='singleSocial d-block text-center rounded-circle'>
                                        <img src={Twitter} className='img-fluid' alt='SIcon' />
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='singleSocial d-block text-center rounded-circle'>
                                        <img src={Linkedin} className='img-fluid' alt='SIcon' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;