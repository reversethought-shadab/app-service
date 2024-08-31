"use client";

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SuccessStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stories = [
    { id: 1, content: 'Success Story 1' },
    { id: 2, content: 'Success Story 2' },
    { id: 3, content: 'Success Story 3' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stories.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === stories.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {stories.map((story) => (
            <div key={story.id} className="min-w-full p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg font-semibold">{story.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default SuccessStory;
