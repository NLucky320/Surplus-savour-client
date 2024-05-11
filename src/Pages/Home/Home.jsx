import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../Components/Banner/Banner';
import FeaturedFoods from '../../Components/Featured Foods/FeaturedFoods';
import Testimonial from '../../Components/Testimonials/Testimonial';
import OurLocation from '../../Components/OurLocation/OurLocation';



const Home = () => {

    return (
        <div>
           <Helmet>
              <title>Surplus Saver | Home</title>  
            </Helmet>
            <div className='max-w-[1170px] mx-auto'>
                <Banner></Banner> 
            </div>
            <FeaturedFoods></FeaturedFoods>
            <div className='max-w-[1170px] mx-auto'>
                <Testimonial></Testimonial>
                <OurLocation></OurLocation>
          </div>

        </div>
    );
};

export default Home;