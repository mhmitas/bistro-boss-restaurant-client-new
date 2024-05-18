import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/footer/Footer';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between relative'>
            <section>
                <Navbar></Navbar>
                <div className='max-w-screen-2xl mx-auto'>
                    <Outlet></Outlet>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Root;