import React from 'react';
import { Link } from 'react-router-dom';
import { pricingData } from '../data/Data';
import './pricing.scss';


const Pricing = ({SecHeader}) => {
    return (
        <section className='pricing sectionPadding bg-white'>
            <div className='container'>

                
                <div className='sectionHeader text-center mb-5'>
                    <p className='secTag fs-13 textPink fw-bold bgPinkLight d-inline-block radius2 py-1 px-2 mb-4 text-uppercase lh-base'>
                        Claim 50% off for 6 months!
                    </p>
                    <h2 className='secTitle fs-48 fw-bold ff-rufina textDark mb-4'>
                        Membership plans
                    </h2>
                    <p class="secIntro fs-6 fw-normal textGray">
                        Use code <Link className='textPurpleLight fwSemiBold'> FOUNDINGMEMBER </Link> (Offer Expires 10/25/22)
                    </p>
                </div>


                <div className='row'>

                    {
                        pricingData.map((priceInfo, index) =>
                            <div className='col-xl-3 col-lg-4 col-sm-6'>
                                <div className='singlePlan radius16 text-center mb-4 mb-xl-0'>
                                    <div className='planHeader border-bottom'>
                                        <h4 className={`planCaption fs-18 fwMedium py-2 mb-0 ${priceInfo?.color}`}>{priceInfo?.planCaption}
                                            <span className={`fs-12 fwSemiBold text-white rounded-pill ${priceInfo?.badgeBg} ${priceInfo?.padding} ${priceInfo?.ml}`}>{priceInfo?.captionBadge}</span>
                                        </h4>
                                        <p className='planDiscount py-3 fs-14 fw-normal textDark mb-0'>{priceInfo.planDiscount}</p>
                                    </div>
                                    <div className='planBody p-4'>
                                        <div className='price d-flex gap-3 align-items-center justify-content-center mb-4'>
                                            <strong className='ff-rufina textBlue fs-48 fw-bold'>{priceInfo.price}</strong>
                                            <div className='discount text-start'>
                                                <p className='oldPrice fs-4 fw-normal textOrange'>{priceInfo.oldPrice}</p>
                                                <p className='monthly fs-14 fw-normal textGray mb-0'>{priceInfo.monthly}</p>
                                            </div>
                                        </div>
                                        <p className='packageIntro fs-14 fw-normal textGray mb-4'>
                                            {priceInfo.packageIntro}
                                        </p>

                                        <div className='smBtn mb-4'>
                                            <a class="btn brBtn fs-15 fwMedium textBlue  radius2 textYellow px-4 py-2 w-100" href="/selfmadeReact">
                                                Get started
                                            </a>
                                        </div>
                                        <p className='tryText fs-6 fw-normal textGray mb-0'>
                                            {priceInfo.tryText}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default Pricing;