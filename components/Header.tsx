"use client";

import { useState } from 'react';
import Modal from './Modal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 bg-white z-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src="/images/nerasoft.png" alt="Logo" className="h-12 w-35 mr-3.75" />
            <div className="icon-box-content grow">
              <div className="icon-box-title">
                <a href="/" className="font-poppins" style={{ fontSize: '11px', fontWeight: 400, lineHeight: '16px', marginBottom: '7px', display: 'block' }}>
                  web &amp; app<br />development
                </a>
              </div>
            </div>
          </div>
          <button onClick={handleOpenModal} className="bg-[#22335E] text-white px-8 py-3 rounded-full">Contact</button>
        </div>
      </header>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
