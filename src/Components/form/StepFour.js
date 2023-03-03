import React from 'react';
// import { Link } from 'react-router-dom';
import paymentLogo from '../../assets/img/paymentLogo.svg';

const StepFour = ({nextBtn}) => {
    return (
        <section className='paymentsGetWay stepFormMain'>
            <div className='pageWrapper'>
                <div className='formInfo'>
                    <div className='formElements'>
                        <div className='formBox d-flex align-items-center justify-content-center'>
                            <div className='formWrapper radius16 bg-white'>
                                <div className='container px-0'>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className='subscribeInfo mb-5 mb-lg-0'>
                                                <p className="secTag fs-6 textPurple fwMedium bgPurpleRgba d-inline-block radius2 py-2 px-3 mb-4 lh-base">
                                                    Subscribe to Grow membership
                                                </p>
                                                <div className='totalPrice mb-4'>
                                                    <strong className="ff-rufina textBlue fs-48 fw-bold d-block mb-2">$139.00</strong>
                                                    <p className="monthly fs-18 fw-normal textGray mb-0">Per month</p>
                                                </div>
                                                <p className="packageIntro fs-14 fw-normal textGray mb-4">
                                                    Get unstuck and supported in live, interactive sessions with our seasoned coaches.
                                                </p>

                                                <h4 className='packageName textDark fs-4 fw-bold ff-rufina'>Grow membership</h4>
                                                <p className='billName fs-14 fw-normal textGray mb-4'>Billed monthly</p>

                                                <div className='promoCode d-flex gap-4 align-items-center'>
                                                    <input type='text' name='promoCode' className='form-control fs-14 fwMedium textGray rounded-0' placeholder='Enter promo code' />
                                                    <button type='button' className='btn fs-6 fwSemiBold textBlue px-4 px-xl-5 rounded-0'>Apply</button>
                                                </div>

                                                <table className='table'>
                                                    <tr>
                                                        <td className='subtotal fs-14 fw-normal textGray py-3 border-bottom'>Subtotal</td>
                                                        <td className='subtotalAmount text-end fs-14 fw-normal textGray py-3 border-bottom'>$139.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='promoDiscountText fs-14 fw-normal textGray py-3 border-bottom'>Promo code discount</td>
                                                        <td className='promoDiscount text-end fs-14 fw-normal textGray py-3 border-bottom'>$00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='totalDueText fs-14 fw-normal textGray py-3 border-bottom'>Total due today</td>
                                                        <td className='totalDue text-end fs-14 fw-normal textGray py-3 border-bottom'>$00.00</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className='formField'>
                                                <div className='paymentHeader border-bottom pb-4'>
                                                    <h6 className='bgBlueDark py-3 px-4 text-white text-center radius2'> <img className='img-fluid me-2' src={paymentLogo} alt='paymentLogo' /> Pay with stripe</h6>
                                                </div>
                                                <div className='fileOutAllField pt-4'>
                                                    <div className="email mb-4">
                                                        <input type="text" className="form-control radius2 bgLight px-3 border-0 fs-12 fwMedium textGray2" placeholder="Enter your full name" required />
                                                    </div>
                                                    <div className="email mb-4">
                                                        <input type="number" className="form-control radius2 bgLight px-3 border-0 fs-12 fwMedium textGray2" placeholder="Card number" required />
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-xl-6'>
                                                            <div className="email mb-4">
                                                                <input type="date" className="form-control radius2 bgLight px-3 border-0 fs-12 fwMedium textGray2" placeholder="MM/ YYYY" required />
                                                            </div>
                                                        </div>
                                                        <div className='col-xl-6'>
                                                            <div className="email mb-4">
                                                                <input type="text" className="form-control radius2 bgLight px-3 border-0 fs-12 fwMedium textGray2" placeholder="CVC" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="email mb-4">
                                                        <input type="text" className="form-control radius2 bgLight px-3 border-0 fs-12 fwMedium textGray2" placeholder="Country" required />
                                                    </div>
                                                    <div className="email mb-4">
                                                        <input type="number" className="form-control radius2 bgLight px-3 border-0 fs-12 fwMedium textGray2" placeholder="Zip code" required />
                                                    </div>
                                                    <div className="l-btn text-center">
                                                        <button type='button' className="btn isBg-btn textDark bgYellow radius2 bgYellow fs-6 fwSemiBold py-2 w-100" onClick={nextBtn}>
                                                            Subscribe
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default StepFour;