import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/common/section-title/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';


const TestimonialsSection = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])

    return (
        <section className=''>
            <SectionTitle heading={"Testimonials"} subHeading={"What Our Client Said"}></SectionTitle>
            <div className='rounded-md shadow-md text-slate-50 p-2 md:p-4 bg-gradient-to-r from-violet-200 to-fuchsia-200' >

                <Swiper
                    className='mySwiper'
                    navigation={true}
                    modules={[Pagination, Navigation]}
                >
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className='flex flex-col items-center mx-24 my-16 text-neutral-800'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <div><FaQuoteLeft className='text-6xl mb-2 mt-6' /></div>
                                <p className='py-6 text-center'>{review.details}</p>
                                <h3 className='text-2xl text-warning'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                    <SwiperSlide> </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialsSection;