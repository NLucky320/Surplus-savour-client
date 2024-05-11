import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "animate.css";


const AvailableItemsCard = ({item}) => {
   
      useEffect(() => {
    Aos.init({ duration: 700 });
      }, [])
    
    return (
           <div data-aos="fade-up">
      <div className="flex mx-auto flex-col lg:hover:scale-105 transition shadow-xl">
        <div className="relative">
          <img
            className="lg:h-64 md:h-64 rounded-t-lg w-full"
            src={item?.food_image}
            alt=""
          />
          <div className="animate__animated text-sm  py-2 px-3 rounded-3xl animate__slower animate__swing animate__infinite font-medium bg-[#f9a06f] border-[#f9a06f] text-black  absolute top-4 right-6 ">
            {item?.food_name}
          </div>
        </div>
        <div className="bg-black text-white rounded-b-lg px-2 py-4 lg:p-4">
          <div className="px-4 space-y-4">
            <h2 className="text-[#f9a06f] truncate max-w-[250px] text-xl font-semibold ">
              {item?.item_name}
                </h2>
                <div className="flex space-x-4">
		<img alt="" src={item?.donor?.photo} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="text-center items-center flex">
			<p className="text-sm font-semibold">{item?.donor?.name}</p>
		</div>
	</div>
            <div className="flex flex-col gap-2 ">
              <p className=" font-semibold truncate max-w-[250px] text-sm ">
                Food Quantity:{"  "}
                <span className=" font-normal">
                   {item?.food_quantity}
                </span>
              </p>
              <p className="font-semibold truncate max-w-[250px] text-sm">
              Pickup Location:{" "}
                <span className=" font-normal">
                  {item?.pickup_location}
                </span>
              </p>
              <div className=" flex items-center gap-1 font-semibold truncate max-w-[250px] text-sm">
                Expired Date:{" "}
                <div className="flex items-center gap-1">
                  
                  <span className=" font-normal">
                    {item?.expired_date}
                  </span>
                </div>
              </div>
            </div>
                        <div className="flex gap-2 items-center">
                            <p  className='font-semibold text-sm'>
                                    Notes:
                        </p>
              <p className=" font-semibold  truncate ">
                {item?.additional_notes}
              </p>
            </div>
            <div className="flex justify-center">
              <Link to={`/view-details/${item._id}`}>
                <button className="font-bold mt-8 animate__animated animate__pulse animate__infinite  rounded-md px-4 py-2 bg-[#f9a06f] text-[#1e1b4b] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000">
                  <span className="absolute bg-[#ffede2]  size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                  <span className="absolute bg-[#fac0a1] size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AvailableItemsCard;