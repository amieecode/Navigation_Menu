import React from 'react';
import Logo from "../../assets/bbc.png";
import { CgProfile } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';

const MenuBar = [
  {
    id: 1,
    name: "News",
    link: "#/news",
  },
  {
    id: 2,
    name: "Sport",
    link: "#/sport",
  },
  {
    id: 3,
    name: "Reel",
    link: "#/reels",
  },
  {
    id: 4,
    name: "WorkLife",
    link: "#/worklife",
  },
  {
    id: 5,
    name: "Travel",
    link: "#/travel",
  },
  {
    id: 6,
    name: "Future",
    link: "#/future",
  },
  {
    id: 7,
    name: "More",
    link: "#/more",
  },
 ];

const BBC_Nav = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
      setShowMenu(!showMenu);
  }
  return (
    <div className='z-10 bg-black text-white shadow-lg px-2 fixed w-full'>
      <div className="flex justify-between items-center gap-2">
        {/*Logo and sign in Section*/}
        <div className="flex items-center gap-2">
          <img 
            src={Logo}
            className='h-12 object-contain border-r-[0.1px] border-[#b6b5b7]'
          />
          <div className='flex gap-2 cursor-pointer'>
             <CgProfile className='text-2xl' />
             <p className='font-semibold'>Sign in</p>
          </div>
        </div>

        {/*Menu Section*/}
        <div className="hidden lg:block">
          <ul className='flex item-center gap-4 cursor-pointer'>
          {MenuBar.map(({id,link,name}) => {
            return(
              <li key={id} className='relative group flex'>
                <div className='h-12 border-r-[0.1px] border-[#b6b5b7] mx-1'></div>
                <div className='absolute left-1/2 transform -translate-x-1/2 bottom-1 w-0 h-1 bg-white group-hover:w-10 transition-all duration-300 ease-in-out'></div>
                <a href={link} className='text-lg mt-2 px-[0.3rem] duration-300 transition-all'> {name} </a>
              </li>
            )
          })}
          </ul>
        </div>

        {/*Search bar Section*/}
        <div className="flex items-center">
          <div className='flex gap-4 cursor-pointer'>
            <MdArrowDropDown className='mt-[1rem]' />
            {/*Border line*/}
            <div className='h-12 border-r-[0.1px] border-[#b6b5b7]'></div>
            {/*Search field*/}
            <div className='mt-2'>
              <input 
                type='Search'
                placeholder='Search'
                className='px-2 py-0.5 text-black'
              /> 
            </div>
            <button className='relative'>
              <FaSearch className='absolute text-gray-600 right-7 top-[1rem]'/>
            </button>
          </div> 
        </div>

        {/*Hamburger Menu*/}
        <div className='lg:hidden block'>
          <div className='flex items-center'>
            {showMenu ? (
              <HiMenuAlt1 
                onClick={toggleMenu}
                size={30}
                className='text-white cursor-pointer'
              />
            ):(
              <HiMenuAlt3 
                onClick={toggleMenu}
                size={30}
                className='text-white cursor-pointer'
              />
            )}
          </div>
        </div>
      </div>

      {/*Mobile View*/}
        <div className={` ${ showMenu ? "left-0": "left-[100%]" } fixed bottom-0 top-[3.1rem] flex-col justify-between px-8 pt-12 pb-6 z-10 bg-black h-screen w-[100%] lg:hidden`}>
          <div className='mt-4'>
            <ul className='space-y-6 text-lg'>
              {MenuBar.map(({id,name,link}) => {
                return (
                  <li key={id}>
                    <a href={link} className='font-semibold hover:border-b-2 hover:border-white duration-300 transition-all'>{name}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
    </div>
  );
};

export default BBC_Nav;
