import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Nav from '../Components/Navbar/Nav';
import Footer from '../Components/Footer/Footer';



const Root = () => {
    return (
       <div className=' mx-auto mt-4 '>
            <div className='max-w-6xl mx-auto p-4'>
                         <ScrollRestoration />
                 <Nav></Nav>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;