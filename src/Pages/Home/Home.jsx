import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../Components/Banner/Banner';
import FeaturedFoods from '../../Components/Featured Foods/FeaturedFoods';
import Testimonial from '../../Components/Testimonials/Testimonial';



const Home = () => {

    return (
        <div>
           <Helmet>
              <title>Surplus Saver | Home</title>  
            </Helmet>
            <Banner></Banner> 
            <FeaturedFoods></FeaturedFoods>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;