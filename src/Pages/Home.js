import React from 'react';
import Banner from '../Components/banner/Banner';
import BannerBG from '../assets/img/banner-bg.png';
import HomeBannerImg from '../assets/img/banner-img.png'
import Brand from '../Components/brand/Brand';
import Features from '../Components/features/Features';
import Newsletter from '../Components/newsletter/Newsletter';
import About from '../Components/about/About';
import CallToAction from '../Components/callToAction/CallToAction';
import SimpleSlider from '../Components/testimonial/Testimonial';
import CeoVideos from '../Components/ceoVideos/CeoVideos';
import CaseStudies from '../Components/caseStudies/CaseStudies';
import CommonHeader from '../Components/commonHeader/CommonHeader';



const Home = () => {
    document.title = "Home";

    return (
        <div id='home'>

            {/* Banner data passing */}
            <Banner
                bannerBg={BannerBG}
                bannerTitle={'Make your dream business a money-making reality'}
                bannerIntro={"Selfmade is a unique, hands-on business membership for female founders. We provide the tools, resources, & community support that women need to start & grow their businesses.  Whether you're just getting started or you're ready to take your business to the next level, we help you succeed."}
                btnText1={"Start your free trial"}
                btnText2={"Not sure yet? Talk to an advisor"}
                bannerImg={HomeBannerImg}
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
            <Features
                SecHeader={
                    <CommonHeader
                        SectionTag='Features'
                        SectionTitle='Get unstuck and take action'
                        addClass={"text-center mb-5"}
                        tagClass={"d-inline-block"}
                    />
                }
            />
            <SimpleSlider
                BgColor={'bgOffWhite'}
                SecHeader={
                    <CommonHeader
                        SectionTag='Testimonial'
                        SectionTitle='Selfmade Makes a Difference'
                        addClass={"text-center pb-4 mb-0"}
                        tagClass={"d-inline-block"}
                    />
                }
            />
            <About
                SecHeader={
                    <CommonHeader
                        SectionTag='About us'
                        SectionTitle='Your Business Bestie'
                        SectionIntro2='Selfmade is a membership geared at giving women the tools, resources, community, and coaching they need to get started on their ventures. With us by your side, you can launch your business ideas or grow your existing business.'
                        tagClass={"d-inline-block"}
                        addClass={"mb-5"}
                    />
                }
            />
            <Newsletter
                SecHeader={
                    <CommonHeader
                        tagClass={"d-none"}
                        SectionTitle='Sign-up our newsletter and get the latest update'
                        addClass={"text-center w-50 mx-auto mb-5"}
                        secTitleColor={"text-white"}
                    />
                }
            />
            <CeoVideos
                SecHeader={
                    <CommonHeader
                        SectionTag='CEO Videos'
                        SectionTitle='Learn from the best'
                        SectionIntro='The world’s best CEOs go live with our members each month, plus you get a library full of on-demand videos to watch.'
                        addClass={"text-center w-50 mx-auto mb-5"}
                        tagClass={"d-inline-block"}
                    />
                }
            />
            <CaseStudies
                BgColor={'bg-white'}
                SecHeader={
                    <CommonHeader
                        SectionTag='Case Studies'
                        SectionTitle='Featured Selfmade Members'
                        SectionIntro='Learn more about some of our entrepreneurs and how they built their business with Selfmade.'
                        addClass={"text-center mb-5"}
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

export default Home;