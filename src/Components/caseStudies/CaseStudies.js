



import React from 'react';
// import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CaseStudies.scss';
import { CaseStudiesData } from '../data/Data';
import longArrowR from '../../assets/img/long-arrow-r.svg';
import longArrowL from '../../assets/img/long-arrow-l.svg';
import webIcon from '../../assets/img/webIcon.svg';
import insTaIcon from '../../assets/img/instagram.svg';
import { Link } from "react-router-dom";



const CaseStudies = ({ BgColor, SectionTag, SectionTitle, SectionIntro, SecHeader }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoplaySpeed: 1500,
        autoplay: false,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <img src={longArrowR} alt='longArrowR' className='img-fluid' />,
        prevArrow: <img src={longArrowL} alt='longArrowL' className='img-fluid' />,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section className={`CaseStudies sectionPadding ${BgColor}`}>
            <div className="container">

                {/* commonHeader */}
                {SecHeader}
                {/* commonHeader -End */}

                <Slider {...settings}>
                    {
                        CaseStudiesData.map((CaseStudiesInfo, index) =>
                            <div key={index} className='caseStudiesItem bg-white radius16 position-relative'>
                                <div className='itemInfo'>
                                    <div className=''>
                                        <div className='caseImg radius16 overflow-hidden position-relative'>
                                            <img className="img-fluid w-100" src={CaseStudiesInfo.img} alt='CaseStudies Img' />
                                            <Link to={`/caseDetails/${CaseStudiesInfo.id}`} className="categories bgOrange px-3 py-1 rounded-2 text-white fs-15 fw-semibold d-inline-block position-absolute">
                                                {CaseStudiesInfo?.categories}
                                            </Link>
                                        </div>
                                        <div className='personImg mx-4 rounded-circle position-relative'>
                                            <img src={CaseStudiesInfo.person} alt='personImg' className='img-fluid w-auto' />
                                        </div>
                                    </div>
                                    <div className='p-4'>
                                        <div className="caseHeader d-flex justify-content-between gap-1 gap-xl-3 align-items-center mb-4">
                                            <h3 className="Title fs-4 fw-bold textDark ff-rufina mb-0">
                                                {CaseStudiesInfo.title}
                                            </h3>
                                            <ul className="linkUrl list-unstyled mb-0 d-flex gap-3 align-items-center">
                                                <li className="linkItem">
                                                    <a href={CaseStudiesInfo?.webUrl} target="_blank" rel="noreferrer">
                                                        <img src={webIcon} alt='icon' className="img-fluid" />
                                                    </a>
                                                </li>
                                                <li className="linkItem">
                                                    <a href={CaseStudiesInfo?.insTaUrl} target="_blank" rel="noreferrer">
                                                        <img src={insTaIcon} alt='icon' className="img-fluid" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="testDecs mb-4 fs-6 fw-normal textGray">
                                            {CaseStudiesInfo.testDecs}
                                        </p>


                                        <Link to={`/caseDetails/${CaseStudiesInfo.id}`} className="btn isBg-btn textDark bgYellow radius2 bgYellow fs-6 fwSemiBold py-2 d-flex align-items-center gap-3 border-0 justify-content-center">
                                            Learn more
                                            <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.6095 3.05731L5.7475 0.195312L4.80483 1.13798L7.00016 3.33331H0.333496V4.66665H7.00016L4.80483 6.86198L5.7475 7.80465L8.6095 4.94265C8.85946 4.69261 8.99988 4.35353 8.99988 3.99998C8.99988 3.64643 8.85946 3.30735 8.6095 3.05731V3.05731Z" fill="#1A1A1C"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </section>
    );
};

export default CaseStudies;












// Class components markup functions below



// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './CaseStudies.scss';
// import { CaseStudiesData } from '../data/Data';
// import longArrowR from '../../assets/img/long-arrow-r.svg';
// import longArrowL from '../../assets/img/long-arrow-l.svg';
// import webIcon from '../../assets/img/webIcon.svg';
// import insTaIcon from '../../assets/img/instagram.svg';
// import { Link } from "react-router-dom";

// export default class caseStudies extends Component {
//     render() {


//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             nextArrow: <img src={longArrowR} alt='longArrowR' className='img-fluid' />,
//             prevArrow: <img src={longArrowL} alt='longArrowL' className='img-fluid' />,

//             responsive: [
//                 {
//                     breakpoint: 1200,
//                     settings: {
//                         slidesToShow: 3,
//                         slidesToScroll: 3,
//                         infinite: true,
//                         dots: true
//                     }
//                 },
//                 {
//                     breakpoint: 991,
//                     settings: {
//                         slidesToShow: 2,
//                         slidesToScroll: 2,
//                         initialSlide: 2
//                     }
//                 },
//                 {
//                     breakpoint: 667,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1
//                     }
//                 }
//             ]
//         };

//         return (
//             <section className='CaseStudies sectionPadding bg-white'>
//                 <div className="container">

//                     <div className='sectionHeader text-center mb-4'>
//                         <p className='secTag fs-13 textPink fw-bold bgPinkLight d-inline-block radius2 py-1 px-2 mb-4 text-uppercase lh-base'>
//                             Case Studies
//                         </p>
//                         <h2 className='secTitle fs-48 fw-bold ff-rufina textDark'>
//                             Featured Selfmade Members
//                         </h2>
//                         <p className='secIntro fs-6 fw-normal textGray'>
//                             Learn more about some of our entrepreneurs and how they built their business with Selfmade.
//                         </p>
//                     </div>

//                     <Slider {...settings}>
//                         {
//                             CaseStudiesData.map((CaseStudiesInfo, index) =>
//                                 <div key={index} className='caseStudiesItem bg-white radius16 position-relative d-flex flex-column justify-content-between'>
//                                     <div className='itemInfo'>
//                                         <div className=''>
//                                             <div className='caseImg overflow-hidden position-relative'>
//                                                 <img className="img-fluid" src={CaseStudiesInfo.img} alt='CaseStudies Img' />
//                                                 <Link to={`/caseDetails/${CaseStudiesInfo.id}`} className="categories bgOrange px-3 py-1 rounded-2 text-white fs-15 fw-semibold d-inline-block position-absolute">
//                                                     {CaseStudiesInfo?.categories}
//                                                 </Link>
//                                             </div>
//                                             <div className='personImg mx-4 rounded-circle position-relative'>
//                                                 <img src={CaseStudiesInfo.person} alt='personImg' className='img-fluid w-auto' />
//                                             </div>
//                                         </div>
//                                         <div className='p-4'>
//                                             <div className="caseHeader d-flex justify-content-between gap-3 flex-wrap align-items-center mb-4">
//                                                 <h3 className="Title fs-4 fw-bold textDark ff-rufina mb-0">
//                                                     {CaseStudiesInfo.title}
//                                                 </h3>
//                                                 <ul className="linkUrl list-unstyled mb-0 d-flex gap-3 align-items-center">
//                                                     <li className="linkItem">
//                                                         <a href={CaseStudiesInfo?.webUrl} target="_blank" rel="noreferrer">
//                                                             <img src={webIcon} alt='icon' className="img-fluid" />
//                                                         </a>
//                                                     </li>
//                                                     <li className="linkItem">
//                                                         <a href={CaseStudiesInfo?.insTaUrl} target="_blank" rel="noreferrer">
//                                                             <img src={insTaIcon} alt='icon' className="img-fluid" />
//                                                         </a>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                             <p className="testDecs mb-4 fs-6 fw-normal textGray">
//                                                 {CaseStudiesInfo.testDecs}
//                                             </p>
//                                             <Link to={`/caseDetails/${CaseStudiesInfo.id}`} className="btn isBg-btn textDark bgYellow radius2 bgYellow fs-6 fwSemiBold py-2 d-flex align-items-center gap-3 border-0 justify-content-center">
//                                                 Learn more
//                                                 <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.6095 3.05731L5.7475 0.195312L4.80483 1.13798L7.00016 3.33331H0.333496V4.66665H7.00016L4.80483 6.86198L5.7475 7.80465L8.6095 4.94265C8.85946 4.69261 8.99988 4.35353 8.99988 3.99998C8.99988 3.64643 8.85946 3.30735 8.6095 3.05731V3.05731Z" fill="#1A1A1C"></path></svg>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         }
//                     </Slider>
//                 </div>
//             </section>
//         );
//     };
// }





