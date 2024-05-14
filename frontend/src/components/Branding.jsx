import React from 'react';

function Branding({logo, name, about}) {
  return (
    <div className="bg-[#efeeee] text-white p-4 rounded-xl h-24 outfit">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center text-black ">
          <img src={logo} alt="Company Logo" className="h-16 mr-2 rounded-full" />
          <div className='flex text-left flex-col'>
          <span className='text-2xl font-semibold'>{name}</span>
          <span>{about}</span>
          </div>
        </div>
        <div>
          {/* Company details */}
        </div>
      </div>
    </div>
  );
}

export default Branding;
