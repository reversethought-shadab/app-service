// pages/stages.js
"use client"
import React from 'react';
interface P {
  data: any;
}


const Stages: React.FC<P> = ({ data }) => {
  return (
    <section className='bg-black p-8 '>

    <div className="relative flex flex-col max-w-7xl mx-auto lg:flex-row h-screen  text-white overflow-hidden">
      
      {/* Left Side - Fixed Section */}
      <div className="lg:w-1/2 px-10 flex  text-left flex-col justify-center  ">
     <p>{data.subTitle}</p>
        <h1 className="text-4xl font-bold leading-tight mb-10 fade-in">
          {data.title}
        </h1>
      
          <img
            src={data.image}
            alt="iOS App Development"
            />
        </div>

      {/* Right Side - Scrollable Section without Scrollbar */}
      <div className="lg:w-1/2 p-8 lg:ml-auto lg:pl-20 overflow-y-scroll no-scrollbar fade-in">
        <div className="max-w-lg mx-auto space-y-10">
          {/* Scrollable Content Sections */}
          <div className="space-y-8">
        {data.processCard.map((card:any) => (
        <div key={card.id} className="bg-gray-900 p-6 rounded-lg shadow-lg slide-in">
          <div className="text-2xl font-semibold mb-2">{card.number}</div>
          <p className="text-lg">{card.description}</p>
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
