import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import menuImg2 from '../../../assets/menu/dessert-bg.jpeg'
import menuImg3 from '../../../assets/menu/pizza-bg.jpg'
import menuImg4 from '../../../assets/menu/salad-bg.jpg'
import menuImg5 from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from '../../../components/common/section-title/SectionTitle';

const MenuItems = () => {
    return (
        <div className=''>
            <SectionTitle heading="Order Online" subHeading="From 11:00am to 12:00 pm"></SectionTitle>
            <div className='rounded-xl shadow-xl text-slate-50 p-2 md:p-4 bg-base-100' >

                <Swiper
                    className='h-32 md:h-64 lg:h-[400px] md:rounded-md rounded-sm'
                    slidesPerView={3}
                    // loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                >
                    <SwiperSlide
                        className='bg-cover bg-no-repeat bg-center md:rounded-md rounded-sm'
                        style={{ backgroundImage: `url(${menuImg2})` }}
                    >
                    </SwiperSlide>
                    <SwiperSlide
                        className='bg-cover bg-no-repeat bg-center md:rounded-md rounded-sm'
                        style={{ backgroundImage: `url(${menuImg3})` }}
                    >
                    </SwiperSlide>
                    <SwiperSlide
                        className='bg-cover bg-no-repeat bg-center md:rounded-md rounded-sm'
                        style={{ backgroundImage: `url(${menuImg4})` }}
                    >
                    </SwiperSlide>
                    <SwiperSlide
                        className='bg-cover bg-no-repeat bg-center md:rounded-md rounded-sm'
                        style={{ backgroundImage: `url(${menuImg5})` }}
                    >
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default MenuItems;