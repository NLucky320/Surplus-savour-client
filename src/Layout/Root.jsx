import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Nav from '../Components/Navbar/Nav';
import Footer from '../Components/Footer/Footer';



const Root = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const showFeaturedFoods = queryParams.get('showFeaturedFoods') === 'true';
    return (
       <div className=' mx-auto mt-4 '>
            <div className='mx-auto'>
                         <ScrollRestoration />
                <div className='max-w-[1170px] mx-auto' >
                        <Nav></Nav>
             </div>
          <Outlet context={{ showFeaturedFoods }} />
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;