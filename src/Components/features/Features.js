import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import FeaturesIcons1 from '../../assets/img/features-icon1.svg';
import FeaturesIcons2 from '../../assets/img/features-icon2.svg';
import FeaturesIcons3 from '../../assets/img/features-icon3.svg';
import FeaturesIcons4 from '../../assets/img/features-icon4.svg';
import FeaturesIcons5 from '../../assets/img/features-icon5.svg';
import FeaturesIcons6 from '../../assets/img/features-icon6.svg';
import FeaturesImg from '../../assets/img/FeaturesImg.png';

import './Features.scss'

const Features = ({ SecHeader }) => {

    const { pathname } = useLocation();

    return (
        <section className={`Features sectionPadding ${(pathname === '/feature') && 'pt-200'}`}>
            <div className='container'>


                {SecHeader}

                <div className='row align-items-center'>
                    <div className='featuresItems col-xl-4 col-md-6'>
                        <div className='singleFeature mb-5 pb-3'>
                            <div className='icon mb-3'>
                                <img src={FeaturesIcons1} alt='Features' className='img-fluid' />
                            </div>
                            <h3 className='innerTitle textDark fs-30 fw-bold ff-rufina mb-3'>
                                On-demand lessons
                            </h3>
                            <div className='innerIntro fs-18 fw-normal textGray'>
                                <p className='mb-0'>
                                    Guided step-by-step curriculum to teach you how to do things right on your own. Learn on your own time, in your own pace
                                </p>
                            </div>
                        </div>
                        <div className='singleFeature mb-5 pb-3'>
                            <div className='icon mb-3'>
                                <img src={FeaturesIcons2} alt='Features' className='img-fluid' />
                            </div>
                            <h3 className='innerTitle textDark fs-30 fw-bold ff-rufina mb-3'>
                                Weekly coaching
                            </h3>
                            <div className='innerIntro fs-18 fw-normal textGray'>
                                <p className='mb-0'>
                                    Facilitated by a professional business coach, you'll meet live with women in your business stage each week to connect and grow together
                                </p>
                            </div>
                        </div>
                        <div className='singleFeature mb-5 mb-xl-0'>
                            <div className='icon mb-3'>
                                <img src={FeaturesIcons3} alt='Features' className='img-fluid' />
                            </div>
                            <h3 className='innerTitle textDark fs-30 fw-bold ff-rufina mb-3'>
                                1:1 Mentorship
                            </h3>
                            <div className='innerIntro fs-18 fw-normal textGray'>
                                <p className='mb-0'>
                                    1:1 live Q&A session with a Selfmade subject-matter expert to minimize confusion and inaction, and get professional advice
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='featuresItems col-xl-4 col-md-6 order-1 order-lg-0'>
                        <div className='FeatureImg text-center text-lg-start mb-5 mb-lg-0'>
                            <img src={FeaturesImg} alt='Features' className='img-fluid' />
                        </div>
                    </div>
                    <div className='featuresItems col-xl-4 col-md-6'>
                        <div className='singleFeature mb-5 pb-3'>
                            <div className='icon mb-3'>
                                <img src={FeaturesIcons4} alt='Features' className='img-fluid' />
                            </div>
                            <h3 className='innerTitle textDark fs-30 fw-bold ff-rufina mb-3'>
                                Community
                            </h3>
                            <div className='innerIntro fs-18 fw-normal textGray'>
                                <p className='mb-0'>
                                    Hook up with a like-minded community continuing founders & companies, and empower each other in times of success and failure
                                </p>
                            </div>
                        </div>
                        <div className='singleFeature mb-5 pb-3'>
                            <div className='icon mb-3'>
                                <img src={FeaturesIcons5} alt='Features' className='img-fluid' />
                            </div>
                            <h3 className='innerTitle textDark fs-30 fw-bold ff-rufina mb-3'>
                                Funding
                            </h3>
                            <div className='innerIntro fs-18 fw-normal textGray'>
                                <p className='mb-0'>
                                    From setting your mindset to defining your idea to pitching and fundraising, we equip you with all the resources you need to make your business a success
                                </p>
                            </div>
                        </div>
                        <div className='singleFeature mb-0'>
                            <div className='icon mb-3'>
                                <img src={FeaturesIcons6} alt='Features' className='img-fluid' />
                            </div>
                            <h3 className='innerTitle textDark fs-30 fw-bold ff-rufina mb-3'>
                                Fireside chats
                            </h3>
                            <div className='innerIntro fs-18 fw-normal textGray'>
                                <p className='mb-0'>
                                    Have intimate interviews and network with some of the most successful female entrepreneurs to keep propelling yourself forward
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='smBtn d-flex justify-content-center mt-5'>
                    <Link to='/' className='btn isBg-btn textDark bgYellow radius2 fs-15 fwSemiBold px-4 py-3 d-flex align-items-center gap-3 border-0'>
                        Learn More
                        <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.6095 3.05731L5.7475 0.195312L4.80483 1.13798L7.00016 3.33331H0.333496V4.66665H7.00016L4.80483 6.86198L5.7475 7.80465L8.6095 4.94265C8.85946 4.69261 8.99988 4.35353 8.99988 3.99998C8.99988 3.64643 8.85946 3.30735 8.6095 3.05731V3.05731Z" fill="#1A1A1C" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Features;