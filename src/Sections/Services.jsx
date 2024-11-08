import React, { useState } from 'react';
import { services } from '../data/serviceData';  
import myVideo from '../assets/video.mp4'; 

function Services() {
  const [currentMedia, setCurrentMedia] = useState(myVideo);  
  const [currentTitle, setCurrentTitle] = useState('Services');
  const [currentDescription, setCurrentDescription] = useState('Explore various services across India.');

  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="wrapper bg-[#FFFFED] text-black h-screen w-full">
      <div className="Heading w-full flex ml-16 items-center">
        <h1 className="text-4xl mt-5">OUR SERVICES</h1>
      </div>
      <hr
        style={{
          border: '0',
          borderTop: '1px solid #000',
          width: '93%',
          margin: '2rem auto',
        }}
      />
      <div className="section h-[80%] mt-10 w-full flex">
        {/* Left Media Section */}
        <div className="w-1/2 h-full flex justify-center flex-col ml-16 pb-12">
          <video
            src={currentMedia} 
            autoPlay
            muted
            loop
            className="h-[80%] w-[70%] object-cover shadow-lg"
          />
          {/* Text Below the Media */}
          <div className="mt-2 w-[60%]">
            <p className="text-lg text-black">
              {hoveredService ? hoveredService.description : currentDescription}
            </p>
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col space-y-8 pl-12 mt-6 ">
          {services.map((service, index) => (
            <h1
              key={index}
              className="text-5xl font-normal cursor-pointer hover:text-black text-zinc-500 transition-colors duration-200 -ml-24"
              onMouseEnter={() => {
                setHoveredService(service); 
                setCurrentMedia(service.videoUrl); 
                setCurrentTitle(service.title);
                setCurrentDescription(service.description);
              }}
              onMouseLeave={() => {
                setCurrentTitle(service.title);
                setCurrentDescription(service.description);
              }}
            >
              {service.title}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
