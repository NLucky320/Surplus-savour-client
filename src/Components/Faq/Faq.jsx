

import faq from "../../assets/faq.json";
import Lottie from "lottie-react";
import { Bounce } from "react-awesome-reveal";

const Faq = () => {
  return (
    <div className="mt-8 lg:mt-28">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
    
      <h2 className="text-center text-2xl lg:mb-6 lg:text-4xl font-bold dark:text-[#f9a06f] text-black">
        <Bounce>Frequently Asked Questions</Bounce>
          </h2>
        
        <div className="flex flex-col-reverse lg:flex-row gap-8 p-4">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-[#f9a06f]">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What is Surplus Saver?
              </div>
              <div className="collapse-content">
                <p>  Surplus Saver is an online platform designed to facilitate the sharing of surplus homemade or store-bought food items within communities, aiming to reduce food waste and foster connections among users.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-[#f9a06f]">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
             How does Surplus Saver work?
              </div>
              <div className="collapse-content">
               <p>
               Users can sign up and either offer surplus food they have, or request food from others. They can browse listings, communicate with other users, arrange pickups or deliveries, and leave feedback based on their experiences.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-[#f9a06f]">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
            What types of food can be shared on Surplus Saver?
              </div>
              <div className="collapse-content">
                <p>        
   Users can share a wide range of food items, including homemade dishes, baked goods, fresh produce, and surplus items from grocery shopping. The platform may have guidelines to ensure the quality and safety of shared food.</p>
              </div>
            </div>
          </div>
          <div className="w-[300px] md:w-[350px] mx-auto">
            <Lottie animationData={faq} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;