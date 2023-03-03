import React from 'react';

const CommonHeader = ({SectionTag, SectionTitle, SectionIntro, SectionIntro2, addClass, tagClass, secTitleColor, addIntroClass}) => {
    return (
        <div className={`sectionHeader ${addClass}`}>
            <p className={`secTag fs-13 textPink fw-bold bgPinkLight radius2 py-1 px-2 mb-4 text-uppercase lh-base ${tagClass}`}>
                {SectionTag}
            </p>
            <h2 className={`secTitle fs-48 fw-bold ff-rufina mb-4 ${secTitleColor}`}>
                {SectionTitle}
            </h2>
            <p className={`secIntro fs-6 fw-normal textGray ${addIntroClass}`}>
                {SectionIntro}
            </p>
            <p className='secIntro2 fs-18 fw-normal textGray'>
                {SectionIntro2}
            </p>
        </div>
    );
};

export default CommonHeader;