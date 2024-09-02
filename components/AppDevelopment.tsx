import React from 'react'

interface P {
  data: any;
}

const AppDevelopment: React.FC<P> = ({ data }) => {
  return (
    <section className="  py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-12">App development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.section1.services.map((item: any) => {
            return (<div className="relative bg-[#F8F8F8] p-8 rounded-lg ">
              <h3 className="lg:text-2xl md:text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-8">{item.description}</p>
              <div className="flex flex-wrap space-x-4 mb-20">
                {/* map  */}
                {item.tags.map((item:any) => {
                  return (<span className="px-4 py-2 bg-white rounded-full shadow-sm">
                    {item}
                  </span>)
                })}
              </div>
              <div className="absolute bottom-0 right-0">
                <img src={item.icon} className="h-20 w-auto" />
              </div>
            </div>)
          })}
        </div>
      </div>
    </section>
  )
}

export default AppDevelopment
