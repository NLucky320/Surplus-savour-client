import heroImg1 from "../../assets/Banner/food1.jpeg";
import heroImg2 from "../../assets/Banner/food4.jpeg";
import heroImg3 from "../../assets/Banner/food3.jpeg";
import { AiFillFire } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";

import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className="gadgetContainer">
      <Swiper
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {/* slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:h-[450px] mt-10">
            <div className="flex flex-col justify-center">
              <div className="font-semibold flex items-center justify-center lg:justify-start text-[#f9a06f] mb-3 text-center lg:text-left">
                <div className="bg-[#f9a06f] text-white mr-2 text-xl px-1 py-1 rounded-full">
                  <AiFillFire />
                </div>
                 Featured Dishes
              </div>

              <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center lg:text-left">
               Join the movement that brings <br /> communitie {''}
                <span style={{ color: "#f9a06f", fontWeight: "bold" }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={["Together", "Collective"]}
                    loop={0} 
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={40}
                    delaySpeed={1000}
                  />
                </span>
              </p>
              <p className="font-medium text-black/60 dark:text-white md:text-lg text-center lg:text-left">
               PlateShare is your platform for sharing homemade meals, reducing food waste.
              </p>
              <div className="flex justify-center lg:justify-start mb-2">
                <a href="#food">
                  <button className="font-bold mt-6 rounded-md px-4 py-2 bg-[#f9a06f] text-white relative overflow-hidden group z-10 hover:text-[#1e1b4b] duration-1000 t">
                    <span className="absolute bg-[#fac0a1] size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all "></span>
                    Explore Now
                  </button>
                </a>
              </div>
            </div>

            {/* left */}
            <div className="">
              <img className="" src={heroImg1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:h-[450px] mt-10">
            <div className="flex flex-col justify-center">
              <div className="font-semibold flex items-center justify-center lg:justify-start text-[#f9a06f] mb-3 text-center lg:text-left">
                <div className="bg-[#f9a06f] text-white mr-2 text-xl px-1 py-1 rounded-full">
                  <AiFillFire />
                </div>
                  Featured Dishes
              </div>

              <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center lg:text-left">
                Discover the power of sharing <br /> meals with {''}
                <span style={{ color: "#f9a06f", fontWeight: "bold" }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={["NourishNet", "NourishHub"]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={40}
                    delaySpeed={1000}
                  />
                </span>
              </p>
              <p className="font-medium text-black/60 dark:text-white md:text-lg text-center lg:text-left">
                Inviting you to share your culinary heritage and explore the tastes of others..
              </p>
              <div className="flex justify-center lg:justify-start mb-2">
                <a href="#food">
                  <button className="font-bold mt-6 rounded-md px-4 py-2 bg-[#f9a06f] text-white relative overflow-hidden group z-10 hover:text-[#1e1b4b] duration-1000">
                   
                    <span className="absolute bg-[#fac0a1] size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                    Explore Now
                  </button>
                </a>
              </div>
            </div>

            {/* left */}
            <div className="">
              <img className="" src={heroImg2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:h-[450px] mt-10">
            <div className="flex flex-col justify-center">
              <div className="font-semibold flex items-center justify-center lg:justify-start text-[#f9a06f] mb-3 text-center lg:text-left">
                <div className="bg-[#f9a06f] text-white mr-2 text-xl px-1 py-1 rounded-full">
                  <AiFillFire />
                </div>
                 Featured Dishes
              </div>

              <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center lg:text-left">
               Experience the fusion of <br /> flavors with {''}
                <span style={{ color: "#f9a06f", fontWeight: "bold" }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={["FoodFusion", "CuisineBlend"]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={30}
                    deleteSpeed={20}
                    delaySpeed={3000}
                  />
                </span>
              </p>
              <p className="font-medium text-black/60 dark:text-white md:text-lg text-center lg:text-left">
               With FoodFusion, every bite tells a story—what will yours say?
              </p>
              <div className="flex justify-center lg:justify-start mb-2">
                <a href="#food">
                  <button className="font-bold mt-6 rounded-md px-4 py-2 bg-[#f9a06f] text-white relative overflow-hidden group z-10 hover:text-[#1e1b4b] duration-1000">
                
                    <span className="absolute bg-[#fac0a1] size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                    Explore Now
                  </button>
                </a>
              </div>
            </div>

            {/* left */}
            <div className="">
              <img className="" src={heroImg3} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
