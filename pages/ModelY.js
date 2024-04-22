import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PiGlobeLight } from "react-icons/pi";

const ModelY = () => {
  return (
    <div>
      <div className="relative right-44 bottom-20">
      <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY23,$PN01,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&" alt="bg-img" className="" />
      </div>
      <div className="absolute inset-x-0 top-6 ml-12 flex justify-between">
        <Link href="https://www.tesla.com/">
      
      <Image
        src="/tesla.svg"
        alt="Tesla Logo"
        width={120}
        height={100}
        className="relative "
      />
    
  </Link>

  <Link href="#">
  <div className="relative right-8 -top-2 flex text-sm px-2" >
  <PiGlobeLight className="w-8 h-6" />US
  </div>
  </Link>
    </div>

  <div className="absolute top-28 right-12 text-center ">
    <h1 className="text-4xl font-semibold px-2 py-6">Model Y</h1>
    <div>
      <div className="flex flex-row justify-between">
      <p className="text-2xl  font-sans font-semibold text-[#393C41] pl-4">260 <span className="text-base">mi</span></p>
      <p className="text-2xl  font-sans font-semibold text-[#393C41] pl-6">135 <span className="text-base">mph</span></p>
      <p className="text-2xl  font-sans font-semibold text-[#393C41] pl-3">6.6 <span className="text-base">sec</span></p>
      </div>
      
      <div className="flex space-x-10">
      <p className="text-sm text-[#5C5E62]">Range (EPA est.)</p>
      <p className="text-sm text-[#5C5E62] pr-5">Top Speed</p>
      <p className="text-sm text-[#5C5E62]">0-60 mph</p>
      </div>

      
      
    </div>
  </div>
        
     
    </div>
  )
}

export default ModelY