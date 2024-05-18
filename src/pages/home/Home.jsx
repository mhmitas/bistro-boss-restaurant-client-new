import React from 'react';
import Banner from './banner/Banner';
import MenuItems from './menuItems/MenuItems';
import AboutSection from './about/AboutSection';
import useMenu from '../../components/hooks/useMenu';
import PopularMenu from './popular-menu/PopularMenu';
import FeaturedSection from './featured/FeaturedSection';


const Home = () => {
    useMenu('popular')
    return (
        <div className='*:mb-16'>
            <Banner></Banner>
            <MenuItems></MenuItems>
            <AboutSection></AboutSection>
            <PopularMenu></PopularMenu>
            <FeaturedSection></FeaturedSection>
        </div>
    );
};

export default Home;