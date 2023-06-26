/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import { HiOutlineMagnifyingGlass, HiBars4, HiShoppingCart } from "react-icons/hi2";
export default function Header() {
    return (
     <header>
        {/*TOP NAV*/}
      <div className='flex items-center bg-amazon_blue-default p-1 py-2 flex-grow'>
        <div className=' mt-2 flex items-center flex-grow sm:flex-grow-0 justify- mx-2'>
            <Image 
             src="https://links.papareact.com/f90"
             width={150}
             height={40}
             objectFit='contain'
             className='cursor-pointer'
            />
        </div>
        {/*Search bar*/}
        <div className='mx-2 bg-yellow-400 hidden sm:flex items-center rounded-md h-10 cursor-pointer flex-grow hover:bg-yellow-500'>
            <input type="text" className='p-2 h-full w-6 flex-shrink rounded-l focus:outline-none px-4 flex-grow' />
            <HiOutlineMagnifyingGlass size='2rem' className='h-12 p-1 '/>
        </div>
        {/*RIGHT*/}
        <div className='text-white flex items-center space-x-6 mx-6 text-xs whitespace-nowrap'>
          <div className='link'>
            <p>Hello Mr Panny</p>
            <p className='font-extrabold md:text-sm'>Account & List</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div className='link relative flex items-center'>
            <span className='absolute right-0 top-0 md:right-10 bg-yellow-400 text-center text-black font-bold w-4 h-4 rounded-full'>0</span>
            <HiShoppingCart className='h-10' size='2rem'/>
            <p className='font-extrabold md:text-sm hidden md:inline mt-2'>Basket</p>
          </div>
        </div>
      </div>
      {/*BOTTOM NAV*/}
      <div className='bg-amazon_blue-light text-white flex space-x-3 p-2 pl-2 '>
        <p className='flex link text-center'>
          <HiBars4 className='flex h-6 right-1' size='2rem'/>
           All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business </p>
        <p className='link'>Todays Deal</p>
        <p className='link hidden lg:inline-flex'>Electronic</p>
        <p className='link hidden lg:inline-flex'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex'>Prime</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shooper toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  )
}