import React from 'react';
import { Link } from 'react-router-dom';
import callToActionBG from '../../assets/img/callToAction-bg.png';
import callToActionImg from '../../assets/img/callToActionImg.png';

const CallToAction = ({SecHeader}) => {
    return (
        <section className='callToAction isBgImage sectionPadding' style={{ backgroundImage: `url(${callToActionBG})` }}>
            <div className='container'>
                <div className='callToActionImg text-center mb-5 d-block d-lg-none'>
                    <img src={callToActionImg} alt="callToActionImg" className='img-fluid' />
                </div>

               {SecHeader}

                <div className="d-flex gap-3 justify-content-center align-items-center flex-wrap">
                    <div className='smBtn d-flex gap-4 align-items-center justify-content-center flex-wrap'>
                        <Link to='/' className='btn isBg-btn textDark bgYellow radius2 fs-15 fw-Bold px-4 py-3 d-flex align-items-center gap-3 border-0'>
                            Get started
                            <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.6095 3.05731L5.7475 0.195312L4.80483 1.13798L7.00016 3.33331H0.333496V4.66665H7.00016L4.80483 6.86198L5.7475 7.80465L8.6095 4.94265C8.85946 4.69261 8.99988 4.35353 8.99988 3.99998C8.99988 3.64643 8.85946 3.30735 8.6095 3.05731V3.05731Z" fill="#1A1A1C" />
                            </svg>
                        </Link>
                        <a className="btn brBtn fs-15 fw-Bold  radius2 text-white px-4 py-3 d-flex align-items-center gap-3" href="/selfmade">
                            Start your free trial
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_103_6325)">
                                    <path d="M15.416 6.58614L12.3587 3.52881L11.416 4.47147L14.2573 7.31347L0 7.33347V8.66681L14.2973 8.64681L11.4153 11.5288L12.358 12.4715L15.416 9.41414C15.7898 9.03848 15.9996 8.53009 15.9996 8.00014C15.9996 7.47019 15.7898 6.9618 15.416 6.58614Z" fill="white" />
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;