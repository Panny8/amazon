/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

export default function login() {
  const handleGoogleSignin = () => {
    signIn("google", {callbackUrl: "https://amazon-panny.netlify.app"})
  }
  const handleGithubSignin = () => {
    signIn("github", {callbackUrl: "https://amazon-panny.netlify.app"})
  }
  return (
    <div className='bg-gray-400 h-screen flex'>
      <div className='bg-amazon_blue-default m-auto w-1/2 h-2/3 rounded-md shadow-md flex-col'>
        <h1 className='text-gray-400 text-3xl text-center pt-4 font-bold my-8 italic'>Login to Continue</h1>
        <div className='m-4 justify-center' onClick={handleGoogleSignin}>
          <button className='bg-amazon_blue-lights p-4 rounded-md text-gray-400 w-1/2 m-auto font-bold flex items-center'>
           <span className='mx-2 text-center'><Image src='/google.png' width="35" height="25"/></span>Login with Google
          </button>
        </div>
        <div className='justify-center m-4' onClick={handleGithubSignin}>
         <button className='bg-amazon_blue-lights p-4 rounded-md text-gray-400 w-1/2 m-auto font-bold flex items-center'>
          <span className='mx-2 text-center'><Image src='/github.png' width="35" height="25"/></span>Login with Github
          </button>
        </div>
    </div>
    </div>
  )
}
