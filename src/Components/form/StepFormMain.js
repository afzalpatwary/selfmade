import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import FinalStep from './FinalStep';
import './FormStyle.scss'
import StepFour from './StepFour';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

const StepFormMain = () => {

    const [stepNumber, setStepNumber] = useState(1);

    // const backBtn = () => {
    //     let step = stepNumber;
    //     setStepNumber(step - 1);
    // };

    const nextBtn = () => {
        let step = stepNumber;
        setStepNumber(step + 1);
    };

    const steps = [
        {
            step: 1,
            title: "Description",
        },
        {
            step: 2,
            title: "Category",
        },
        {
            step: 3,
            title: "Location",
        },
        {
            step: 4,
            title: "Date, Time and Costs",
        }
    ];


    // const [formData, setFormData] = useState({
    //     fullName : '',
    //     email : '',
    //     password : '',
    //     rePassword : '',
    //     subsCription : '',
    //     journey : '',
    //     industry : '',
    //     interest : '',
    //     policy : '',
    // });

    return (
        <section className='form stepFormMain'>
            <div className='pageWrapper'>
                <div className='formInfo'>

                    <div className='formStepParent my-5'>
                        <div className='formSteps'>
                            <ul className='stepList d-flex justify-content-between list-unstyled mb-0'>
                                {steps.map(item =>
                                    <li className={`singleSteps ${item.step === stepNumber && "stepRunning"
                                        } ${item.step < stepNumber && "stepCompleted"}`}
                                    >
                                        <span className='stepNumber'>{item.step}</span>
                                        <span className='runningStepLine'></span>
                                    </li>
                                )

                                }
                                {/* <li className='singleSteps stepRunning stepCompleted'>
                                    <span className='stepNumber'>2</span>
                                    <span className='runningStepLine'></span>
                                </li>
                                <li className='singleSteps'>
                                    <span className='stepNumber'>3</span>
                                    <span className='runningStepLine'></span>
                                </li>
                                <li className='singleSteps'>
                                    <span className='stepNumber'>4</span>
                                    <span className='runningStepLine'></span>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    <form onFormSubmit='onFormSubmit'>
                        {stepNumber === 1 && (<StepOne nextBtn={nextBtn} />)}
                        {stepNumber === 2 && (<StepTwo nextBtn={nextBtn} />)}

                        {stepNumber === 3 && (<StepThree nextBtn={nextBtn} />)}

                        {stepNumber === 4 && (<StepFour nextBtn={nextBtn} />)}

                        {stepNumber > 4 && (<FinalStep nextBtn={nextBtn} />)}
                        {/* <FinalStep /> */}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default StepFormMain;