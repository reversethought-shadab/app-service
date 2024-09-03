"use client";

import { useState } from 'react';
import Modal from './Modal';

interface P {
    data: any;
  }
  
  const Hero: React.FC<P> = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
    <>
    <section
      className="2xl:bg-center 2xl:bg-cover bg-contain bg-no-repeat bg-right-top bg-[#22335E] lg:bg-center lg:bg-contain lg:px-20 lg:py-20 md:px-8 pb-20 pt-9 px-4 relative text-white xl:bg-center xl:bg-cover"
    >
      <div className="2xl:mx-0 xl:container xl:mx-0">
        <div className="2xl:grid-cols-6 grid grid-cols-1 items-center lg:grid-cols-6 xl:grid-cols-7">
          <div className="2xl:col-span-4 lg:col-span-6">
            <div className="md:h-auto message">
              <h1 className="android_heading Gilroy-semiBold heading_new_K_1 lg:mb-6 mb-8">
                {data.hero.title}
              </h1>
              <p className="lg:text-lg mb-8 text-base">
               {data.hero.description}
              </p>
              <button onClick={handleOpenModal} className="bg-white text-[#22335E] px-8 py-3 rounded-full">{data.hero.button}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};
export default Hero;