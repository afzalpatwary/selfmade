// import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.scss';
import { TestimonialData } from '../data/Data';
import StarIcon from '../../assets/img/star.svg';
import QuoteIcon from '../../assets/img/quote-icon.svg';
import longArrowR from '../../assets/img/long-arrow-r.svg';
import longArrowL from '../../assets/img/long-arrow-l.svg';
import { useLocation } from "react-router-dom";


const Testimonial = ({ BgColor, SecHeader }) => {

    const { pathname } = useLocation();


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
                    dots: true
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
        <section className={`testimonials sectionPadding overflow-hidden ${BgColor} ${(pathname === '/testimonial') && 'pt-200 bgOffWhite'}`}>
            <div className="container">
                {/* commonHeader */}

                {SecHeader}

                {/* commonHeader -End */}
                <Slider {...settings}>
                    {
                        TestimonialData.map((personInfo, index) =>
                            <div key={index} className='testimonialItem text-center bg-white px-3 px-md-4 px-xl-5 radius16 position-relative d-flex flex-column justify-content-between'>
                                <div className='reviewTop'>
                                    <div className='personImg mx-auto d-flex justify-content-center align-items-center rounded-circle mb-4'>
                                        <img src={personInfo.person} alt='personImg' className='img-fluid w-auto' />
                                    </div>
                                    <h3 className="testimonialTitle fs-4 fw-bold textDark ff-rufina mb-4">
                                        {personInfo.testimonialTitle}
                                    </h3>
                                    <p className="testDecs mb-5 fs-6 fw-normal textGray">
                                        {personInfo.testDecs}
                                    </p>
                                </div>
                                <div className='reviewBottom pb-2'>
                                    <div className='ratting d-flex gap-2 justify-content-center mb-3'>
                                        <span>
                                            <img src={StarIcon} alt='StarIcon' className='img-fluid' />
                                        </span>
                                        <span>
                                            <img src={StarIcon} alt='StarIcon' className='img-fluid' />
                                        </span>
                                        <span>
                                            <img src={StarIcon} alt='StarIcon' className='img-fluid' />
                                        </span>
                                        <span>
                                            <img src={StarIcon} alt='StarIcon' className='img-fluid' />
                                        </span>
                                        <span>
                                            <img src={StarIcon} alt='StarIcon' className='img-fluid' />
                                        </span>
                                    </div>
                                    <div className="name fs-4 fw-bold ff-rufina mb-2">
                                        <p>
                                            {personInfo.personName}
                                        </p>
                                    </div>
                                    <div className="date fs-6 textGray fw-normal pb-4">
                                        <p>
                                            {personInfo.fall}
                                        </p>
                                    </div>
                                    <span className="QuoteIcon position-absolute d-flex justify-content-center align-items-center rounded-circle">
                                        <img src={QuoteIcon} alt='QuoteIcon' className='img-fluid' />
                                    </span>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;














// Class components markup functions below





// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './Testimonial.scss';
// import { TestimonialData } from '../data/Data';
// import StarIcon from '../../assets/img/star.svg';
// import QuoteIcon from '../../assets/img/quote-icon.svg';
// import longArrowR from '../../assets/img/long-arrow-r.svg';
// import longArrowL from '../../assets/img/long-arrow-l.svg';

// export default class testimonials extends Component {
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
//             <section className="testimonials sectionPadding overflow-hidden">
//                 <div className="container">

//                     <div className='sectionHeader text-center mb-5'>
//                         <p className='secTag fs-13 textPink fw-bold bgPinkLight d-inline-block radius2 py-1 px-2 mb-4 text-uppercase lh-base'>
//                             Testimonial
//                         </p>
//                         <h2 className='secTitle fs-48 fw-bold ff-rufina textDark'>
//                             Selfmade Makes a Difference
//                         </h2>
//                     </div>

//                     <Slider {...settings}>
//                         {
//                             TestimonialData.map((personInfo, index) =>
//                                 <div key={index} className='testimonialItem text-center bg-white px-3 px-md-4 px-xl-5 radius16 position-relative d-flex flex-column justify-content-between'>
//                                     <div className='reviewTop'>
//                                         <div className='personImg mx-auto d-flex justify-content-center align-items-center rounded-circle mb-4'>
//                                             <img src={personInfo.person} alt='personImg' className='img-fluid w-auto' />
//                                         </div>
//                                         <h3 className="testimonialTitle fs-4 fw-bold textDark ff-rufina mb-4">
//                                             {personInfo.testimonialTitle}
//                                         </h3>
//                                         <p className="testDecs mb-5 fs-6 fw-normal textGray">
//                                             {personInfo.testDecs}
//                                         </p>
//                                     </div>
//                                     <div className='reviewBottom pb-2'>
//                                         <div className='ratting d-flex gap-2 justify-content-center mb-3'>
//                                             <span>
//                                                 <img src={StarIcon} alt='StarIcon' className='img-fluid' />
//                                             </span>
//                                             <span>
//                                                 <img src={StarIcon} alt='StarIcon' className='img-fluid' />
//                                             </span>
//                                             <span>
//                                                 <img src={StarIcon} alt='StarIcon' className='img-fluid' />
//                                             </span>
//                                             <span>
//                                                 <img src={StarIcon} alt='StarIcon' className='img-fluid' />
//                                             </span>
//                                             <span>
//                                                 <img src={StarIcon} alt='StarIcon' className='img-fluid' />
//                                             </span>
//                                         </div>
//                                         <div className="name fs-4 fw-bold ff-rufina mb-2">
//                                             <p>
//                                                 {personInfo.personName}
//                                             </p>
//                                         </div>
//                                         <div className="date fs-6 textGray fw-normal pb-4">
//                                             <p>
//                                                 {personInfo.fall}
//                                             </p>
//                                         </div>
//                                         <span className="QuoteIcon position-absolute d-flex justify-content-center align-items-center rounded-circle">
//                                             <img src={QuoteIcon} alt='QuoteIcon' className='img-fluid' />
//                                         </span>
//                                     </div>
//                                 </div>
//                             )
//                         }
//                     </Slider>
//                 </div>
//             </section>
//         );
//     }
// }




