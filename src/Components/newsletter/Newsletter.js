import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterBg from '../../assets/img/newsletterBg.png';
import './Newsletter.scss';

const Newsletter = ({SecHeader}) => {
    return (
        <section className='newsletter isBgImage sectionPadding' style={{ backgroundImage: `url(${NewsletterBg})` }}>
            <div className='container'>
               {SecHeader}
                <div className='form newsletterSubscribe'>
                    <div className="d-flex gap-3 justify-content-center align-items-center flex-wrap">
                        <div className='emailSubscription w-100'>
                            <input type="email" className="form-control bgPurple text-white px-4 py-3 border-0 fwMedium radius2 fs-12" placeholder="Enter your email address" />
                        </div>
                        <div className='smBtn d-flex gap-4 align-items-center flex-wrap'>
                            <Link to='/' className='btn isBg-btn textDark bgYellow radius2 fs-15 fwSemiBold px-4 py-3 d-flex align-items-center gap-3 border-0'>
                                Sign up
                                <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.6095 3.05731L5.7475 0.195312L4.80483 1.13798L7.00016 3.33331H0.333496V4.66665H7.00016L4.80483 6.86198L5.7475 7.80465L8.6095 4.94265C8.85946 4.69261 8.99988 4.35353 8.99988 3.99998C8.99988 3.64643 8.85946 3.30735 8.6095 3.05731V3.05731Z" fill="#1A1A1C" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;