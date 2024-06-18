import React from 'react';
import { FaBars } from "react-icons/fa6";
import Logo from "../../assets/Yotube.png";
import { RiVideoAddFill } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";
import Profile from "../../assets/profile.jpg";

const Youtube_Nav = () => {
  return (
    <div className='z-10 shadow-lg px-6 fixed w-full'>
      <div className='flex justify-between items-center'>
        {/*Logo and Bar Section*/}
        <div className='flex items-center gap-4'>
            <FaBars className='text-2xl cursor-pointer'/>
            <img 
                src={Logo}
                alt='logo'
                className='h-16 object-contain cursor-pointer'
            />
        </div>

        {/*Search Bar*/}
        <div className='hidden lg:block'>
           <div className='flex items-center'>
              <input 
                type="search"
                placeholder='Zoeken'
                className='w-[500px] bg-[#fefefe] px-2 py-1 border-gray-300 border-2' 
             />
          </div>
        </div>

        {/*Icon Section*/}
        <div className='flex items-center gap-6'>
            <RiVideoAddFill className='text-2xl cursor-pointer' />
            <TbGridDots className='text-2xl cursor-pointer' />
            <div className='relative cursor-pointer'>
                <IoNotifications className='text-2xl' />
                <div className='absolute bg-red-600 text-white text-xs rounded-full w-5 h-4 flex justify-center -right-2 -top-2'>9+</div>
            </div>
            {/*Profile*/}
            <img 
                src={Profile}
                alt="profile"
                className='h-10 object-contain rounded-full cursor-pointer'
            />
        </div>

      </div>
    </div>
  )
};

export default Youtube_Nav;
