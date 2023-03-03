import React from 'react';
import './Banner.scss';
import { Link, useLocation } from 'react-router-dom';


const Banner = ({ bannerBg, bannerRowClass, bannerTitle, bannerIntro, btnText1, btnText2, bannerImg }) => {





    // for button dynamic show/hide
    const { pathname } = useLocation()
    let button2 = null;
    if (pathname === '/' || pathname === '/home') {
        button2 = <Link to='/' className='btn brBtn fs-15 fwSemiBold  radius2 textYellow px-4 py-3 d-flex align-items-center gap-3'>
            {btnText2}
            <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.6095 3.05731L5.7475 0.195312L4.80483 1.13798L7.00016 3.33331H0.333496V4.66665H7.00016L4.80483 6.86198L5.7475 7.80465L8.6095 4.94265C8.85946 4.69261 8.99988 4.35353 8.99988 3.99998C8.99988 3.64643 8.85946 3.30735 8.6095 3.05731V3.05731Z" fill="#FFD335" />
            </svg>
        </Link>
    }


    return (
        <section className='banner isBgImage' style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className='container'>
                <div className='banner-wrapper d-xl-flex align-items-center'>
                    <div className={`row ${bannerRowClass}`} >
                        <div className='col-xl-6'>
                            <div className='banner-content text-center text-xl-start mb-5 mb-xl-0'>
                                <h1 className='banner-title text-white fw-bold fs-62 ff-rufina mb-4'>
                                    {bannerTitle}
                                </h1>
                                <div className='banner-intro textOfWhite fw-normal fs-18 mb-5'>
                                    <p>
                                        {bannerIntro}
                                    </p>
                                </div>
                                <div className='smBtn d-flex justify-content-center gap-4 align-items-center flex-wrap justify-content-xl-start'>
                                    <Link to='/' className='btn isBg-btn textDark bgYellow radius2 fs-15 fwSemiBold px-4 py-3 d-flex align-items-center gap-3'>
                                        {btnText1}
                                        <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.6095 3.05731L5.7475 0.195312L4.80483 1.13798L7.00016 3.33331H0.333496V4.66665H7.00016L4.80483 6.86198L5.7475 7.80465L8.6095 4.94265C8.85946 4.69261 8.99988 4.35353 8.99988 3.99998C8.99988 3.64643 8.85946 3.30735 8.6095 3.05731V3.05731Z" fill="#1A1A1C" />
                                        </svg>
                                    </Link>
                                    {
                                        button2
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='banner-img text-center text-xl-end'>
                                <img src={bannerImg} alt="BannerImg" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;