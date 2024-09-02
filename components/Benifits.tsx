import React from 'react';
import { FaAndroid, FaApple } from 'react-icons/fa';

const benefitsData = {
  android: [
    {
      title: "Open Source",
      description: "An open-source operating system simplifies the integration process and access to developers’ resources."
    },
    {
      title: "Scalability",
      description: "Android apps easily go together with the Internet of Things, Augmented Reality, and Virtual Reality."
    },
    {
      title: "Security",
      description: "As a Linux-based platform, it allows end-users to take advantage of the advanced security features underlying Linux. "
    }
  ],
  ios: [
    {
      title: "Reduced Development Time",
      description: "iOS apps require a relatively short development time and can be a great testing ground for your business opportunities."
    },
    {
      title: "Tech-savvy & Loyal Users",
      description: "Apple has a community of tech-savvy and loyal customers, who are receptive to innovative solutions."
    },
    {
      title: "Higher App Revenue",
      description: "It’s known that Apple users are more willing to use in-app paid services. Altogether, it boosts revenue generation."
    }
  ]
};

const Benefits = () => {
  return (
    <section className='bg-gray-50 py-20'>

    <div className="p-8 bg-gray-50 max-w-7xl mx-auto">
      <div className="top-benifits">
        <p className="text-md text-black-100 mb-4">Benefits of Android and iOS Apps for Businesses</p>
      <h1 className="text-3xl font-bold mb-8">Unlock Your Business Potential with a Mobile App</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Android Apps */}
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-6 flex items-center justify-center md:justify-start">
            <FaAndroid className="mr-2 text-5xl  text-green-500" /> Android Apps
          </h2>
          {benefitsData.android.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-[1rem] mb-6">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <FaAndroid className="mr-2 text-5xl text-green-500" /> {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* iOS Apps */}
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-6 flex items-center justify-center md:justify-start">
            <FaApple className="mr-2 text-5xl text-gray-800" /> iOS Apps
          </h2>
          {benefitsData.ios.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-[1rem] mb-6">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <FaApple className="mr-2 text-5xl text-gray-800" /> {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
          </section>
  );
};

export default Benefits;
