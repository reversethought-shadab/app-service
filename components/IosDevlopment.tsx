import React from 'react';

interface P {
  data: any;
}


const IosDevlopment: React.FC<P> = ({ data }) => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          <h1 className="text-3xl font-bold mb-6">{data.subTitle}</h1>
          <h2 className="text-xl font-semibold mb-4">{data.title}</h2>
        </div>
          <p className="mb-8">
            {data.description}
          </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
      {data.cardsData.map((item:any) => (
        <div  key={item.id} className="bg-[#F8F8F8] p-6  rounded-[1.5rem]">
          <h3 className="font-semibold text-2xl">{item.title}</h3>
          <p className='my-3'>
          {item.description}
          </p>
          {/* <a href="#" className="text-blue-500 hover:underline">Read more →</a> */}
        </div>
          ))}
      </div>
    </div>
  )
}

export default IosDevlopment
