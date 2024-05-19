import React from 'react';

const AboutSection = () => {
    return (
        <div className='bg-no-repeat bg-cover bg-center rounded-md ' style={{ backgroundImage: 'url(https://i.ibb.co/RbqGsmb/chef-service.jpg)' }}>
            <div className='md:py-28 md:px-36 bg-black bg-opacity-40 rounded-md'>
                <div className='h-96 bg-base-100 bg-opacity-90 flex flex-col justify-center items-center space-y-4 p-4 md:p-32 rounded-md shadow-md *:text-center'>
                    <h3 className="text-4xl">Bistro Boss</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;