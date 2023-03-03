import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import './Brand.scss';
import { brandLogo } from '../data/Data';


const Brand = ({ BgColor, SecHeader }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoplaySpeed: 1500,
        autoplay: false,
        cssEase: "linear",
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };


    return (
        <section className={`brandWrapper sectionPadding overflow-hidden brand ${BgColor}`}>
            <div className="container">

                {/* commonHeader */}

                {SecHeader}

                {/* commonHeader -End */}

                <Slider {...settings}>
                    {
                        brandLogo.map((logo, index) => <div key={index} className='singleBrand boxShadow bg-white p-4 d-flex align-items-center justify-content-center'>
                            <img src={logo.brandLogo} alt='brandLogo' className='img-fluid' />
                        </div>
                        )

                    }
                </Slider>
            </div>
        </section>
    );
}
export default Brand;
