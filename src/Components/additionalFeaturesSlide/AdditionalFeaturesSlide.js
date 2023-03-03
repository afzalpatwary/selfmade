import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AdditionalFeaturesSlide.scss';
import { additionalFeaturesSlideData } from '../data/Data';
import longArrowR from '../../assets/img/long-arrow-r.svg';
import longArrowL from '../../assets/img/long-arrow-l.svg';


const AdditionalFeaturesSlide = ({ BgColor, SecHeader }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1500,
        autoplaySpeed: 1500,
        autoplay: false,
        cssEase: "linear",
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
        <section className={`additionalFeaturesSlide sectionPadding overflow-hidden ${BgColor}`}>
            <div className="container">

                {/* commonHeader */}

                {SecHeader}

                {/* commonHeader -End */}


            </div>

            <Slider {...settings}>
                {
                    additionalFeaturesSlideData.map((slideInfo, index) =>
                        <div key={index} className='additionalFeaturesItem bg-white p-4 radius16 h-100'>
                            <div className='slideInfo'>
                                <div className='icon mb-4'>
                                    <img src={slideInfo.icon} alt='personImg' className='img-fluid w-auto' />
                                </div>
                                <h3 className="title fs-4 fw-bold textDark ff-rufina mb-4">
                                    {slideInfo.title}
                                </h3>
                                <p className="decs mb-5 fs-6 fw-normal textGray">
                                    {slideInfo.decs}
                                </p>
                            </div>
                        </div>
                    )
                }
            </Slider>
        </section>
    );
};

export default AdditionalFeaturesSlide;