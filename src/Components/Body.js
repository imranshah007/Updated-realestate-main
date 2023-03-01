import React from 'react';


import Image from "../assets/img/houses/house10lg.png";
import Search from "./Search";

const Body = () => {
  return(
  <section className='h-full max-h-[640px] mb-8 xl:mb-5'>
   <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4x1 lg:text-[58px] font-semibold leading-none mb-6'>
          <span className='text-violet-700'>Buy</span> Your Dream House With Us...
        </h1>
        <p className='max-w-[480px] mb-8'> Download the project files from <a className='text-blue-500 underline' 
         href='https://github.com/imranshah007/RealEstate' target="_blank" rel="noreferrer">Github</a></p>
      </div>
     
      <div className='hidden flex-1 lg:flex justify-end items-end  border-y-2 rounded-2xl'>
        <img src={Image} alt=""></img>
      </div>

    </div>
    <Search/>
  </section>
  );
};

export default Body;
