import React from 'react';
import Logo from "../../assets/IG.png";
import { GoHome } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { SlCompass } from "react-icons/sl";
import profile from  "../../assets/profile.jpg";
import { GoSearch } from "react-icons/go";
import { SiMinutemailer } from "react-icons/si";

const IG_Nav = () => {
  return (
    <div className='z-10 shadow-lg px-8 fixed w-full'>
      <div className='flex justify-between items-center'>
        {/*logo Section*/}
        <div className='flex items-center'>
           <img 
              src={Logo} 
              className='h-16 object-contain'
            />
        </div>

        {/*Search bar*/}
        <div className='relative hidden lg:block '>
           <div className='flex items-center'>
              <div className='absolute ml-24'>
                <GoSearch className='text-gray-500' />
              </div>
              <input 
                type='search'
                placeholder='Search'
                className='w-[300px] text-center bg-[#eeeeee] py-1 border-gray-300 border-2 shadow-md'
              />
           </div>
        </div>

        {/*icon Section*/}
        <div className='flex items-center gap-6'>
            <div className='relative cursor-pointer'>
              <GoHome className='dot text-2xl ' />
              <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-[0.3rem] h-1 bg-red-500 rounded-full transition-all duration-300 ease-in-out'></div>
            </div>
            <div className='relative group cursor-pointer'>
              <SiMinutemailer className='text-2xl' />
              <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-1 bg-red-500 group-hover:w-2 rounded-full transition-all duration-300 ease-in-out'></div>
            </div>
            <div className='relative group cursor-pointer'>
              <SlCompass className='text-2xl' />
              <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-1 bg-red-500 group-hover:w-2 rounded-full transition-all duration-300 ease-in-out'></div>
            </div>
            <div className='relative group cursor-pointer'>
              <FaRegHeart className='text-2xl' />
              <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-1 bg-red-500 group-hover:w-2 rounded-full transition-all duration-300 ease-in-out'></div>
            </div>
           <img 
              src={profile} 
              className='h-8 object-contain rounded-full'
           />
        </div>

      </div>
    </div>
  )
}

export default IG_Nav;
