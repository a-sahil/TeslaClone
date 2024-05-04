import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { FiChevronDown } from "react-icons/fi";
const Model3 = () => {
  const router = useRouter();
  return (
    <div>
      <div>
      <img src="https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/xufyfcvqhmq36szytod7.jpg" alt="bg-img" className="h-screen w-full object-cover" />

      </div>

      <div className="absolute inset-x-0  top-[120%]  text-center">
        <h1 className="text-4xl font-bold"> Model 3</h1>
        <h4 className="text-2xl text-md">From $299/mo*</h4>
        <p className="text-sm p-2">
        Est. Lease Price Before Gas Savings
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-sm lg:flex-row relative inset-x-0 bottom-40">
        
          <button className="rounded-md  bg-[#f4f4f4] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-black" onClick={() => router.push('/Model3')}>
            Order Now
          </button>
        
        
          <button className="rounded-md bg-[#171A20A6] text-white w-96 lg:w-64 h-10 lg:mx-4 mt-2" onClick={() => router.push('/DemoDrive')}>
            Demo Drive
          </button>
        
      </div>
     
    </div>
  )
}

export default Model3