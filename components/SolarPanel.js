import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SolarPanel = () => {
  const router = useRouter();
  return (
    <div>
      <div className="relative bottom-36">
       <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop" alt="bg-img" className=" h-screen w-full object-cover" />
      </div>

      <div className="absolute inset-x-0  top-[420%]  text-center">
        <h1 className="text-5xl font-semibold text-[#FFFFFF]">Solar Panel</h1>
        <p className="text-[#FFFFFF] pt-2 underline underline-offset-4">
        Schedule a Virtual Consultation
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-sm lg:flex-row relative inset-x-0 bottom-64">
        
          <button className="rounded-md  bg-[#F4F4F4BF] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-black" onClick={() => router.push('/ModelX')}>
            Order Now
          </button>
        
        
          <button className="rounded-md bg-[#171A2080] text-white w-96 lg:w-64 h-10 lg:mx-4 mt-2" onClick={() => router.push('/DemoDrive')}>
            Learn More
          </button>
      </div>
    </div>
    


  )
}

export default SolarPanel