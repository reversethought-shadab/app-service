import React from 'react';
import { FaAndroid, FaApple } from 'react-icons/fa';

interface P {
  data: any;
}

const Benefits: React.FC<P> = ({ data }) => {
  return (
    <section className='bg-gray-50 py-20'>

      <div className="p-8 bg-gray-50 max-w-7xl mx-auto">
        <div className="top-benifits">
          <p className="text-md text-black-100 mb-4">{data.section7.title}</p>
          <h1 className="text-3xl font-bold mb-8">{data.section7.subTitle}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {data.section7.benefitsData.map((item1: any) => {
            return (
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-6 flex items-center justify-center md:justify-start">
                  <span className="mr-2 text-5xl  text-green-500" /> {item1.title}
                </h2>
                {item1.innerData.map((item: any) => (
                  <div key={item.id} className="bg-white p-6 rounded-[1rem] mb-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      {console.log("item",item)}
                      {item1.type !== "android" ? <FaApple className="mr-2 text-5xl text-gray-800" /> : <FaAndroid className="mr-2 text-5xl text-green-500" />} {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
