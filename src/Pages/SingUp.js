import React from 'react';
import Banner from '../Components/banner/Banner';
import singUpBg from '../assets/img/singUpBg.png';
import singUpImg from '../assets/img/singUp-img.png'
import Brand from '../Components/brand/Brand';
import CallToAction from '../Components/callToAction/CallToAction';
import SimpleSlider from '../Components/testimonial/Testimonial';
import CaseStudies from '../Components/caseStudies/CaseStudies';
import FeaturesStep from '../Components/featuresStep/FeaturesStep';
import ConnectionFeatures from '../Components/connectionFeatures/ConnectionFeatures';
import Pricing from '../Components/pricing/Pricing';
import CommonHeader from '../Components/commonHeader/CommonHeader';


const SingUp = () => {

    document.title = "Sing Up";

    return (
        <div id='signUp'>

            {/* Banner data passing */}
            <Banner
                bannerBg={singUpBg}
                bannerTitle={'Become a Selfmade founding member'}
                bannerIntro={"Building a business is tough, confusing, and lonely sometimes. We’re here to give you the clarity, skills, and deep connection you need every step of the way to get there!"}
                btnText1={"Start your free trial"}
                btnText2={"Not sure yet? Talk to an advisor"}
                bannerImg={singUpImg}
                bannerRowClass={"align-items-center"}
            />
            {/* Banner data passing -End */}

            <Brand 
                SecHeader={
                    <CommonHeader
                        SectionTag='Brand'
                        SectionTitle='Featured in'
                        addClass={"text-center mb-4"}
                        tagClass={"d-none"}
                    />
                }
             />
            <FeaturesStep 
                SecHeader={
                    <CommonHeader
                        SectionTitle='Selfmade keeps you connected'
                        addClass={"text-center w-50 mx-auto px-xl-5 mb-5"}
                        tagClass={"d-none"}
                    />
                }
             />
            <ConnectionFeatures 
                SecHeader={
                    <CommonHeader
                        SectionTitle='Connection features'
                        addClass={"text-center mb-5"}
                        tagClass={"d-none"}
                    />
                }
             />
            <Pricing />
            <CaseStudies
                BgColor={'bgOffWhite'}
                SecHeader={
                    <CommonHeader
                        SectionTag='Community'
                        SectionTitle='Meet our Founders'
                        SectionIntro="We're bringing together over 50 business experts to be YOUR Selfmade Squad. All Selfmade students get hands-on help for their business through on-demand lessons, weekly coaching, and community support. We've got your back - seriously!"
                        addClass={"text-center w-50 mx-auto mb-5"}
                        tagClass={"d-inline-block"}
                    />
                }
            />
            <SimpleSlider
                BgColor={'bg-white'}
                SecHeader={
                    <CommonHeader
                        SectionTag='Testimonial'
                        SectionTitle='What say’s people about us'
                        addClass={"text-center pb-4 mb-0"}
                        tagClass={"d-inline-block"}
                    />
                }
            />
            <CallToAction 
                SecHeader={
                    <CommonHeader
                        SectionTitle='Get started today'
                        SectionIntro={`Join Selfmade and accelerate your entrepreneurial journey.`}
                        addClass={"text-center w-50 mx-auto text-white mb-5"}
                        addIntroClass={"text-white px-5"}
                        tagClass={"d-none"}
                    />
                }
             />
        </div>
    );
};

export default SingUp;