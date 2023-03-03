import { useEffect } from "react";
import { gsap } from "gsap";

const useGsap = () => {


    // gSap
    useEffect(() => {
        let ani1 = gsap.context(() => {
            gsap.from(".downAnimate", {
                opacity: 0,
                y: -100,
                ease: "power3",
                duration: 2
            });
        });

        return () => ani1.revert();
    }, []);



    useEffect(() => {
        let ani2 = gsap.context(() => {
            gsap.from(".upAnimate", {
                ease: "power4.out",
                delay: 1,
                skewY: 7,
                stagger: {
                    amount: 0.3
                }
            });
        });

        return () => ani2();
    }, []);

};

export default useGsap;
