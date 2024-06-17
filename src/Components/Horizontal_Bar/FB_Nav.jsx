import React from 'react';
import FB from "../../assets/FB.png";
import { IoSearchSharp } from "react-icons/io5";
import { FaPlus, FaBars } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdHome, MdOndemandVideo } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { HiOutlineFlag } from "react-icons/hi";

const FB_Nav = () => {
  return (
    <div className='z-10 px-4 py-2 shadow-lg fixed w-full'>
      <div className='flex justify-between items-center'>
        {/*Logo Section*/}
        <div className='flex items-center'>
          <img 
            src={FB}
            alt='FB'
            className='h-10 object-contain cursor-pointer'
          />
          <div className='py-2 px-2 rounded-full bg-[#ecf0f1] shadow-sm cursor-pointer'>
            <IoSearchSharp className='text-2xl text-gray-500' />
          </div>
        </div>

        {/*Nav Menu*/}
        <div className='hidden lg:block'>
          <div className='flex items-center gap-36'>
            <div className='line cursor-pointer'>
              <MdHome className='text-4xl text-fbColor flex items-center ' />
            </div>
            <div className='relative uline cursor-pointer'>
              <HiOutlineFlag className='text-3xl' />
              <div className='absolute bg-red-600 text-white text-xs px-2 py-0.5 rounded-full flex -top-3 left-6'>9+</div>
            </div>
            <div className='relative uline cursor-pointer'>
              <MdOndemandVideo className='text-3xl' />
              <div className='absolute bg-red-600 text-white text-xs px-2 py-0.5 rounded-full -top-3 left-6'>9+</div>
            </div>
            <div className='relative uline cursor-pointer'>
              <BsShop className='text-2xl' />
            </div>
            <div className='relative uline cursor-pointer'>
              <FaBars className='text-2xl' />
            </div>
          </div>     
        </div>

        {/*left Menu*/}
        <div className='flex items-center gap-2'>
          <div className='py-3 px-3 rounded-full bg-fb hover:bg-fbHover cursor-pointer'>
            <FaPlus className='text-xl' />
          </div>
          <div className='relative py-3 px-3 rounded-full bg-fb hover:bg-fbHover cursor-pointer'>
            <FaFacebookMessenger className='text-lg'/>
            <div className='absolute bg-red-600 w-4 h-4 rounded-full text-white text-xs items-center flex justify-center right-0 -top-0.5'>1</div>
          </div>
          <div className='relative py-3 px-3 rounded-full bg-fb hover:bg-fbHover cursor-pointer'>
            <GoBellFill className='text-xl' />
            <div className='absolute bg-red-600 w-4 h-4 rounded-full text-white text-xs flex justify-center right-0 -top-0.5'>2</div>
          </div>
          <div className='py-3 px-3 rounded-full bg-fb hover:bg-fbHover cursor-pointer'>
            <TiArrowSortedDown className='text-xl' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default FB_Nav;
