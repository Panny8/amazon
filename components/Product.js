/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import Image from 'next/image'
import {HiStar} from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { addToBasket } from '@/slices/basketSlice'

export default function Product({id, title, price, description, category, image}) {
  const dispatch = useDispatch();
 const [rating] = useState(Math.floor(Math.random() * 5) + 1)
 const [hasPrime] = useState(Math.random() < 0.5)
 const addItemToBasket = () => {
   const product = {
      id,
      title,
      price,
      description,
      category, 
      image,
      rating,
      hasPrime
   };
   dispatch(addToBasket(product))
 }
  return (
    <div className='relative flex flex-col p-10 bg-white z-30  m-2'>
      <p className='w-1/2 text-gray-400 absolute top-2 right-2 text-xs italic'>{category}</p>
      <Image src={image} height={200} width={200} objectFit='contain'/>
      <h4 className='py-2'>{title}</h4>
    <div className='flex'>
       {
        Array(rating).fill().map( (_, i) => ( 
          <HiStar className='h-12 text-yellow-500'/>
     ))
       }
      </div>
      <p className='text-xs my-2 line-clamp-2'>{description}</p>
      <div className='mb-4'>
      Price ${price}
      </div>
      <div>
        {hasPrime && (
          <div className='flex items-center space-x-2 -mt-5'><img src="prime-logo.png" alt="Prime-logo" className='w-12' />
          <p className='text-xs text-gray-500'>Free Next-Day Delivery</p>
          </div>
        )}
        <button className='button' onClick={addItemToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}