"use client"
import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';
// import Link from 'next/link';
import CardModal from './components/CardModel';

const Home = ({ router }) => {  

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className='flex flex-col h-screen bg-no-repeat bg-cover' style={{backgroundImage: `url('bg-landingPage.jpg')`}}>
      <div className=' flex flex-col justify-center items-center w-screen h-screen bg-gray-900 bg-opacity-75'>
        <h1 className=' text-white text-7xl py-7 md:text-8xl lg:text-9xl font-extrabold'>Reversi Game.io</h1>
        <p  className=' text-white text-2xl max-w-xs md:max-w-3xl justify-items-center text-center'>
          Hidup itu seperti permainan. Tak perlu menang, yang penting menyenangkan.
        </p>
        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
        >
        Play Game
      </button>
      <CardModal isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </div>
  );
}

export default Home;