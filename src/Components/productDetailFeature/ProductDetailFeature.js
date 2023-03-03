import React from 'react';
import { productDetailsData } from '../data/Data';
import CommonFeatureCard from '../commonFeature/CommonFeatureCard';




const ProductDetailFeature = ({ SecHeader }) => {


    return (
        <section className='featuresStep sectionPadding'>
            <div className="smallContainer mx-auto">

                {SecHeader}


                {
                    productDetailsData?.map((feature, index) =>
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
        </section>
    );
};

export default ProductDetailFeature;