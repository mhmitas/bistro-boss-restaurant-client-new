import React from 'react';
import SectionTitle from '../../../components/common/section-title/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'

const FeaturedSection = () => {

    return (
        <div className='bg-cover text-slate-50  bg-fixed' style={{ backgroundImage: `url(${featuredImg})` }}>
            <div className='bg-black bg-opacity-45'>
                <div className='pt-10'>
                    <SectionTitle heading="Featured Item" subHeading="Check it out"></SectionTitle>
                </div>
                <div className='flex justify-center items-center md:flex-col lg:flex-row p-4 pb-8 md:pt-12 md:pb-20 md:px-36'>
                    <div className='hidden md:block'>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className='flex flex-col space-y-6 md:ml-10'>
                        <p>May 17th 2024</p>
                        <p className='uppercase'>Where can i get some</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit vitae praesentium assumenda placeat necessitatibus recusandae voluptates, non quidem eius minima optio porro hic repudiandae. Quas suscipit numquam aut rem rerum architecto dolorem temporibus sapiente corrupti, dignissimos asperiores! Dolores cum impedit eaque! Laudantium recusandae sint et excepturi accusamus delectus, saepe voluptate.</p>
                        <button className='btn btn-warning btn-outline w-max border-0 border-b-2 font-bold btn-sm rounded-sm'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSection;