'use client'
import React from 'react';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';

const CardModal = ({ isOpen, closeModal }) => {
  

  const modalStyle = useSpring({
    transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
    opacity: isOpen ? 1 : 0,
  });

  return (
    <animated.div style={modalStyle} className={`fixed bg-white p-4 flex items-center justify-center`}>
      <div className="w-full p-4 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-2">Pilih Mode Permainan</h2>
        <div className=' flex flex-col items-center justify-center my-10'>
            <Link href="/playerVsPlayer">
                <button className=' w-42 p-4 text-white bg-green-700 rounded-md hover:bg-green-900'>
                    <span className=' flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                        </svg>
                            Player vs Player
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>
            </Link>
            <Link href="/playerVsCom">
            <button className=' w-52 my-2 p-4 text-white bg-green-800 rounded-md hover:bg-green-900'>
                    <span className=' flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                        </svg>
                            Player vs Com
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clip-rule="evenodd" />
                        </svg>

                    </span>
                </button>     
            </Link>
        </div>
        <button onClick={closeModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Tutup
        </button>
      </div>
    </animated.div>
  );
};

export default CardModal;