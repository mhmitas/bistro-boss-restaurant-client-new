import React from 'react';


const MenuCover = ({ image, title, description }) => {
    return (
        <>
            <div className='bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: `url(${image})` }}>
                <div className='md:py-28 md:px-36 rounded-md'>
                    <div className='h-80 flex flex-col justify-center items-center space-y-2 p-4 md:p-16 lg:p-32 md:rounded-md shadow-md *:text-center bg-black bg-opacity-50 text-neutral-50'>
                        <h3 className="text-4xl uppercase font-semibold">{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuCover;