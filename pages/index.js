import Banner from '@/components/Banner';
import Header from '@/components/Header';
import ProductFeed from '@/components/ProductFeed';
import Head from 'next/head';
import React from 'react'

export default function index({products}) {
  return (
    <div className='bg-gray-100 max-w-screen-2xl'>
      <Head>
        <title>Amazon</title>
      </Head>
     <Header />

    <main className="mx-20  max-w-screen-2xl">
      {/*BANNER*/}
      <Banner />
      {/*PRODUCTFEED*/}
      <ProductFeed products={products} />
    </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products
    }
  }
}
