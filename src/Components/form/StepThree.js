import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import tickCircle from '../../assets/img/tick-circle.svg';
import { pricingData2 } from '../data/Data';
import './FormStyle.scss'

const StepThree = ({ nextBtn }) => {

    const { pathname } = useLocation();

    return (
        <section className={`stepThree stepFormMain pb-5 ${(pathname === '/price' || pathname === '/SingUp') && 'py-150 my-4'}`}>
            <div className='pageWrapper'>
                <div className='container'>
                    <div className='stepHeader text-center mb-4'>
                        <h3 className='fs-36 fw-bold textDark ff-rufina mb-3'>
                            Select your pricing plan
                        </h3>
                        <p className='fs-14 fw-normal textGray mb-0'>2 months free with a Yearly Plan</p>
                    </div>
                    <div className='row'>
                        <div className='col-xl-10 offset-xl-1'>
                            <div className='selectPackage'>
                                <ul className="nav nav-pills mb-3 mx-auto border p-1 rounded-pill justify-content-between mb-5" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active fs-6 fw-normal textDark  px-3 py-1 rounded-pill d-flex gap-2 align-items-center" id="pills-yearly-tab" data-bs-toggle="pill" data-bs-target="#pills-yearly" type="button" role="tab">
                                            <img className='tickIcon img-fluid d-none' src={tickCircle} alt="icon" />
                                            yearly
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fs-6 fw-normal textDark px-3 py-1 rounded-pill d-flex gap-2 align-items-center" id="pills-monthly-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly" type="button" role="tab">
                                            <img className='tickIcon img-fluid d-none' src={tickCircle} alt="icon" />
                                            Monthly
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane show active" id="pills-yearly" role="tabpanel">
                                        <div className='row gx-xl-5'>
                                            {
                                                pricingData2.map((priceInfo, index) =>
                                                    <div className='col-xl-4 col-sm-6'>
                                                        <label class="selectPackage form-check-label d-block" for="flexCheckDefault">
                                                            <input class="form-check-input d-none" type="radio" id="flexCheckDefault" />
                                                            <div className='singlePlan radius16 mb-4 mb-xl-0 bg-white'>
                                                                <div className='planHeader text-center border-bottom'>
                                                                    <h4 className={`planCaption fs-4 fw-bold ff-rufina py-3 mb-0 ${priceInfo?.color}`}>{priceInfo?.planCaption}
                                                                        <span className={`fs-12 fwSemiBold text-white rounded-pill ${priceInfo?.badgeBg} ${priceInfo?.padding} ${priceInfo?.ml}`}>{priceInfo?.captionBadge}</span>
                                                                    </h4>
                                                                    <p className='planDiscount py-3 fs-14 fwMedium textBlue mb-0'>{priceInfo.planDiscount}</p>
                                                                </div>
                                                                <div className='planBody'>
                                                                    <div className='price d-flex gap-3 align-items-end mb-4'>
                                                                        <strong className='ff-rufina textBlue fs-48 fw-bold'>{priceInfo.priceY}</strong>
                                                                        <p className='monthly fs-14 fw-normal textGray mb-0'>{priceInfo.monthly}</p>
                                                                    </div>
                                                                    <p className='packageIntro fs-14 fw-normal textGray mb-4' dangerouslySetInnerHTML={{ __html: priceInfo.packageIntro }}>
                                                                    </p>
                                                                    <div className="youWillGetThisPackage mb-4">
                                                                        <h6 className='textGray mb-3'>{priceInfo.innerTitle}</h6>

                                                                        <div className='prosConsList fs-14 textGrays fw-normal' dangerouslySetInnerHTML={{ __html: priceInfo.prosCons }} ></div>
                                                                    </div>
                                                                    <div className='smBtn mb-1 pt-2'>
                                                                        <Link className="btn brBtn fs-15 fwMedium textBlue  radius2 textYellow px-4 py-2 w-100" onClick={nextBtn}>
                                                                            Sign up for free
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="pills-monthly" role="tabpanel">
                                        <div className='row gx-xl-5'>
                                            {
                                                pricingData2.map((priceInfo, index) =>
                                                    <div className='col-xl-4 col-sm-6'>
                                                        <div className='singlePlan radius16 mb-4 mb-xl-0 bg-white'>
                                                            <div className='planHeader text-center border-bottom'>
                                                                <h4 className={`planCaption fs-4 fw-bold ff-rufina py-3 mb-0 ${priceInfo?.color}`}>{priceInfo?.planCaption}
                                                                    <span className={`fs-12 fwSemiBold text-white rounded-pill ${priceInfo?.badgeBg} ${priceInfo?.padding} ${priceInfo?.ml}`}>{priceInfo?.captionBadge}</span>
                                                                </h4>
                                                                <p className='planDiscount py-3 fs-14 fwMedium textBlue mb-0'>{priceInfo.planDiscount}</p>
                                                            </div>
                                                            <div className='planBody'>
                                                                <div className='price d-flex gap-3 align-items-end mb-4'>
                                                                    <strong className='ff-rufina textBlue fs-48 fw-bold'>{priceInfo.price}</strong>
                                                                    <p className='monthly fs-14 fw-normal textGray mb-0'>{priceInfo.monthly}</p>
                                                                </div>
                                                                <p className='packageIntro fs-14 fw-normal textGray mb-4' dangerouslySetInnerHTML={{ __html: priceInfo.packageIntro }}>
                                                                </p>
                                                                <div className="youWillGetThisPackage mb-4">
                                                                    <h6 className='textGray mb-3'>{priceInfo.innerTitle}</h6>

                                                                    <div className='prosConsList fs-14 textGrays fw-normal' dangerouslySetInnerHTML={{ __html: priceInfo.prosCons }} ></div>
                                                                </div>
                                                                <div className='smBtn mb-1 pt-2'>
                                                                    <Link className="btn brBtn fs-15 fwMedium textBlue  radius2 textYellow px-4 py-2 w-100" onClick={nextBtn}>
                                                                        Sign up for free
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
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

export default StepThree;