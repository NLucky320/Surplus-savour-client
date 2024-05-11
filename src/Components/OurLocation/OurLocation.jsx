import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
const OurLocation = () => {
      useEffect(() => {
    Aos.init({ duration: 700 });
      }, []);
     const customIcon = new Icon({
    iconUrl: "https://i.ibb.co/fF3bmMx/marker.jpg",
    iconSize: [38, 38],
  });
    return (
        <div className='max-w-[1170px] mx-auto'>
         <div className="mt-8 lg:mt-28" data-aos="fade-up">
          <h2
            id="estate-s"
            className="text-center font-bold text-3xl  animate__animated animate__headShake  animate__slow animate__infinite mb-4"
          >
            Our Location
          </h2>
            </div>
        <div className="h-[500px]">
           <MapContainer
            center={[50.892, 4.4182]}
            zoom={13}
                    scrollWheelZoom={false}
                    className='h-full'
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[50.892, 4.4182]} icon={customIcon}>
              <Popup>We are here!</Popup>
                    </Marker>
          </MapContainer>
        </div>
      </div>
    );
};

export default OurLocation;