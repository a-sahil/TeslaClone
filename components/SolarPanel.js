import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SolarPanel = () => {
  const router = useRouter();
  return (
    <div>
      <div className="relative">
       <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop" alt="bg-img" className=" h-screen w-full object-cover" />
      </div>

      <div className="absolute top-[183rem] flex flex-col justify-center items-center left-[40rem] ">
        <h1 className='text-[#ffffff] text-5xl pb-2'>Solar Panels</h1>
       <Link href="#"> <p className='text-[#ffffff] text-1xl underline underline-offset-4'>Schedule a Virtual Consultation</p></Link>
     </div>

<div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 top-[210rem]">
        
        <Link href="ModelY">
        <button className="rounded-md  bg-[#f4f4f4cc] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-black font-semibold" onClick={() => router.push('/ModelY')}>
            Order Now
          </button>
        </Link>  
        
        
          <button className="rounded-md bg-[#171A2080] font-bold backdrop-blur-sm text-white w-96 lg:w-64 h-10 lg:mx-4 mt-2" onClick={() => router.push('/DemoDrive')}>
            Learn More
          </button>
      </div>

    </div>
    


  )
}

export default SolarPanel