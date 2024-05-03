import React from 'react'
import Link from 'next/link'

const Accessories = () => {
  return (
    <div>
      <div className="relative">
       <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg" alt="bg-img" className=" h-screen w-full object-cover" />
      </div>

      <div className="absolute top-[227rem] flex flex-col justify-center items-center left-[40rem] ">
        <h1 className='text-black text-5xl '>Accessorires</h1>
     </div>

<div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 top-[252rem]">
        
        <Link href="ModelY">
        <button className="rounded-md  bg-[#FFFFFF] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-[#393C41] font-semibold" onClick={() => router.push('/ModelY')}>
            Shop Now
          </button>
        </Link>  
        
      </div>

      <div className="absolute top-[259rem] left-1/3 flex space-x-4 py-6 text-sm font-semibold text-[#D0D1D2]">
        <Link href="#"><p>Tesla © 2024</p></Link>
        <Link href="#"><p>Privacy & Legal</p></Link>
        <Link href="#"><p>Vehicle Recalls</p></Link>
        <Link href="#"><p>Contact</p></Link>
        <Link href="#"><p>News</p></Link>
        <Link href="#"><p>Get Updates</p></Link>
        <Link href="#"><p>Locations</p></Link>
      </div>

    </div>
  )
}

export default Accessories