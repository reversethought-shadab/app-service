// pages/stages.js
"use client"
import React from 'react';

const Stages = () => {
  return (
    <section className='bg-black p-8 '>

    <div className="relative flex flex-col max-w-7xl mx-auto lg:flex-row h-screen  text-white overflow-hidden">
      
      {/* Left Side - Fixed Section */}
      <div className="lg:w-1/2 px-10 flex items-center flex-col justify-center  lg:h-full">
        <h1 className="text-4xl font-bold leading-tight mb-10 fade-in">
          Our iOS App Development process spans several stages
        </h1>
      
          <img
            src="https://jetruby.com/wp-content/uploads/tilda/1001490/pages/8368283/tild6265-3461-4361-b264-616165653761__phone_jetr_2.svg"
            alt="iOS App Development"
            />
        </div>

      {/* Right Side - Scrollable Section without Scrollbar */}
      <div className="lg:w-1/2 p-8 lg:ml-auto lg:pl-20 overflow-y-scroll no-scrollbar fade-in">
        <div className="max-w-lg mx-auto space-y-10">
          {/* Scrollable Content Sections */}
          <div className="space-y-8">
            {["We discover and discuss your iOS app idea and study your target audience",
              "We start with the UI/UX design process",
              "We kick off the iOS development process and prepare a fully functional MVP",
              "We start working on iOS app deployment and release",
              "We also provide iOS app maintenance and support services"].map((text, index) => (
                  <div key={`stage-${index}`} className="bg-gray-900 p-6 rounded-lg shadow-lg slide-in">
                <div className="text-2xl font-semibold mb-2 ">{index + 1}</div>
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
            </section>
  );
};

export default Stages;
