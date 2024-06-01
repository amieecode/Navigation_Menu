import React from 'react';
import Medium from "../../assets/Medium.png";
import { GoBell, GoSearch } from "react-icons/go";
import { LuMessagesSquare} from "react-icons/lu";

const Medium_Nav = () => {
  return (
    <div>
        <div className='px-10 flex justify-between'>
            {/*Logo Section*/}
            <div>
                <a href=""></a>
                <img 
                    alt="" 
                    src={Medium} 
                    className='h-20 object-contain'
                />
            </div>

            {/*Icon Section*/}
            <div className='flex items-center gap-6'>
                <GoSearch />
                <LuMessagesSquare />
                <GoBell />
                <div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Medium_Nav;
