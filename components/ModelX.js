import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const ModelX = () => {
  const router = useRouter();
  return (
    <div>
      <div className="relative bottom-12 ">
       <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD" alt="bg-img" className=" h-screen w-full object-cover" />
      </div>

      <div className="absolute inset-x-0  top-[212%]  text-center">
        <h1 className="text-4xl font-bold"> Model X</h1>
        <h4 className="text-2xl text-md">From $63,990*</h4>
        <p className="text-sm p-1 text-light">
        After Federal Tax Credit & Est. Gas Savings
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-sm lg:flex-row relative inset-x-0 bottom-64">
        
          <button className="rounded-md  bg-[#F4F4F4BF] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-black" onClick={() => router.push('/ModelX')}>
            Order Now
          </button>
        
        
          <button className="rounded-md bg-[#171A20A6] text-white w-96 lg:w-64 h-10 lg:mx-4 mt-2" onClick={() => router.push('/DemoDrive')}>
            Demo Drive
          </button>

          <p className="absolute top-20 font-light text-sm text-white left-1/3">*Price before incentives is $44,990, excluding taxes and fees. Subject to change.</p>
      <Link href="/">
         <p className="absolute top-24 font-light text-sm text-white left-1/2 -ml-20 underline underline-offset-4 ">Learn about est. gas savings.</p>
      </Link>

        
      </div>
    </div>
    


  )
}

export default ModelX