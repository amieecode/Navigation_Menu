import React  from 'react';
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiFillSlackCircle } from "react-icons/ai";

const Menus = [
  {
    id:1,
    name: "Home",
    link: "#"
  },
  {
    id:2,
    name: "Documentation",
    link: "#/doc"
  },
  {
    id:3,
    name: "Examples",
    link: "#/examples"
  },
  {
    id:4,
    name: "Icons",
    link: "#/icons"
  },
  {
    id:5,
    name: "Themes",
    link: "#/themes"
  },
  {
    id:6,
    name: "Expos",
    link: "#/expos"
  },
  {
    id:1,
    name: "Blog",
    link: "#/blog"
  },
];

const B = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  };

  return (
    <div className='z-40 px-4 bg-purple-800 shadow-lg fixed w-full'>
     <div className='py-2'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-6'>
        {/*Logo*/}
          <div className='cursor-pointer'>
            <a href="#"></a>
            <h2 className='text-2xl text-white bg-purple-800 border-2 shadow-3xl rounded-lg font-semibold px-3 py-1 my-2'>B</h2>
          </div>

          {/*Right Nav Bar*/}
          <div className='hidden lg:block'>
            <ul className='flex items-center gap-4'>
             { Menus.map(({id,link,name}) => {
               return(
                  <li key={id}>
                    <a href={link} className='text-white text-lg font-semibold hover:text-brand py-2 hover:border-b-2 hover:border-brand transition-all duration-300'>{name}</a>
                  </li>
               );
              })}
            </ul>
          </div>
        </div>

        {/*left Nav bar*/}
        <div className='flex items-start gap-4'>
          <div className='flex'>
            <h2 className='text-white'>v4.5</h2>
            <MdOutlineArrowDropDown className='text-2xl text-white'/>
          </div>
          <FaGithub className='text-xl text-white'/>
          <FaTwitter className='text-xl text-white'/>
          <AiFillSlackCircle className='text-xl text-white'/>
           {/*Button*/}
            <div className='cursor-pointer'>
              <a href="#"></a>
              <h2 className='text-xl text-brand border-brand border-2 shadow-2xl rounded-md font-semibold px-3 py-1 my-2'>Download</h2>
            </div>
        </div>
      
        {/*Mobile view*/}
        <div className='lg:hidden block'>
        <div className='flex items-center gap-6'>
            { showMenu ? (
              <HiMenuAlt1 
                onClick={toggleMenu}
                className='cursor-pointer text-white '
                size={35}
              />
            ):(
              <HiMenuAlt3 
                onClick={toggleMenu}
                className='cursor-pointer text-white'
                size={35}
              />
            )}
        </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default B
