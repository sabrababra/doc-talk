import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='bg-[#EFEFEF] text-font'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;