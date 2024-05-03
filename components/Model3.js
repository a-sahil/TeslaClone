import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { FiChevronDown } from "react-icons/fi";
const Model3 = () => {
  const router = useRouter();
  return (
    <div className='relative'>
      <div>
      <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-LHD-v2.jpg" alt="bg-img" className="h-screen w-full object-cover" />
      </div>

      <div className="absolute top-28 flex flex-col justify-center items-center left-[40rem] ">
  <h1 className="text-4xl font-semibold font-mono">Model 3</h1>
  <h3 className="text-2xl font-semibold text-[#171A20]">From $299/mo*</h3>
  <p className="text-[#171A20] text-sm ">Est. Lease Price Before Gas Savings</p>
</div>

<div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[18%]">
        
        <Link href="ModelY">
        <button className="rounded-md  bg-[#f4f4f4] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-black font-semibold" onClick={() => router.push('/ModelY')}>
            Order Now
          </button>
        </Link>  
        
        
          <button className="rounded-md bg-[#171A20A6] text-white w-96 lg:w-64 h-10 lg:mx-4 mt-2" onClick={() => router.push('/DemoDrive')}>
            Demo Drive
          </button>
      </div>

      <div>
      <p className="absolute bottom-20 font-light text-sm left-1/3 text-white">*Excludes taxes and fees with price subject to change. Available in select states. <Link href='#'><span className='underline underline-offset-4'>See Details</span></Link></p>
      </div>
     
    </div>
  )
}

export default Model3