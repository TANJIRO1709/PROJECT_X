"use client"
import React from 'react';
import im1 from '../../../public/WhatsApp Image 2024-05-08 at 9.32.07 PM.jpeg'
function Navbar() {
  return (
    <div className='flex justify-center '>
      <div ><img className='m-5 h-24 w-24 rounded-full' src='https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg' alt='logo'/></div>
      <div className='rounded-2xl m-4 h-10 w-36 text-center mt-12 py-1 text-lg' style={{backgroundColor:" #3E5C76"}}>ABOUT US</div>
        <div className='rounded-2xl m-4 h-10 w-36  mt-12 py-2 text-lg'>FITNESS</div>
          <div className='rounded-2xl m-4 h-10 w-36  mt-12 py-2 text-lg'>HEALTH</div>
            <div className='rounded-2xl m-4 h-10 w-36  mt-12 py-2 text-lg'>MEDITATION</div>
              <div className='rounded-2xl m-4 h-10 w-36  mt-12 py-2 text-lg'>NUTRITION</div>
              <div className='rounded-2xl m-4 h-10 w-36  text-center mt-12 py-1 text-lg' style={{backgroundColor:" #3E5C76"}}>ACCOUNT</div>
              <div ><img className='m-5 h-24 w-24 rounded-full' src='https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg' alt='logo'/></div>
    </div>
  )
}

export default Navbar
