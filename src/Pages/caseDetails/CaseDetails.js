
import React from 'react';
import { useParams } from 'react-router-dom';
import { CaseStudiesData } from '../../Components/data/Data';

const CaseDetails = () => {

    const { caseId } = useParams();

    const caseDetails = CaseStudiesData?.find(caseDetail => caseDetail.id === Number(caseId));


    return (
        <section className='DetailsWrapper sectionPadding bgBlue'>
            <div className='container'>
                <div className='contentDetails'>
                    <div className='featuredImg mb-4'>
                        <img src={caseDetails?.img} alt='img' />
                    </div>
                    <h4 className='text-white'>{caseDetails?.title}</h4>
                </div>
            </div>
        </section>
    );
};

export default CaseDetails;