import Banner from '@/components/Banner';
import Header from '@/components/Header';
import ProductFeed from '@/components/ProductFeed';
import Head from 'next/head';
import React from 'react'
import data from '@/components/data';

export default function index({products}) {
  return (
    <div className='max-w-full bg-gray-100'>
      <Head>
        <title>Amazon</title>
      </Head>
     <Header />
     <main className="max-w-full">
          {/*BANNER*/}
          <Banner />
          {/*PRODUCTFEED*/}
          <ProductFeed products={products} />
        </main>
        <footer className='bg-amazon_blue-default text-center h-20 font-bold p-3 rounded-t text-white shadow-md'>
          Amazon
          <p>Peter Panny</p>
        </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = data;
  

  return {
    props: {
      products
    }
  }
}
