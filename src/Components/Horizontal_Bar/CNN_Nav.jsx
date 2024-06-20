import React from 'react';
import Logo from "../../assets/CNN.png"; 
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';

const MenuBar = [
    {  id: 1,
       name: "Watch",
       link: "/#",
    },
    {  id: 2,
        name: "US Politics",
        link: "#/politics",
     },
     {  id: 3,
        name: "Business",
        link: "#/politics",
     },
     {  id: 4,
        name: "Health",
        link: "#/health",
     },
    {  id: 5,
        name: "Entertainment",
        link: "#/enter",
     },
     {  id: 6,
        name: "Styles",
        link: "#/styles",
     },
     {  id: 7,
        name: "Travel",
        link: "#/travel",
     },
     {  id: 8,
        name: "Sports",
        link: "#/sport",
     },
     {  id: 9,
        name: "Videos",
        link: "#/video",
     },
];

const CNN_Nav = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu =() => {
        setShowMenu(!showMenu);
    }
  return (
    <div className='z-10 bg-black shadow-lg px-6 w-full fixed'>
      <div className="flex justify-between items-center">
        {/*Logo and Menu Section*/}
        <div className="flex items-center gap-6">
           <img 
             src={Logo} 
             alt='logo' 
             className='h-16 object-contain'
           /> 
           {/*Menu Section*/}
           <div className="hidden lg:block">
              <ul className='flex items-center gap-2'>
                {MenuBar.map(({ id, name, link }) => {
                  return (
                    <li key={id}>
                      <a href={link} className='text-white text-lg hover:border-b-2 hover:border-white duration-300 transition-all'>{name}</a>
                    </li>
                  )
                })}
              </ul>
          </div>
        </div>

        {/*Icons   Section*/}
        <div className='hidden lg:block'>
          <div className='flex items-center gap-8 cursor-pointer'>
            <div className='flex'>
              <h2 className='text-white text-lg'>Edition</h2>
              <MdKeyboardArrowDown className='text-white text-lg ml-1 mt-2' />
            </div>
            <FaSearch className='text-white text-lg'/>
            <CgProfile className='text-white text-3xl'/>
            <GoVideo className='text-white text-2xl' />
          </div> 
        </div> 

        {/*Hamburger Menu*/} 
        <div className='lg:hidden block'>
          <div className='flex items-center'>
            {showMenu ? (
               <HiMenuAlt1 
                onClick={toggleMenu}
                className='text-white cursor-pointer'
                size={30}
               />
             ):(
               <HiMenuAlt3 
                onClick={toggleMenu}
                className='text-white cursor-pointer'
                size={30}
               />
             )
            }
          </div>
        </div>
      </div>
        
      {/*Mobile Menu*/}
      <div className={`${ showMenu ? "left-0" : "left-[100%]"} fixed bottom-0 top-[4.1rem] flex-col px-8 pb-6 pt-12 justify-between z-10 h-screen w-[100%] bg-black lg:hidden`}>
             <div className='mt-4'>
               <ul className='space-y-6 text-lg'>
                 {MenuBar.map(({ id, name, link }) => {
                   return (
                     <li key={id}>
                        <a href={link} className='text-white hover:border-b-2 hover:border-white transition-all duration-300 cursor-pointer'>{name}</a>
                     </li>
                   )
                 })}
                </ul>
            </div>
      </div>

    </div>
  )
}

export default CNN_Nav;
