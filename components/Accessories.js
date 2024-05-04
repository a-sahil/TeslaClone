import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Accessories = () => {
  const router = useRouter();
  return (
    <div>
      <div className="relative bottom-48">
       <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg" alt="bg-img" className=" h-screen w-full object-cover" />
      </div>

      <div className="absolute inset-x-0  top-[517%]  text-center">
        <h1 className="text-5xl font-semibold text-black">Accessories</h1>
      </div>

      <div className="flex flex-col items-center justify-center text-sm lg:flex-row relative inset-x-0 bottom-64">
        
          <button className="rounded-md  bg-[#F4F4F4BF] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-black" onClick={() => router.push('/ModelX')}>
            Order Now
          </button>
      </div>

    </div>
    


  )
}

export default Accessories