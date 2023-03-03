import React from 'react';
import './featuresStep.scss';
import { featuresStepData } from '../data/Data';
import CommonFeatureCard from '../commonFeature/CommonFeatureCard';




const FeaturesStep = ({ SecHeader }) => {

    return (
        <section className='featuresStep sectionPadding'>
            <div className="container">


                {SecHeader}


                <div className="row">
                    <div className="col-lg-8 offset-lg-2">

                        {
                            featuresStepData?.map((feature, index) =>
                                <CommonFeatureCard key={index}
                                    title={feature?.title}
                                    colorClass={feature?.colorClass}
                                    decs={feature?.decs}
                                    shape={feature?.shape}
                                    img={feature?.img}
                                />
                            )
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesStep;