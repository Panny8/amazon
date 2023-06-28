/* eslint-disable react-hooks/rules-of-hooks */
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '@/slices/basketSlice'
import CheckoutProduct from '@/components/CheckoutProduct'
import { useSession} from 'next-auth/react'

export default function checkout() {
    const router = useRouter();
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal)
    const { data: session } = useSession()

  return (
    <div className='bg-gray-100'>
      <Header />
      <button className='text-2xl font-bold text-center text-amazon_blue-lights hover:underline' onClick={() => router.push("/")}>
          <h2>Return to Shopping</h2>
         </button>
      <main className='lg:flex max-w-screen-2xl mx-8'>
        {/*LEFTSIDE*/}
         <div className='flex-grow shadow-sm m-5'>
           <Image
             src="https://links.papareact.com/ikj"
              alt=""
              width={1020}
              height={250}
              objectFit='contain'
              />
              <div>
                <h1 className='text-3xl border-b pb-4'>
                    {items.length === 0 ? "Your Shopping Basket is empty!!!" : "Shopping Basket"}
                </h1>
               {
                items.map((item, i) => (
                    <CheckoutProduct
                    key={i}
                    id={item.id}
                    description={item.description}
                    image={item.image}
                    hasPrime={item.hasPrime}
                    price={item.price}
                    title={item.title}
                    rating={item.rating}
                    />
                  ))
               }
              </div>
         </div>
        {/*RIGHTSIDE*/}
        <div className='w-60 bg-white flex flex-col p-10'>
        {
            items.length > 0 && (
                <>
                <h2 className=' font-bold '>
                  Subtotal:({items.length} items ) : <span>price={total}</span>
                </h2>
                <button className={`${!session ? 'bg-gradient-to-r from-gray-400 to-gray-500 border-gray-200 text-gray-200 mt-2 shadow-md rounded-sm cursor-not-allowed w-full' : 'button w-full'}`}>{!session ? "Sign in to checkout" : "Proceed to CheckOut"}</button>
                </>
            )
        }
        </div>
      </main>
    </div>
  )
}
