import React, { useContext, useEffect } from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { SiFoodpanda } from "react-icons/si";
import { dataContext } from './UserContext';
import { food_items } from './Food';
import { useSelector } from 'react-redux';


function Nav(){

  let {input, setinput, cate, setcate, showCart, setshowCart} = useContext(dataContext)
  useEffect(()=>{
   let newlist = food_items.filter((item)=>item.food_name.toUpperCase().includes(input) || item.food_name.toLowerCase().includes(input))
   setcate(newlist)
  },[input])
  let items = useSelector(state=>state.cart)

  return (
    <div className='w-full h-[80px] flex justify-between items-center p-5 md:p-8'>
        <div className='w-[60px] h-[60px] bg-white rounded-sm shadow-lg flex justify-center items-center'>
          <SiFoodpanda className='  text-[40px] text-green-500'/></div>
        <form className='w-[40%] h-[60px] bg-white rounded-md flex justify-start 
        items-center gap-5 drop-shadow-lg p-5 md:w-[60%]' onSubmit={(e)=>e.preventDefault()}>
        <FaSearch />
          <input type="text" placeholder='Search here' className='w-full h-[40px] outline-0' onChange={(e)=>setinput(e.target.value)} value={input}/>
        </form>
        <div className='w-[60px] h-[60px] bg-white rounded-sm cursor-pointer shadow-lg flex justify-center items-center relative' onClick={()=>{setshowCart(true)}}>
          <FaShoppingCart className='  text-[40px] text-green-500'/>
          <span className='absolute right-0 top-0 font-bold text-green-600'>{items.length}</span></div>
    </div>
  )
}

export default Nav
