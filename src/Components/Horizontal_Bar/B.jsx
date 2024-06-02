import React from 'react';

const B = () => {
  return (
    <div className='z-40'>
      <div className='px-4 flex justify-between bg-purple-800 shadow-lg'>
        {/*Logo*/}
        <div className='cursor-pointer'>
            <a href="#"></a>
            <h2 className='text-3xl text-white bg-purple-800 border-2 shadow-lg rounded-md font-semibold px-4 py-2 mt-2 mb-4'>B</h2>
        </div>
        {/*Right Nav Bar*/}
        <div>

        </div>

        {/*left Nav bar*/}
        <div>

           {/*Button*/}
            <div className='cursor-pointer border-amber-100'>
                <a href="#"></a>
            <h2 className='text-xl text-[#fef3c7] shadow-lg rounded-md font-semibold px-4 py-2 mt-2 mb-4'>Download</h2>
        </div>
        </div>
      </div>
    </div>
  )
}

export default B
