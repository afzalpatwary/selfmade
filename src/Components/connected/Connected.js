import React from 'react';
import './Connected.scss';
import ConnectedShape from '../../assets/img/ConnectedShape.png';
import ConnectedImg from '../../assets/img/ConnectedImg.png';

const Connected = () => {
    return (
        <section className='Connected sectionPadding'>
            <div className='container'>
                <div className='sectionHeader text-center mb-5'>
                    <h2 className='secTitle fs-48 fw-bold ff-rufina textDark'>
                        Selfmade keeps you <br className='d-none d-lg-inline' /> connected
                    </h2>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-lg-9 offset-lg-1'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='ConnectedInfo'>
                                    <div className='numberCount'>
                                        <span className='Count d-block ff-rufina mb-0'></span>
                                    </div>
                                    <h3 className='secInnerTitle fs-48 fw-normal ff-rufina textDark mb-4'>
                                        Coaching & <br className='d-none d-lg-inline' /> Mentorship
                                    </h3>
                                    <div className='ConnectedIntro fs-5 fw-normal textGray mb-5'>
                                        <p>
                                            Go 1:1 to ask our subject-matter
                                            experts
                                            specific questions, or set up recurring  meetings with coaches
                                        </p>
                                    </div>
                                    <div className='ConnectedShape'>
                                        <img src={ConnectedShape} className='img-fluid' alt='ConnectedShape' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='ConnectedImg'>
                                    <img src={ConnectedImg} className='img-fluid' alt='ConnectedImg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connected;