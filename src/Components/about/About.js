import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './About.scss';
import AboutImg from '../../assets/img/aboutImg.png';
import CheckCircle from '../../assets/img/check_circle.svg';

const About = ({ SecHeader }) => {

    const { pathname } = useLocation();

    return (
        <section className={`about sectionPadding ${(pathname === '/about') && 'pt-200'}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="aboutImg mb-5 mb-lg-0">
                            <img src={AboutImg} alt="aboutImg" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="aboutInfo">

                            {SecHeader}


                            <ul className='checkList list-unstyled mb-5'>
                                <li className='fs-18 fw-normal textGray mb-3 d-flex align-items-center gap-3'>
                                    <img src={CheckCircle} alt="CheckCircle" className='img-fluid' />
                                    3,500+ women helped
                                </li>
                                <li className='fs-18 fw-normal textGray mb-3 d-flex align-items-center gap-3'>
                                    <img src={CheckCircle} alt="CheckCircle" className='img-fluid' />
                                    $2.75M in scholarships & grants
                                </li>
                                <li className='fs-18 fw-normal textGray mb-3 d-flex align-items-center gap-3'>
                                    <img src={CheckCircle} alt="CheckCircle" className='img-fluid' />
                                    100+ hours of on-demand content
                                </li>
                            </ul>
                            <div className='smBtn'>
                                <Link to='/' className='btn isBg-btn textDark bgYellow radius2 fs-15 fwSemiBold px-4 py-3 d-inline-flex align-items-center gap-3 border-0'>
                                    Learn More
                                    <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.6095 3.05731L5.7475 0.195312L4.80483 1.13798L7.00016 3.33331H0.333496V4.66665H7.00016L4.80483 6.86198L5.7475 7.80465L8.6095 4.94265C8.85946 4.69261 8.99988 4.35353 8.99988 3.99998C8.99988 3.64643 8.85946 3.30735 8.6095 3.05731V3.05731Z" fill="#1A1A1C" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;