import React from 'react';
import Banner from '../Components/banner/Banner';
import singUpBg from '../assets/img/singUpBg.png';
import singUpImg from '../assets/img/singUp-img.png'
import CommonHeader from '../Components/commonHeader/CommonHeader';
import CallToAction from '../Components/callToAction/CallToAction';
import ProductDetailFeature from '../Components/productDetailFeature/ProductDetailFeature';
import AdditionalFeaturesSlide from '../Components/additionalFeaturesSlide/AdditionalFeaturesSlide';

const ProductDetails = () => {

    document.title = "Product Details";
    
    return (
        <div className='ProductDetails'>
            <Banner
                bannerBg={singUpBg}
                bannerTitle={'Build your dream business with Selfmade.'}
                bannerIntro={"Get all the support you need to launch, grow, and scale a thriving business."}
                btnText1={"Start your free trial"}
                bannerImg={singUpImg}
                bannerRowClass={"align-items-center"}
            />

            <ProductDetailFeature />


            <AdditionalFeaturesSlide 
                BgColor={'bgOffWhite'}
                SecHeader={
                    <CommonHeader
                        SectionTag='Features'
                        SectionTitle='Additional features'
                        addClass={"text-center w-50 mx-auto mb-4"}
                        tagClass={"d-inline-block"}
                    />
                }
             />

            <CallToAction 
                SecHeader={
                    <CommonHeader
                        SectionTitle='Turn your ideas into reality with Selfmade'
                        SectionIntro={`Ipsum consectetur pretium nisi ipsum imperdiet sit.`}
                        addClass={"text-center w-50 mx-auto text-white mb-5"}
                        addIntroClass={"text-white px-5"}
                        tagClass={"d-none"}
                    />
                }
             />
        </div>
    );
};

export default ProductDetails;