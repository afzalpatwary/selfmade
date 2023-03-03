import React from 'react';
import './connectionFeatures.scss';
import { ConnectionFeaturesData } from '../data/Data';


const ConnectionFeatures = ({SecHeader}) => {
    return (
        <section className='ConnectionFeatures sectionPadding'>
            <div className='container'>


              {SecHeader}


                <div className='row'>

                    {
                        ConnectionFeaturesData.map((ConnectionFeatures, index) =>
                            <div className='col-xl-4 col-sm-6'>
                                <div className='singleConnection p-4 radius16 bg-white mb-4'>
                                    <div className='icon mb-3'>
                                        <img className="img-fluid" src={ConnectionFeatures.icon} alt='Img' />
                                    </div>
                                    <h3 className='fs-30 fw-bold textDark ff-rufina mb-4'>
                                       {ConnectionFeatures.title}
                                    </h3>
                                    <p className='fs-6 fw-normal textGray mb-0'>
                                       {ConnectionFeatures.decs}
                                    </p>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default ConnectionFeatures;