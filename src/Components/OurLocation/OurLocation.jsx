import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { Bounce } from 'react-awesome-reveal';

const OurLocation = () => {
    
     const customIcon = new Icon({
    iconUrl: "https://i.ibb.co/fF3bmMx/marker.jpg",
    iconSize: [38, 38],
  });
    return (
        <div className='max-w-[1170px] mx-auto'>
         <div className="mt-8 lg:mt-28">
         <h2 className="text-center text-2xl mb-4 lg:mb-8 lg:text-4xl font-bold dark:text-[#f9a06f] text-black">
        <Bounce>Our Location</Bounce>
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