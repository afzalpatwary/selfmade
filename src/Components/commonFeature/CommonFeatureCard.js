import React from 'react';
import { useLocation } from 'react-router-dom';


const CommonFeatureCard = ({ colorClass, title, decs, shape, img }) => {

    const location = useLocation();

    return (
        <div className="row featuresStepRow gx-5 mb-5 pb-5">
            <div className="col-lg-6">
                <div className="step-content-area mt-5">
                    {location.pathname === "/SingUp" &&
                        <div className="step-number">
                            <span className={`number fwSemiBold ff-rufina ${colorClass}`}>
                            </span>
                        </div>
                    }
                    <h3 className="stepTitle fs-48 textDark fw-normal mb-4 ff-rufina">
                        {title}
                    </h3>

                    {/* <p className='fs-5 fw-normal textGray mb-5'>
                        {decs}
                    </p> */}

                    <p className='fs-5 fw-normal textGray mb-5' dangerouslySetInnerHTML={{__html:decs}} ></p> 

                    {location.pathname === "/SingUp" &&
                        <div className="shape">
                            <img className="img-fluid" src={shape} alt='Img' />
                        </div>
                    }
                    
                    {location.pathname === "/ProductDetails" &&
                        <div class="smBtn">
                            <a class="btn isBg-btn textDark bgYellow radius2 fs-15 fwSemiBold px-4 py-3 d-inline-flex align-items-center gap-3 border-0" href="/selfmadeReact">
                                Get started
                                <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.6095 3.05731L5.7475 0.195312L4.80483 1.13798L7.00016 3.33331H0.333496V4.66665H7.00016L4.80483 6.86198L5.7475 7.80465L8.6095 4.94265C8.85946 4.69261 8.99988 4.35353 8.99988 3.99998C8.99988 3.64643 8.85946 3.30735 8.6095 3.05731V3.05731Z" fill="#1A1A1C">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    }
                </div>
            </div>
            <div className="col-lg-6">
                <div className="step-img text-center text-lg-start">
                    <img className="img-fluid" src={img} alt='Img' />
                </div>
            </div>
        </div>
    );
};

export default CommonFeatureCard;