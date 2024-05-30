import React from 'react';
import food from '../../assets/Banner/images (1).jpeg';

const AboutUs = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-80 max-w-[1170px] mx-auto md:mt-[80px] mt-12">
      <div className="relative  w-full h-[700px] flex items-center justify-center">
        <img src={food} alt="Food" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative text-center text-neutral-content">
          <div className="max-w-md mx-auto">
            <h1 className="mb-5 text-5xl font-bold">About</h1>
            <p className="mb-5">A secure and convenient way for businesses to connect with frontline charities and community groups to streamline surplus food donations</p>
            <button className="ml-3 md:ml-8 px-8 py-3 bg-[#f9a06f] text-white rounded mt-4">Get Started</button>
          </div>
        </div>
          </div>
          <div className=''>
                 <div className='
          pt-8 space-y-2'>
              <p className='text-xl py-4'>
                  Surplus food is food that is still fit for human consumption but does not reach consumers for various reasons such as mislabelling, over-production or over-accumulation, short shelf-life, or being the wrong size or shape.
              </p>
              <h3 className='text-2xl font-bold'>
                  THE SIMPLE SOLUTION FOR FEEDING MORE AND WASTING LESS
              </h3>
              <p className='text-xl'>
                 <span className='text-[#f9a06f]'> Surplus Saver</span> offers a secure and convenient way for food businesses to connect with frontline charities and community groups to streamline surplus food donations.</p>
              <p className='text-xl'>
                  Once a food donor is registered, and a charity has set up their preferences, there are three simple steps: the food donor posts details of surplus food items at the end of each day, with their location; charities and community groups receive a notification telling them about items of interest; the charity arranges to collect the food, directly from the donor and free of charge. If the food is suitable for composting or growing projects, then these groups will also be alerted.
              </p>



              <p className='text-xl'>
                  Donors have the option of posting donations on both regular and one-time basis, as well as to choose from a wide array of   <span className='text-[#f9a06f]'> Surplus Saver</span> recipients.</p>
<p className='text-xl'>
Matches are based on donors’ and recipient organisations’ profiles, including the type and quantity of food they donate or need, proximity, and timing. And the match happens in real-time.
              </p>
          </div>
          <div className='
          pt-8 space-y-2'>
           
              <h3 className='text-2xl font-bold'>
                  SURPLUS FOOD MANAGEMENT AGAINST FOOD WASTE
              </h3>
              <p className='text-xl'>
               The Platform is a home to a network of charities and communities in need of nutritious, high-quality food. We do this at scale building more connections for more people in more communities, more easily.The best part? FoodSHare allows for full transparency around food surplus and the communities it’s helping. We offer a simple, flexible service with charity vetting and ongoing support. Charities have the power to access food donations and support at no charge, either to redistribute in food parcels or cook on-site (depending on the type and quantity of surplus)..</p>
         
          </div>
          <div className='
          pt-8 space-y-2'>
           
              <h3 className='text-2xl font-bold '>
                Too Good To Go is a social impact company on a mission to inspire and empower everyone to fight food waste together.
              </h3>
              <p className='text-xl'>
           Our app is the world's largest marketplace for surplus food. We help users rescue good food from going to waste, offering great value for money at local stores, cafes and restaurants.</p>
         
          </div>
       </div>
    </section>
  );
};

export default AboutUs;
