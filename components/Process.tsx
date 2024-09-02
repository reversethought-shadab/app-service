import React from 'react';

interface P {
  data: any;
}


const Process: React.FC<P> = ({ data }) => {
  return (
    <section className="bg-[#F5F5F5] py-24 rounded-[3rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text- mb-12">
          <p className="text-sm font-medium mb-4 text-gray-500">{data.section3.subTitle}</p>
          <h2 className="text-4xl font-semibold  mb-20 text-gray-900">{data.section3.title}</h2>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2  sm:gap-x-6 lg:grid-cols-2 lg:gap-x-8">
          {data.section3.stepsCard.map((item:any) => (
            <div
              key={item.id}
              className=" relative p-6 bg-white border border-gray-200  rounded-[1rem] shadow-sm flex flex-col"
            >
             <div className='process-number' style={{ position: 'absolute', top: '-1.3rem', left: '16rem', padding: '0.5rem 1rem', backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '9999px' }}>
                  <span className="text-sm font-medium text-gray-600">STEP {item.id}</span>
                </div>
              <div className="mb-8 flex-grow">
                <h3 className="lg:text-[24px] md:text-2xl sm:text-xl text-center font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 lg:text-[20px] md:text-xl sm:text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
