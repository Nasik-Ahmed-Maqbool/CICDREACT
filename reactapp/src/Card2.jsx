import React from 'react'
import image1 from './assets/image1.avif'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { DecreamentQty, IncreamentQty, RemoveItem} from './cartslice'

function Card2({name, id, image, price, qty}) {
  let dispatch = useDispatch()
  return (
    <div className='w-full h-[120px] p-2 flex justify-between shadow-lg'>
      <div className='w-[60%] h-full flex justify-between gap-4'>
        <div className='w-[60%] h-full overflow-hidden rounded-lg'>
            <img src={image} alt="" className='object-cover'/>
        </div>
        <div className='w-[40%] h-full flex flex-col gap-5'>
            <div className='text-lg text-slate-700 font-semibold'>{name}</div>
            <div className='w-[100px] h-[50%] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg'>
                <button className='w-[30%] h-full bg-white flex justify-center items-center cursor-pointer'onClick={()=>{qty>1?dispatch(DecreamentQty(id)):1}}>-</button>
                <span className='w-[40%] h-full bg-slate-300 flex justify-center items-center'>{qty}</span>
                <button className='w-[30%] h-full bg-white flex justify-center items-center cursor-pointer' onClick={()=>{dispatch(IncreamentQty(id))}}>+</button>
            </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-6'>
        <span className='text-[17px] text-green-500 font-semibold'>Rs {price}/-</span>
        <RiDeleteBin6Line className='w-[20px] h-[20px] text-red-600 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
      </div>
    </div>
  )
}

export default Card2
