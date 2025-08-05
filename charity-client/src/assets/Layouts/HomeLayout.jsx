import React from 'react';
import Nav from '../SharedPages/Nav';
import { Outlet } from 'react-router';
import Footer from '../SharedPages/Footer';

const HomeLayout = () => {
    return (
        <div className='bg-[#F5F5F0] flex flex-col min-h-screen' >
           <Nav></Nav>
           <div className='flex-1'>
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default HomeLayout;