import React from 'react';
import Medium from "../../assets/Medium.png";
import Profile from "../../assets/Profile/MedProfile.jpg";
import { GoBell, GoSearch } from "react-icons/go";
import { PiBookmarksSimpleThin } from "react-icons/pi";

const Medium_Nav = () => {
  return (
    <div className="shadow-lg">
        <div className='px-12 flex justify-between max-h-[65px]'>
            {/*Logo Section*/}
            <div>
                <a href="#"></a>
                <img 
                    alt="" 
                    src={Medium} 
                    className='h-16 object-contain'
                />
            </div>

            {/*Icon Section*/}
            <div className='flex items-center gap-6'>
                <GoSearch />
                <PiBookmarksSimpleThin className='text-2xl' />
                <GoBell />
                <div>
                   <img 
                       alt=""
                       src={Profile}
                       className='h-12 object-contain'
                   /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Medium_Nav;
