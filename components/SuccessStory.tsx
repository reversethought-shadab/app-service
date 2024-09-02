"use client";
interface P {
  data: any;
}
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const SuccessStory: React.FC<P> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const stories = [
  //   {
  //     id: 1,
  //     title: "Moments NFC",
  //     content:
  //       "Moments NFC is a Kotlin-based app that simplifies payments in pubs across the USA. There are two amazing things about this app. First, it allows you to pay for a drink with a mere wave of your hand. Just sync the app with your smartphone or a wristband with an NFC module and you’re ready to do magic! No more waiting to get your credit card payment approved. The second amazing thing is that our team built the entire app in just 12 days. We didn’t even have to create a new interface from scratch. We simply took the iOS app design and used it 'as is' to build the Kotlin app. Doing this saved our client a considerable amount of budget. Ultimately, we helped the client create a unique mobile application for the Android platform that allows pub customers to save time and make their nights out stress-free.",
  //     image: "https://jetruby.com/wp-content/webp-express/webp-images/uploads/tilda/1001490/pages/6589996/tild3537-6637-4762-b564-643636356166__moments_perview.png.webp", // replace with the path to your image
  //     buttons: [
  //       { text: "Read article", href: "#" },
  //       { text: "View case study", href: "#" },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Moments NFC",
  //     content:
  //       "Moments NFC is a Kotlin-based app that simplifies payments in pubs across the USA. There are two amazing things about this app. First, it allows you to pay for a drink with a mere wave of your hand. Just sync the app with your smartphone or a wristband with an NFC module and you’re ready to do magic! No more waiting to get your credit card payment approved. The second amazing thing is that our team built the entire app in just 12 days. We didn’t even have to create a new interface from scratch. We simply took the iOS app design and used it 'as is' to build the Kotlin app. Doing this saved our client a considerable amount of budget. Ultimately, we helped the client create a unique mobile application for the Android platform that allows pub customers to save time and make their nights out stress-free.",
  //     image: "https://jetruby.com/wp-content/webp-express/webp-images/uploads/tilda/1001490/pages/6589996/tild3537-6637-4762-b564-643636356166__moments_perview.png.webp", // replace with the path to your image
  //     buttons: [
  //       { text: "Read article", href: "#" },
  //       { text: "View case study", href: "#" },
  //     ],
  //   },
  //   // Add more stories as needed
  // ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.section4.sliderData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.section4.sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto p-4 py-20">
       <div className="flex flex-col md:flex-row items-center justify-between  mx-auto py-12 ">
      {/* Left Side - Heading and Subheading */}
      <div className="md:w-1/2">
        <h3 className="text-gray-700 text-xs font-semibold tracking-wide uppercase">
         {data.section4.subTitle}
        </h3>
        <h1 className="text-gray-900 text-4xl font-bold mt-2">
        {data.section4.title}
        </h1>
      </div>

      {/* Right Side - Description */}
      <div className="md:w-1/2 mt-4 md:mt-0 md:pl-12">
        <p className="text-gray-600">
         {data.section4.description}
        </p>
      </div>
    </div>
      <div className="overflow-hidden rounded-[30px] bg-[#F8F8F8]">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.section4.sliderData.map((item:any) => (
            <div key={item.id} className="min-w-full flex flex-col md:flex-row items-start p-4">
              <div className="w-full md:w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-sm mb-4">{item.description}</p>
                <div className="space-x-2">
                  {item.tags.map((val:any) => (
                    <a
                      key={val.id}
                      href={item.href}
                      className="inline-block py-2 px-4 border border-gray-400 rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      {val}
                    </a>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center p-4">
                <img src={item.image} alt={item.title} className="max-w-full h-auto rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-[64%] left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-[64%] right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default SuccessStory;
