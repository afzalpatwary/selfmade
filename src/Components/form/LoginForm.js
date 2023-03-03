import React from 'react';
import formFeaturedImg from '../../assets/img/formFeaturedImg.png';
import { Link } from 'react-router-dom';
import EyeInvisible from '../../assets/img/EyeInvisible.svg';
import EyeVisible from '../../assets/img/eyevisible.svg';
import './FormStyle.scss'
// import PassWordToggle from '../passWordToggle/PassWordToggle';

const LoginForm = () => {

    document.title = 'Login'

    // const [inputType, ] = PassWordToggle()

    return (
        <section className='form loginForm'>
            <div className='pageWrapper'>
                <div className='formFeatured d-flex flex-column justify-content-between align-items-center'>
                    <div className='formFeaturedHeader text-center mb-5 px-3'>
                        <h2 className='formCaption ff-rufina fs-48 fw-normal text-white mb-4'>
                            Sign up today & see <br className='d-none d-lg-inline' />
                            how the magic unfolds!
                        </h2>
                        <p className='formIntro fs-6 fw-normal text-white'>
                            Connect with top female entrepreneurs & business <br className='d-none d-lg-inline' />
                            coaches to pave your way to success!
                        </p>
                    </div>
                    <div className='formFeaturedImg px-5'>
                        <img className='img-fluid' src={formFeaturedImg} alt='formFeaturedImg' />
                    </div>
                </div>
                <div className='formInfo py-5'>
                    <form className='formElements'>
                        <div className='formBox d-flex align-items-center justify-content-center'>
                            <div className='formWrapper radius16 bg-white'>
                                <div className='formHeader mb-4 text-center'>
                                    <h3 className='fs-30 fw-normal textDark mb-3 ff-rufina'>Welcome back!</h3>
                                    <p className='fs-6 textGray fw-normal mb-0'>
                                        Sign into your account to access all the latest from Selfmade.
                                    </p>
                                </div>
                                <div className='formField'>
                                    <div className="email mb-3">
                                        <input type="text" className="form-control radius2 bgLight px-3 border-0 fs-12 fwMedium textGray2" placeholder="Enter your email address" required />
                                    </div>
                                    <div className="password mb-4 position-relative">
                                        <input type='password' className="form-control radius2 bgLight px-3 border-0 fs-12 fwMedium textGray2" id='password' placeholder="Enter your password" required />
                                        <img className='eye eyeInvisible position-absolute' src={EyeInvisible} alt='EyeInvisible' />
                                        <img className='eye eyeVisible position-absolute' src={EyeVisible} alt='EyeInvisible' />
                                    </div>
                                    <div className="form-check d-flex justify-content-between align-items-center gap-3 flex-wrap mb-4">
                                        <div>
                                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
                                            <label className="form-check-label textGray fs-14 fw-normal" for="flexCheckChecked">
                                                Remember me
                                            </label>
                                        </div>
                                        <Link className='forgotPassword fs-14 fw-norma textBlue' to='/'>Forgot password</Link>
                                    </div>
                                    <div className="l-btn text-center">
                                        <button type='submit' className="btn isBg-btn textDark bgYellow radius2 bgYellow fs-6 fwSemiBold py-2 w-100 mb-5">
                                            Sign in
                                        </button>
                                        <p className='fs-14 fw-normal textDark'>
                                            Don't have an account yet? <Link className='forgotPassword fs-14 fwMedium textOrange ' to='/StepFormMain'>Get started</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default LoginForm;