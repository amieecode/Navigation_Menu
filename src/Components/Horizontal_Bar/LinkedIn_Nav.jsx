import React from 'react';
import Logo from "../../assets/LinkedIn.png";
import Profile from "../../assets/profile.jpg"
import { FaSearch, FaCommentDots } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";
import { FaBriefcase } from "react-icons/fa6";
import { IoNotifications, IoPeople } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { GoVideo } from "react-icons/go";

const LinkedIn_Nav = () => {
  return (
    <div className='z-10 shadow-lg px-6 py-2 w-full fixed'>
      <div className='flex justify-between items-center'>
        {/*Logo and Search Bar Section*/}
        <div className='hidden lg:block'>
          <div className='flex items-center gap-2'>
            <img 
                src={Logo}
                alt="logo"
                className='h-12 object-contain'
            />
            <div className='relative cursor-pointer'>
                <div className='absolute left-4 bottom-3'>
                    <FaSearch className='text-gray-500' />
                </div>
                <input 
                    type='search' 
                    placeholder='Search' 
                    className='px-11 py-2 text-lg bg-[#eaf1fb] w-80 shadow-sm cursor-pointer'
                />
            </div>
          </div>
        </div>

        {/*Icons Section*/}
        <div className='flex items-center gap-4 py-2 cursor-pointer'>
            <ImHome3 className='text-2xl' />
            <IoPeople className='text-2xl text-gray-500' />
            <FaBriefcase className='text-2xl text-gray-500' />
            <FaCommentDots className='text-2xl text-gray-500' />
            <div className=''>
                <IoNotifications className='text-2xl text-gray-500' />
            </div>
            <div className='border-r-2 border-gray-200 px-2 h-full '>
                <img src={Profile} alt="profile" className='h-8 object-contain rounded-full' />
            </div>
            <TbGridDots className='text-2xl' />
            <GoVideo className='text-2xl' />
        </div>

      </div>
    </div>
  )
}

export default LinkedIn_Nav;
