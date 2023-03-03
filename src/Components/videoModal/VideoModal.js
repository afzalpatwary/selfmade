import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './videoModal.scss';

const VideoModal = ({ show, handleClose , videoUrl }) => {


    return (
        <div>


            <Modal show={show} onHide={handleClose} centered size='xl'>
                <Modal.Body className='p-0 bg-transparent border-0'>
                    <iframe className="responsive-iframe bg-transparent border-0" width='100%' height='525px' src={videoUrl}></iframe>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default VideoModal;