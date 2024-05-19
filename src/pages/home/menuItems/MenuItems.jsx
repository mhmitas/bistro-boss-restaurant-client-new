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
                {/* small er uporer gulote hidden */}
                <div className=''>
                    <Swiper
                        className='h-64 sm:h-[400px] md:rounded-md rounded-sm '
                        slidesPerView={2}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            // when window width is >= 768px
                            // 768: {
                            //     slidesPerView: 3,
                            // },
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 4,
                            },
                            // when window width is >= 1280px
                            // 1280: {
                            //     slidesPerView: 4,
                            // },
                        }}
                        // loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={10}
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
        </div>
    );
};

export default MenuItems;