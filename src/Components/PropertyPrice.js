import React,{ useState, useContext } from 'react';

//import Icons
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

// import headless Ui
import {Menu} from '@headlessui/react'
// import House context
import { HouseContext } from './HContainer'; 


const PriceRangeDropdown = () => {
  const { price, setPrice}
   =useContext(HouseContext);

  //  console.log(price);


  const [isOpen, setIsOpen]= useState(false);
  const prices=[
    {
      value:"Price Range (any)",
    },
    {
      value:"110000 - 140000",
    },
    {
      value:"170000 - 200000",
    },
    {
      value:"210000 - 220000",
    },
    {
      value:"20000 - 30000",
    },
    {
      value:"40000 - 117000",
    },
    {
      value:"145000 - 139000",
    },
    {
      value:"180000 - 213000",
    },
    {
      value:"221000 - 21000",
    },
    {
      value:"32000 - 38000",
    },

  ]
  return <Menu as="div" className='dropdown relative'>
   <Menu.Button onClick={()=>setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
    <RiWallet3Line className='dropdown-icon-primary' />
    <div>
      <div className='text-[15px] font-medium leading-tight'>{price}</div>
      <div className='text-[13px]'>Choose Price</div>
      </div>

      {isOpen ?(
        <RiArrowUpSLine className='dropdown-icon-secondary'/>
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary'/>
        )
      }
   </Menu.Button>
   <Menu.Items className={'dropdown-menu'}>
    {prices.map((price,index)=>{
      return(
        <Menu.Item onClick={()=> setPrice(price.value)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
          {price.value}
          </Menu.Item>
      )
    })}
   </Menu.Items>
    </Menu>
};

export default PriceRangeDropdown;
