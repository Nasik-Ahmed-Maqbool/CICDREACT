import React from 'react'
import image1 from "./assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { dataContext } from './UserContext';
import { AddItem } from './cartslice';
import { toast } from 'react-toastify';


function Card({name, image, id, price, type}) {

  let dispatch = useDispatch()
  return (
    <div className='w-[230px] h-[300px] bg-white p-2 rounded-lg  shadow-lg
    flex flex-col gap-2 hover:border-2 border-green-300'>
      <div className='w-full overflow-hidden h-[60%] rounded-lg'>
        <img src={image} alt="" className='object-cover'/>
      </div>
      <div className='text-[16px] font-semibold '>
        {name}
      </div>
      <div className='w-full flex justify-between items-center'>
        <div className='text-[13px] font-semibold text-green-500'>Rs {price}/-</div>
        <div className='flex justify-start gap-0.5 text-green-500 
        font-semibold text-[13px]'>{type==="veg"?<LuLeafyGreen />:<GiChickenOven />}<span>{type}</span></div>
      </div>
      <button className='w-full p-3 bg-green-500  text-[13px] rounded-lg text-white cursor-pointer
       hover:bg-green-400 transition-all duration-200' 
       onClick={()=>{dispatch(AddItem({id:id, name:name, price:price, image:image, qty:1})); toast.success("Item added")}} >
        Add to Dish</button>
    </div>
  )
}

export default Card
