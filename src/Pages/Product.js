import React from 'react';
import Banner from '../Components/banner/Banner';
import BannerBG from '../assets/img/banner-bg.png';
import SignupBannerImg from '../assets/img/signup-banner-img.png';



const Product = () => {

    document.title = "Product";
    
    return (
        <div>
            <Banner bannerTitle={"giesiofgsdiohfoishaiof"} bannerBg={BannerBG} bannerImg={SignupBannerImg}  bannerRowclassName={"align-items-end"}/>
        </div>
    );
};

export default Product;