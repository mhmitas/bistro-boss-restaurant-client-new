import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className=''>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} className='mb-8'>
                <div>
                    <img src="https://i.ibb.co/JdZGDRK/01.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/gmjnkM9/02.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/ZWKXL75/03.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/yPN1LR3/04.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/YjRDD9K/05.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/PrQKKJH/06.png" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;

/*
https://i.ibb.co/JdZGDRK/01.jpg
https://i.ibb.co/gmjnkM9/02.jpg
https://i.ibb.co/ZWKXL75/03.png
https://i.ibb.co/yPN1LR3/04.jpg
https://i.ibb.co/YjRDD9K/05.png
https://i.ibb.co/PrQKKJH/06.png
*/