import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const ModelX = () => {
  const router = useRouter();
  return (
    <div>
      <div className="relative">
       <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg" alt="bg-img" className=" h-screen w-full object-cover" />
      </div>

      <div className="absolute top-[140rem] flex flex-col justify-center items-center left-[43rem] ">
  <h1 className="text-4xl font-semibold font-GothamSSm">Model S</h1>
  <h3 className="text-2xl font-semibold text-[#171A20]">From $66,490*</h3>
  <p className="text-[#171A20] text-sm ">After Est. Gas Savings</p>
</div>

<div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 top-[165rem]">
        
        <Link href="ModelY">
        <button className="rounded-md  bg-[#f4f4f4] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-black font-semibold" onClick={() => router.push('/ModelY')}>
            Order Now
          </button>
        </Link>  
        
        
          <button className="rounded-md bg-[#171A20A6] text-white w-96 lg:w-64 h-10 lg:mx-4 mt-2" onClick={() => router.push('/DemoDrive')}>
            Demo Drive
          </button>
      </div>

      <div className='absolute top-[170rem] left-[33rem]'>
      <p className="  text-xs text-center text-[#171A20] font-semibold">*Price before incentives and savings is $77,990, excluding taxes and fees. Subject to change.
     <br /> <Link href='#'><span className='underline underline-offset-4'>Learn about est. gas savings.</span></Link></p>
      </div>

    </div>
    


  )
}

export default ModelX