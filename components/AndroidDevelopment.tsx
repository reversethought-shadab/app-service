import React from 'react';
interface P {
  data: any;
}
const AndroidDevelopment: React.FC<P> = ({ data }) => {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 flex flex-col px-6 md:flex-row items-start py-16 bg-white">
      <div className="md:w-1/2">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">
         {data.section2.title}
        </h3>
        <h2 className="text-4xl font-bold mb-6 leading-tight">{data.section2.subtitle}</h2>
        <p className="text-lg text-gray-700 lg:pr-32 md:pr-2 leading-relaxed">{data.section2.description}</p>
      </div>
      <div className="md:w-1/2  mt-8 md:mt-0 ">
        <img
          src={data.section2.image}
          alt={data.section2.title}
          className="w-full rounded-lg object-cover sm:w-full"
          style={{width: '596px', height: '490px' }}
        />
      </div>
    </div>
  );
};

export default AndroidDevelopment;
