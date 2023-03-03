
import { dataCeoSlider } from '../data/Data';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './CeoVideos.scss';

import CeoVideoUrl from './CeoVideoUrl';



const ceoSlider = { duration: 16000, easing: (t) => t }

const CeoVideos = ({SecHeader}) => {



    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: true,
        dragSpeed: false,
        perView: 4,
        slides: {
            perView: 4,
            spacing: 25,
        },
        created(s) {
            s.moveToIdx(4, true, ceoSlider)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, ceoSlider)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, ceoSlider)
        },
        breakpoints: {
            '(max-width:1200px)': {
                slides: {
                    perView: 2,
                    spacing: 25,
                },
            },
            '(max-width: 575px)': {
                slides: {
                    perView: 1,
                    spacing: 25,
                },
            },
        },
    })
    return (
        <section ref={sliderRef} className="ceoSlider sectionPadding keen-slider">
            <div className="container">

               

            {SecHeader}

                <div ref={sliderRef} className="ceoSlider keen-slider">
                    {
                        dataCeoSlider.map((ceoSlideInfo, index) =>
                            <div key={index} className="ceoSlideItem keen-slider__slide number-slide1 radius12 p-3 bg-white text-decoration-none">
                            

                                    <CeoVideoUrl time={ceoSlideInfo.videoTime} url={ceoSlideInfo.videoUrl} videoThumb={ceoSlideInfo.videoThumb} />

                                <div className="info-content p-3">
                                    {console.log(ceoSlideInfo.tag)}
                                    <ul className='list-unstyled mb-0 d-flex align-items-center gap-2 flex-wrap py-3'>
                                        {
                                            ceoSlideInfo.tag.map((item, index) => (
                                                <li className='' key={2 + index}>
                                                    <a href='#' className='tag bgBlue fw-semi-bold text-white px-3 py-1 rounded d-inline-block'>{item}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <h3 className='item-title fs-4 fw-bold textDark ff-rufina mb-4'><a className='textDark' href='#'>{ceoSlideInfo.title}</a></h3>
                                    <div className="author d-flex gap-3 align-items-center">
                                        <a href='#' className='userIcon d-block rounded-circle text-center'><img src={ceoSlideInfo.userIcons} /></a>
                                        <div className='name-designation'>
                                            <h4 className='fs-18 textDark fw-normal mb-0'> <a className='textDark' href='#'>{ceoSlideInfo.userName}</a> </h4>
                                            <p className='fs-14 fw-normal textGray mb-0'>{ceoSlideInfo.userDesignation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>

        </section>
    )

};
export default CeoVideos;