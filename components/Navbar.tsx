import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-5 shadow-sm border-b-[1px]'><Image src="/car.jpg" alt="logo"
    width={100} height={100} />
    <div className='hidden md:flex gap-5'>
      <h2 className='hover:bg-blue-500 p-2 
      px-3 cursor-pointer
      rounded-full hover:text-white'>Home</h2>
      <h2 className='hover:bg-blue-500 p-2 
      px-3 cursor-pointer
      rounded-full hover:text-white'>History</h2>
      <h2 className='hover:bg-blue-500 p-2 
      px-3 cursor-pointer
      rounded-full hover:text-white'>Contact Us</h2>
      <UserButton />
    </div>
    </div>
  )
}

export default Navbar