import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../Components/Banner/Banner';
import FeaturedFoods from '../../Components/Featured Foods/FeaturedFoods';



const Home = () => {
    return (
        <div>
           <Helmet>
              <title>Artistic | Home</title>  
            </Helmet>
            <Banner></Banner> 
            <FeaturedFoods></FeaturedFoods>

        </div>
    );
};

export default Home;