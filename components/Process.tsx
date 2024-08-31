import React from 'react';

interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Android Consulting',
    description: 'First of all, we need to have a clear vision of the app and its future functionality. We obtain an understanding of the product’s advantage as compared to its competitors and determine the end-users\' needs.',
  },
  {
    id: 2,
    title: 'Android App UX/UI Design',
    description: 'Our team adheres to the best design techniques. As a customer, you can fully expect an adaptive responsive UI design that enhances the customer experience.',
  },
  {
    id: 3,
    title: 'Creating Android App',
    description: 'We deliver highly customizable Android app solutions as per your particular requirements. You get the tool to control and streamline business operations effectively.',
  },
  {
    id: 4,
    title: 'Android App Support',
    description: 'Post-release maintenance is the time and opportunity to have all bugs noticed and fixed. Support for new OS versions is also included.',
  },
];

const Process = () => {
  return (
    <section className="bg-[#F5F5F5] py-24 rounded-[3rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text- mb-12">
          <p className="text-sm font-medium mb-8 text-gray-500">ANDROID APP DEVELOPMENT</p>
          <h2 className="text-4xl font-semibold  mb-20 text-gray-900">How We Work on <br /> Your Android App</h2>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2  sm:gap-x-6 lg:grid-cols-2 lg:gap-x-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className=" relative p-6 bg-white border border-gray-200  rounded-[1rem] shadow-sm flex flex-col"
            >
             <div className='process-number' style={{ position: 'absolute', top: '-1.3rem', left: '16rem', padding: '0.5rem 1rem', backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '9999px' }}>
                  <span className="text-sm font-medium text-gray-600">STEP {step.id}</span>
                </div>
              <div className="mb-8 flex-grow">
                <h3 className="lg:text-[24px] md:text-2xl sm:text-xl text-center font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 lg:text-[20px] md:text-xl sm:text-xs text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
