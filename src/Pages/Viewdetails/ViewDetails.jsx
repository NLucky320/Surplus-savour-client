
import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

import { Helmet } from "react-helmet-async";


const ViewDetails = () => {
 
    const foodsItem = useLoaderData();
    return (
         <div
      key={foodsItem._id}
      className="items-center max-w-xl mx-auto p-4 shadow-md mt-12 md:mt-[80px]"
    >
      {" "}
      <Helmet>
        <title> | Food-Details</title>
      </Helmet>
      <div className="flex space-x-4 pb-6">
        <img
          alt=""
          src={foodsItem?.photo}
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-sm font-semibold"
          >
            {foodsItem?.name}
          </a>
          <span className="text-xs dark:text-gray-600">{foodsItem?.email}</span>
        </div>
      </div>
      <div className="space-y-4 p-4">
        <div>
          <img
            src={foodsItem?.food_image}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold dark:text-violet-600">
            Food Name: {foodsItem?.food_name}
          </h3>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-bold dark:text-violet-600">
            Food Quantity: {foodsItem?.food_quantity}
          </h2>
        </div>
        <div className="space-y-2">
          <p className=" dark:text-violet-600">
           Expired Date: {foodsItem?.expired_date}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm dark:text-violet-600">
            Pickup Location: {foodsItem?.pickup_location}
          </p>
                </div>
                <div className="text-center">
                      <button className="font-bold animate__animated animate__pulse animate__infinite  rounded-md px-4 py-2 bg-[#f9a06f] text-[#1e1b4b] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000">
                  <span className="absolute bg-[#ffede2]  size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                  <span className="absolute bg-[#fac0a1] size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                  Request
                </button>
              </div>
            </div>
           
    </div>
    );
};

export default ViewDetails;