import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EyeInvisible from '../../assets/img/EyeInvisible.svg';
import EyeVisible from '../../assets/img/eyevisible.svg';

const StepOne = ({nextBtn}) => {

    const [regData, setRegData] = useState({
        fullName : '',
        email : '',
        password : '',
        rePassword : '',
        subsCription : '',
    });

    // console.log(regData.fullName)
    // const canStep2 = (regData.fullName !== '') && (regData.email !== '') && (regData.password !== '') && (regData.rePassword !== '');

    // const disabledNextBtn = !canStep2

    const { subsCription, ...requiredInputs } = setRegData;

    const canNext = [...Object.values(requiredInputs)].every(Boolean);


    return (
        <section className='form stepFormMain'>
        <div className='pageWrapper'>
            <div className='formInfo py-5'>
                <div className='formElements'>
                    <div className='formBox'>
                        <div className='formWrapper radius16 bg-white mx-auto'>
                            <div className='stepHeader text-center mb-4 pb-1'>
                                <h3 className='fs-4 fw-normal textDark ff-rufina'>
                                    Lets start with your email address and name
                                </h3>
                            </div>
                            <div className='formField'>
                                <div class="fullName mb-3">
                                    <input type="text" class="form-control radius2 bgLight px-3 border-0 fs-12 fwMedium textGray2" placeholder="Enter your full name" required value={regData.fullName} onChange={(e) => {
                                        setRegData({fullName: e.target.value})
                                    }} />
                                </div>
                                <div class="email mb-3">
                                    <input type="text" class="form-control radius2 bgLight px-3 border-0 fs-12 fwMedium textGray2" placeholder="Enter your email address" required value={regData.email} onChange={(e) => {
                                        setRegData({email: e.target.value})
                                    }} />
                                </div>
                                <div class="password mb-4 position-relative">
                                    <input type="password" class="form-control radius2 bgLight px-3 border-0 fs-12 fwMedium textGray2" id='password' placeholder="Enter your password" required value={regData.password} onChange={(e) => {
                                        setRegData({password: e.target.value})
                                    }} />
                                    <img className='eye eyeInvisible position-absolute' src={EyeInvisible} alt='EyeInvisible' />
                                    <img className='eye eyeVisible position-absolute' src={EyeVisible} alt='EyeInvisible' />
                                </div>
                                <div class="rePassword mb-4 position-relative">
                                    <input type="password" class="form-control radius2 bgLight px-3 border-0 fs-12 fwMedium textGray2" id='password' placeholder="Re-type your password" required value={regData.rePassword} onChange={(e) => {
                                        setRegData({rePassword: e.target.value})
                                    }} />
                                    <img className='eye eyeInvisible position-absolute' src={EyeInvisible} alt='EyeInvisible' />
                                    <img className='eye eyeVisible position-absolute' src={EyeVisible} alt='EyeInvisible' />
                                </div>
                                <div class="form-check mb-4">
                                    <input class="form-check-input" type="checkbox" id="flexCheckChecked" value={regData.subsCription} onChange={(e) => {
                                        setRegData({subsCription: e.target.value})
                                    }}/>
                                    <label class="form-check-label textGray fs-14 fw-normal" for="flexCheckChecked">
                                        I would like to recieve occasional marketing emails from selfmade and its partners
                                    </label>
                                </div>
                                <div class="l-btn text-center">
                                    <button type='button' class="btn isBg-btn textDark bgYellow radius2 bgYellow fs-6 fwSemiBold py-2 w-100 mb-5" onClick={nextBtn} disabled={!canNext}>
                                        Next
                                    </button>
                                    <p className='fs-14 fw-normal textDark mb-0'>
                                        Already have an account. <Link className='forgotPassword fs-14 fwMedium textOrange ' to='/LoginForm'>Sign in</Link>
                                    </p>
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

export default StepOne;