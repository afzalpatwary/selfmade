import React from 'react';
import { Link } from 'react-router-dom';
import './FormStyle.scss'

const StepTwo = ({nextBtn}) => {
    return (
        <section className='form stepFormMain'>
            <div className='pageWrapper'>
                <div className='formInfo py-5'>
                    <div className='formElements'>
                        <div className='formBox d-flex align-items-center justify-content-center'>
                            <div className='formWrapper radius16 bg-white'>
                                <div className='stepHeader text-center mb-4 pb-1'>
                                    <h3 className='fs-4 fw-normal textDark ff-rufina'>
                                        Add few more
                                        information about you
                                    </h3>
                                </div>
                                <div className='formField'>
                                    <div className='mb-4'>
                                        <select className="form-select form-control radius2 bgLight px-3 border-0 fs-12 fwMedium textGray2">
                                            <option selected>Where are you in your biz journey?</option>
                                            <option value="1">Bangladesh</option>
                                            <option value="2">USA</option>
                                            <option value="3">Canada</option>
                                        </select>
                                    </div>
                                    <div className='mb-4'>
                                        <select className="form-select form-control radius2 bgLight px-3 border-0 fs-12 fwMedium textGray2">
                                            <option selected>What is your industry?</option>
                                            <option value="1">Digital Marketing</option>
                                            <option value="2">Technology</option>
                                            <option value="3">Web Application</option>
                                        </select>
                                    </div>
                                    <div className='mb-4'>
                                        <select className="form-select form-control radius2 bgLight px-3 border-0 fs-12 fwMedium textGray2">
                                            <option selected>What topics are you interested in?</option>
                                            <option value="1">Digital Marketing</option>
                                            <option value="2">Technology</option>
                                            <option value="3">Web Application</option>
                                        </select>
                                    </div>
                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
                                        <label className="form-check-label textGray fs-14 fw-normal" for="flexCheckChecked">
                                            I agree to Selfmade’s <Link to="/" className='textOrange fwMedium'>Privacy policy</Link> and
                                            <Link to="/" className='textOrange fwMedium'> Terms of Use</Link>
                                        </label>
                                    </div>
                                    <div className="l-btn text-center">
                                        <button type='button' className="btn isBg-btn textDark bgYellow radius2 bgYellow fs-6 fwSemiBold py-2 w-100" onClick={nextBtn}>
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StepTwo;