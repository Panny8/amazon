/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image' 
import { HiStar } from 'react-icons/hi2'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '@/slices/basketSlice'

export default function checkoutProduct({
    id,
    categories,
    description,
    image,
    price,
    title,
}) 
  {
    const [rating] = useState(Math.floor(Math.random() * 5) + 1);
    const [hasPrime] = useState(Math.random() < 0.5);
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            categories,
            description,
            image,
            price,
            title,
        }

      dispatch(addToBasket(product))
    }
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }
  return (
      <div className='grid grid-cols-5'>
              <Image src={image} height={200} width={200} objectFit="contain" className='m-2'/>
              <div className='col-span-3 mx-3'>
                  <p className='mx-2'>{title}</p>
                  <div className='flex'>
                      {Array(rating).fill().map((i, _) => (
                          <div className='text-yellow-500 h-5'>
                              <HiStar />
                          </div>
                      )
                      )}
                  </div>
                  <p className='text-xs line-clamp-3'>
                      {description}
                  </p>
                  <p className='mt-2 mb-2'>
                      Price ${price}
                  </p>
                  {hasPrime && (
                      <div className='flex space-x-3 mb-2'>
                          <img src="prime-logo.png" className='w-12' />
                          <p className='text-xs'>Free Next Day Delivery</p>
                      </div>
                  )}
              </div>
              <div className='flex flex-col space-y-2 my-auto'>
                <button className='button' onClick={addItemToBasket}>Add to Basket</button>
                <button  className='button' onClick={removeItemFromBasket}>Remove from Basket</button>
              </div>
          </div>
  )
}

