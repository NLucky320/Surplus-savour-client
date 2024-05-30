import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../Components/Banner/Banner';
import FeaturedFoods from '../../Components/Featured Foods/FeaturedFoods';
import Testimonial from '../../Components/Testimonials/Testimonial';
import OurLocation from '../../Components/OurLocation/OurLocation';
import Faq from '../../Components/Faq/Faq';
import { useOutletContext } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';



const Home = () => {
    //  const [showFeaturedFoods, setShowFeaturedFoods] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    // const context = useOutletContext();
    // const showFeaturedFoodsFromFooter = context.showFeaturedFoods;

    // useEffect(() => {
    //     if (showFeaturedFoodsFromFooter) {
    //         setIsLoading(true);
    //         setTimeout(() => {
    //             setShowFeaturedFoods(true);
    //             setIsLoading(false);
    //         }, 1000); 
    //     }
    // }, [showFeaturedFoodsFromFooter]);



    return (
        <div>
           <Helmet>
              <title>Surplus Saver | Home</title>  
            </Helmet>
             {/* <div className='max-w-[1170px] mx-auto'>
                {!showFeaturedFoods && !showFeaturedFoodsFromFooter && <Banner />}
            </div>
            {isLoading ? (
                <Spinner />
            ) : (
                (showFeaturedFoods || showFeaturedFoodsFromFooter) && <FeaturedFoods />
            )} */}
            <div className='max-w-[1170px] mx-auto'>
                <Banner></Banner> 
            </div>
            <FeaturedFoods></FeaturedFoods> 
             <div className='max-w-[1170px] mx-auto'>
                <Testimonial></Testimonial>
                <Faq></Faq>
                <OurLocation></OurLocation>
          </div> 

        </div>
    );
};

export default Home;