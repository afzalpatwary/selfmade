import React from 'react';
import { Link } from 'react-router-dom';
import successImg from '../../assets/img/successImg.png';

const FinalStep = () => {
    return (
        <section className='success stepFormMain pb-5'>
            <div className='pageWrapper'>
                <div className='formInfo mt-5'>
                    <div className='formElements'>
                        <div className='formBox d-flex align-items-center justify-content-center'>
                            <div className='formWrapper text-center radius16 bg-white'>
                                <div className=' mb-4'>
                                    <div className='mb-4'>
                                        <img className='img-fluid' src={successImg} alt='successImg' />
                                    </div>
                                    <h3 className='fs-30 fw-bold textDark ff-rufina'>
                                        Welcome to Selfmade! please
                                        verify your email.
                                    </h3>
                                </div>
                                <div className="">
                                    <p className="textGray fs-14 fw-normal">
                                        Get unstuck and supported in live, interactive sessions with
                                        our seasoned coaches If you haven’t received an email from us
                                        after five minutes. <Link to='/' className='border-0 bg-transparent p-0 textOrange fwMedium'>Back to Home</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalStep;