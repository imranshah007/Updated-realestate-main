import React,{useContext} from 'react';

import Location from './Location';
import PropertyType from './PropertyType';
import PropertyPrice from './PropertyPrice';
import Year from './Year';

//import Icons

// import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from './HContainer';

const Search = () => {
  const {handleClick}=useContext(HouseContext);
  // console.log(handleClick)
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-0 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
       <Location />
       <PropertyType/>
       <PropertyPrice/>
       <Year />
       <button onClick={()=>handleClick()} className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'> Search
       </button>

    </div>
  )
};

export default Search;
