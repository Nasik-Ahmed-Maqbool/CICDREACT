import React, { useContext, useState } from 'react'
import Nav from './Nav'
import Categories from './Category'
import { food_items } from './Food'
import Card from './Card'
import { dataContext } from './UserContext'
import { RxCross2 } from 'react-icons/rx'
import Card2 from './Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Home(){

  let {cate, setcate, input, showCart, setshowCart}=useContext(dataContext)


function filter(category){
  if(category==="All"){
    setcate(food_items)
  }else{
    let newlist = food_items.filter((item)=>(item.food_category===category))
    setcate(newlist)
  }
}

let items = useSelector(state=>state.cart)

let subtotal =items.reduce((total,item)=>total + item.qty * item.price,0)
let deliveryFee = 20;
let taxes = subtotal*0.5/100;
let total = Math.floor(subtotal+deliveryFee+taxes)

return (
    <div className='w-full min-h-screen bg-slate-200'>
      <Nav/>

     {!input?<div className='flex flex-wrap justify-center items-center gap-6 w-[100%]'>
      {
        Categories.map((item)=>{
          return <div className='w-[100px] h-[100px] bg-white flex flex-col p-5 gap-2 font-semibold 
          text-[15px] text-gray-500 cursor-pointer rounded-md 
          shadow-xl hover:bg-green-300 transition-all duration-200' onClick={()=>filter(item.name)}>
            {item.icon}{item.name}</div>
        })
      }
</div>:null} 
      


<div className='w-full flex flex-wrap gap-5 justify-center items-center px-5 pt-8 pb-8'>
{cate.length>1?cate.map((item)=>(
    <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
  )):<div className='text-center text-2xl text-green-500 font-semibold pt-5'>No Dish Found</div>}
  

  
</div>

<div className={`w-full md:w-[40%] h-[100%] flex flex-col overflow-auto items-center top-0 right-0 fixed bg-amber-100 transition-all duration-500 shadow-xl p-6 ${showCart?'translate-x-0':'translate-x-full'}`}>
  <header className='w-full flex justify-between items-center'>
    <span className='text-green-400 text-[18px] font-semibold'>Order Items</span>
    <RxCross2 className='w-[20px] h-[20px] text-red-600 cursor-pointer font-semibold' onClick={()=>setshowCart(false)}/>
  </header>

{items.length>0?<>

<div className='w-full mt-9 flex flex-col gap-8'>
  {items.map((item)=>(
    <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
  ))}
</div>

<div className='w-full border-t-2 border-b-2  border-gray-400 mt-7 flex flex-col gap-2 p-8'>
  <div className='w-full flex justify-between items-center'>
    <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
    <span className='text-green-400 font-semibold text-lg'>Rs {subtotal}/-</span>
  </div>
  <div className='w-full flex justify-between items-center'>
    <span className='text-lg text-gray-600 font-semibold'>DeliveryFee</span>
    <span className='text-green-400 font-semibold text-lg'>Rs {deliveryFee}/-</span>
  </div>
  <div className='w-full flex justify-between items-center'>
    <span className='text-lg text-gray-600 font-semibold'>Tax</span>
    <span className='text-green-400 font-semibold text-lg'>Rs {taxes}/-</span>
  </div>
</div>
<div className='w-full flex justify-between items-center p-9'>
    <span className='text-2xl text-gray-600 font-semibold'>Total</span>
    <span className='text-green-400 font-semibold text-lg'>Rs {total}/-</span>
  </div>
  <button className='w-[80%] p-3 bg-green-500  text-[13px] rounded-2xl text-white cursor-pointer
       hover:bg-green-400 transition-all duration-200' onClick={()=>{toast.success("Order Is Placed")}}>Place Order</button>
  </>:<div className='text-center text-2xl text-green-500 font-semibold pt-5'>Empty Cart</div>}

</div>


    </div>
  )
}

export default Home
