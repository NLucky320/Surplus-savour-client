import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Bounce } from "react-awesome-reveal";

const Testimonial = () => {
    useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
    return (
         <div data-aos="fade-up" className="mt-4 lg:mt-12">
      <h2 className="text-center text-2xl lg:mb-6 lg:text-4xl font-bold dark:text-[#f9a06f] text-black">
        <Bounce>Testimonials</Bounce>
      </h2>
            <div className="mt-4 md:mt-8">
                <Marquee>
        <Link className="mr-2 text-black" to="/">
          <div className="p-4 w-96 ">
            <div className="h-full bg-[#f9a06f] p-8 shadow-lg rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-white mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
            As a volunteer, I've witnessed firsthand the impact of the platform in connecting donors with recipients. It's inspiring to see our community come together to tackle food waste and fight hunger.
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAtdCRf_mGFea-5kQG7J8tcahbpjUotyls2KG3pKzJOZVpNFEpKYbShfwELrIZlF23_c&usqp=CAU'
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900 dark:text-white">
                    Emily
                  </span>
                  <span className="text-white text-sm dark:text-gray-200">
                Volunteer Coordinator
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link className="mr-2 text-black" to="/">
          <div className="p-4 w-96 ">
            <div className="h-full bg-[#f9a06f] p-8 shadow-lg rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-white mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
               Our grassroots organization has been working tirelessly to address food insecurity in our city, and the Community Food Sharing platform has been an invaluable tool in our efforts
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900 dark:text-white">
                    David
                  </span>
                  <span className="text-white text-sm dark:text-gray-200">
                    Community Organizer</span>
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link className="mr-2 text-black" to="/">
          <div className="p-4 w-96 ">
            <div className="h-full bg-[#f9a06f] p-8 shadow-lg rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-white mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
         I've been able to redirect surplus food from my restaurant to those in need through the platform. It's fulfilling to know that even our excess meals can make a difference in someone's life.
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900 dark:text-white">
                    Mark
                  </span>
                  <span className="text-white text-sm dark:text-gray-200">
                  Restaurant Owner
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link className="mr-2 text-black" to="/">
          <div className="p-4 w-96 ">
            <div className="h-full bg-[#f9a06f] p-8 shadow-lg rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-white mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
    The Food Sharing platform has been instrumental in helping me redirect surplus baked goods to those who need them most. it feel good to know that my pastries are going to people in need.
                  </p>
                 
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaANZvyIP4nqAO-6xnzLnKvM-pkpPye-ainDCiF95UgLsGrdUQ-25u2DqFnxMK4QCvitk&usqp=CAU"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900 dark:text-white">
                 Maria
                  </span>
                  <span className="text-white text-sm dark:text-gray-200">
          Small Business Owner
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link className="mr-2 text-black" to="/">
          <div className="p-4 w-96 ">
            <div className="h-full bg-[#f9a06f] p-8 shadow-lg rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-white mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                Thanks to the platform, I've connected with local donors and received fresh food, easing financial burden. It's heartwarming to see neighbors coming together to reduce food waste.
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaANZvyIP4nqAO-6xnzLnKvM-pkpPye-ainDCiF95UgLsGrdUQ-25u2DqFnxMK4QCvitk&usqp=CAU"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900 dark:text-white">
                   Linda
                  </span>
                  <span className="text-white text-sm dark:text-gray-200">
                    Recipient
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </Marquee>
      </div>
    </div>
    );
};

export default Testimonial;