"use client"
import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            
            <div className='p-5 sm:px-10 md:px-20 mt-auto mb-auto'>
            <h1 className='text-3xl font-semibold'>Car Rental</h1>
            <br></br>
                <h2 className='text-lg'>Book your next car rental now.</h2>
                <br></br>
                <button className='bg-blue-500 p-2 
      px-3 cursor-pointer
      rounded-full text-white'>Browse Cars</button>
            </div>
            <div>
               <Image src="/hero.jpg"
               alt="hero"
               width={300}
               height={400}
               className="w-full object-cover" />
            </div>
        </div>
    )
}

export default Hero