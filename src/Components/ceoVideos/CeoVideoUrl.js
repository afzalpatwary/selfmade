import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import VideoModal from '../videoModal/VideoModal';
import videoIcon from '../../assets/img/videoIcon.svg';


const CeoVideoUrl = ({ url, time , videoThumb}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(url)

    return (
        <div>
            <div className='videoThumb radius radius12 overflow-hidden position-relative' onClick={handleShow}>
                <div className='videoThumbImg d-block overflow-hidden'>
                    <img src={videoThumb} alt='StarIcon' className='img-fluid w-100' />
                </div>

                <Button type='button' className='videoTime btn border-0 textOrange fs-14 fw-normal d-flex align-items-center gap-2 rounded position-absolute px-2 py-1'  >
                    <img src={videoIcon} alt='StarIcon' className='img-fluid w-auto' />
                    {time}
                </Button>

            </div>
            <VideoModal handleClose={handleClose} show={show} videoUrl={url} />
        </div>
    );
};

export default CeoVideoUrl;