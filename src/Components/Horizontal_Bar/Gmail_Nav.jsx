import React from 'react';
import GLogo from "../../assets/Gmail.png";
import Profile from "../../assets/profile.jpg"
import { FaBars } from "react-icons/fa6";
import { GrCircleQuestion } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";

const Gmail_Nav = () => {
  return (
    <div className='relative z-10 px-4 shadow-lg'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          
          {/*Logo and Bar*/}
          <div className='hover:bg-gmail px-3 py-3 rounded-full'>
            <FaBars className='text-2xl cursor-pointer'/>
          </div>
          <img
            src={GLogo}
            alt='Gmail'
            className='h-16 object-contain cursor-pointer'
          />
          <div className=' ml-14'></div>

          {/*Search Bar*/}
           <div className='relative hidden lg:block'>
              {/*Search icon*/}
              <div className='absolute hover:bg-[#e6e6e6] px-2 py-2 ml-2 mt-1 rounded-full'>
                <IoSearchSharp className='text-2xl text-gray-500'/>
              </div>
              {/*Input field*/}
              <input
                type='search'
                placeholder='Search Mail'
                className='w-[700px] rounded-full pr-3 pl-14 placeholder-gray-500 text-lg text-black bg-[#eaf1fb] hover:bg-white hover:shadow-lg px-4 py-[0.6rem] outline-none'
              />
              {/*Dot icon*/}
              <div className='absolute hover:bg-[#e6e6e6] px-2 py-2 right-3 top-1 rounded-full'>
                <HiAdjustmentsHorizontal className='text-2xl' />
              </div>
            </div>
        </div>

        {/*Profile and Setting*/}
        <div className='flex items-center gap-2'>
          {/*Icons*/}
          <div className='hover:bg-gmail px-2 py-2 rounded-full'>
            <GrCircleQuestion className='text-2xl cursor-pointer'/>
          </div>
          <div className='hover:bg-gmail px-2 py-2 rounded-full'>
            <IoSettingsOutline className='text-2xl cursor-pointer'/>
          </div>
          <div className='hover:bg-gmail px-2 py-2 rounded-full'>
            <PiDotsNineBold className='text-2xl cursor-pointer'/>
          </div>
          {/*Profile section*/}
          <div className='hover:bg-gmail px-1 py-1 rounded-full'>
            <img 
              src={Profile}
              alt="profile"
              className='h-10 object-contain cursor-pointer rounded-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Gmail_Nav;

