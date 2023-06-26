import Banner from '@/components/Banner';
import Header from '@/components/Header';
import ProductFeed from '@/components/ProductFeed';
import Head from 'next/head';
import React from 'react'

export default function index({products}) {
  return (
    <div className='max-w-full bg-gray-100'>
      <Head>
        <title>Amazon</title>
      </Head>
     <Header/>

    <main className="max-w-full">
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
