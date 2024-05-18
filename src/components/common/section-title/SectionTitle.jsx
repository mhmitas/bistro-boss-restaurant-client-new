import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center my-4'>
            <h3 className='font-semibold text-3xl'>{heading}</h3>
            <h4 className='text-warning'>{subHeading}</h4>
        </div>
    );
};

export default SectionTitle;