import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PiGlobeLight } from "react-icons/pi";
import { useState } from 'react';
import { Check } from 'react-feather';


  

const ModelX = () => {

  const [isButton1Active, setIsButton1Active] = useState(false);

  const handleButtonClick = () => {
    setIsButton1Active(!isButton1Active);
  };



  return (
    <div>
      <div className="relative right-44 bottom-20">
      <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PN01,$WX00,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=2&crop=0,0,0,0&" alt="bg-img" className="fixed" />
      </div>
      <div className="fixed inset-x-0 top-6 ml-12 flex justify-between ">
  <Link href="https://www.tesla.com/">
    <Image
      src="/tesla.svg"
      alt="Tesla Logo"
      width={120}
      height={100}
      className="relative"
    />
  </Link>

  <Link href="#">
    <div className="relative right-8 -top-2 flex text-sm px-2">
      <PiGlobeLight className="w-8 h-6" />US
    </div>
  </Link>
</div>


  <div className="absolute top-28 right-12 text-center ">
    <h1 className="text-4xl font-semibold px-2 py-6">Model X</h1>
    <div>
      <div className="flex flex-row justify-between">
      <p className="text-2xl  font-sans font-semibold text-[#393C41] pl-4">335 <span className="text-base">mi</span></p>
      <p className="text-2xl  font-sans font-semibold text-[#393C41] pl-6">149 <span className="text-base">mph</span></p>
      <p className="text-2xl  font-sans font-semibold text-[#393C41] pl-3">3.8 <span className="text-base">sec</span></p>
      </div>
      
      <div className="flex space-x-10">
      <p className="text-sm text-[#5C5E62]">Range (EPA est.)</p>
      <p className="text-sm text-[#5C5E62] pr-5">Top Speed</p>
      <p className="text-sm text-[#5C5E62]">0-60 mph</p>
      </div>

  <div className="flex justify-between mt-4">
    <button className="text-[#5C5E62] hover:underline" onClick={handleButtonClick}>Cash</button>
    <div className="text-left absolute top-52 ">
    Include $7,500 Federal Tax Credit and est.  <br/> 5-year gas savings of $6,500.  
    <span className="underline  cursor-pointer hover:underline-offset-2 ">Customize</span>
    </div>
 
    <div className="absolute top-72 ">
    <div className="border-2 border-gray-300 px-24 py-1   flex flex-col justify-between mb-4 rounded hover:border-blue-600 hover:border-4">
  <span className="">All-Wheel Drive</span>
  <span className="ml-4">$42990</span>
</div>

<div className="border-2 border-gray-300 px-24 py-1 flex flex-col justify-between mb-4 rounded hover:border-blue-600 hover:border-4">
  <span className="">Plaid</span>
  <span className="ml-4">$42990</span>
</div>

    </div>

    
    

    <button className="text-[#5C5E62] hover:underline" onClick={handleButtonClick}>Lease</button>
    <button className="text-[#5C5E62] hover:underline" onClick={handleButtonClick}>Finance</button>
  </div>
  <hr className="border-t-2 border-black" />
      
      <button className="relative top-[300px] bg-gray-100 hover:bg-[#eeeff1]  px-6 rounded  transition delay-200 duration-200 ease-in-out">Feature Detail</button>

      <div className="relative top-[400px]">
       <p className="text-2xl font-semibold mb-7">Paint</p>
       <div className="relative flex space-x-4 left-9 mb-7">
       <img src="https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3_/UI/Paint_StealthGrey.png?" alt="" width={40} height={30} />
       <img src="https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/Paint_White.png?" alt="" width={40} height={30} />
       <img src="https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/Paint_Blue.png?" alt="" width={40} height={30} />
       <img src="https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/Paint_Black.png?" alt="" width={40} height={30} />
       <img src="https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/Paint_Red.png?" alt="" width={40} height={30} />
       </div>
       <p> Stealth Grey Included</p>

       <div>
        <p className="text-3xl mt-24 mb-6">Wheels</p>
        <div className="flex space-x-4 relative left-28 mb-6" >
        <img src="https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODELY/UI/gemini_wheels.png?" alt="" width={40} height={30} />
        <img src="https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODELY/UI/induction_wheels.png?" alt="" width={40} height={30} />
        </div>

        <p className="font-semibold mb-3">20'' Cyberstream Wheels<span className="text-gray-500">  $2,000 </span></p>
        <p className="text-gray-500 text-sm mb-2">All-Season Tires</p>
        <p className="text-gray-500 text-sm mb-2">Range (EPA est.) : 335mi</p>
        <button className="bg-gray-200 border px-6 rounded hover:bg-[#eeeff1] transition delay-200 duration-200 ease-in-out mb-32">Learn More</button>
       </div>

       <div>
         <p className="text-3xl">Tow Package</p>
         <span>Included</span>
         <p className="text-slate-600 mb-12">High strength, Class II steel tow bar. Capable <br/> of towing up to 5,000 lbs.</p>
        
       </div>

       <div>
        <p className="text-3xl font-semibold mb-6">Interior</p>
        <div className="flex space-x-4 relative left-28 mb-6">
        <img src="https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/ui_swat_int_in3pb.png?" alt="" width={40} height={30} />
        <img src="https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/ui_swat_int_white.png?" alt="" width={40} height={30} />
        </div>
        <p className="text-black mb-12">All Black <span className="text-gray-500 ">   Included</span></p>
       </div>

      <div className="mb-10">
        <p className="text-2xl font-semibold mb-6" >Seating Layout</p>
        <div className="border-4 border-blue-700  relative left-32 bg-gray-200  font-bold text-2xl rounded-full w-12 h-12 flex items-center justify-center mb-6">5</div>
        <p className="text-black font-bold mb-6">Five Seats <span className="text-gray-500 ">   Included</span></p>
        <p className="text-[#3E6AE1] font-semibold cursor-pointer hover:text-[#40548a]">View Seating Layouts</p>
      </div>

      <div className="mb-28">
        <h2 className="text-2xl mb-5">Steering Control</h2>
        <div className="flex ml-28 mb-5">
        <img src="https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODELS/UI/ui_swat_s-wheel-b.svg?" alt="" className="w-12 h-12 " />
        <img src="https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODELS/UI/ui_swat_s-wheel-y.svg?" alt="" className="w-12 h-12 " />
        </div>
        <p className="font-semibold mb-6">Steering Wheel <span className="text-gray-500 ">   Included</span></p>
        <button className="text-sm text-[#393C41] bg-gray-100 px-7 py-1 rounded hover:bg-[#eeeff1] transition delay-200 duration-200 ease-in-out">Feature Detail</button>
      </div>

      <div class="relative text-center left-2">
    <h1 class="text-3xl mb-2">Full Self-Driving <br/> Capability</h1>
    <span class="block text-[#393C41] mb-3">$2000</span>
    <p class="text-[#393C41] mb-5 text-left ">Receive a 30 day trial of Full Self-Driving <br /> Capability with a new vehicle purchase.</p>
    <p class="text-[#393C41] text-left">Your car will be able to drive itself almost <br /> anywhere with minimal driver intervention <br /> and will continuously improve</p>

   
    <ul class=" relative left-3 mt-4 list-inside list-disc text-left text-[#393C41] mb-10">
        <li className="">Navigate on Autopilot</li>
        <li className="">Auto Lane Change</li>
        <li className="">Autopark</li>
        <li className="">Summon</li>
        <li className="">Smart Summon</li>
        <li className="">Autosteer on city streets</li>
        <li className="">Traffic Light and Stop Sign Control</li>
    </ul> 
  
    

    <p class="text-left text-[#5C5E62] text-xs mb-16">
    The currently enabled features require active driver <br/>
    supervision and do not make the vehicle autonomous. <br/>
    The activation and use of these features are <br/> 
    dependent on achieving reliability far in excess of <br/>
    human drivers as demonstrated by billions of miles of <br/> 
    experience, as well as regulatory approval, which may <br/>
    take longer in some jurisdictions. As these self-driving <br/>
    features evolve, your car will be continuously <br/>
     upgraded through over-the-air software updates.
    </p>

    <div className="flex justify-between mb-24">
    <button className="bg-[#3E6AE1] text-white hover:bg-[#2147ad] text-sm px-14 py-1 rounded transition delay-200 duration-200 ease-in-out">Add</button>
    <button className="text-sm text-[#393C41] bg-gray-100 px-7 py-1 rounded hover:bg-[#eeeff1] transition delay-200 duration-200 ease-in-out">Feature Detail</button>
</div>
</div>

      <div className="mb-28">
        <h1 className="text-3xl text-[#171A20] mb-8">Charging</h1>
        <div className="flex items-center">
        <p className="bg-blue-700  px-2 text-center rounded-xl text-white text-xs mb-14">i</p>
        <p className="ml-2 text-left mb-8">Home charging equipment is not <br/> included</p>
    </div>

    <div className="flex items-start mb-6">
  <input type="checkbox" id="checkbox1" name="checkbox1" className="w-6 h-6 border-gray-300 border- rounded-md cursor-pointer hover:bg-black" />
  <label htmlFor="checkbox1" className="ml-2 text-[#5C5362] cursor-pointer hover:text-black">Wall Connector</label>
  <span className="ml-36 cursor-pointer text-[#5C5362] hover:text-black">$400</span>
  <br />
</div>

<div className="flex items-start mb-8">
  <input type="checkbox" id="checkbox2" name="checkbox2" className="w-6 h-6 border-gray-300 rounded-md cursor-pointer" />
  <label htmlFor="checkbox2" className="ml-2 cursor-pointer text-[#5C5362] hover:text-black">Mobile Connector</label>
  <span className="ml-32 cursor-pointer text-[#5C5362] hover:text-black">$300</span>
</div>

<button className="bg-[#F4F4F4] text-[#393C41] text-sm border px-8 py-1 rounded  hover:bg-[#eeeff1] transition delay-200 duration-200 ease-in-out">Learn More</button>

</div>



<div className="mb-28">
        <h1 className="text-3xl text-[#171A20] mb-8">Accessories</h1>
    <div className="flex items-start mb-6">
  <input type="checkbox" id="checkbox1" name="Model Y All-Weather Interior Liners" className="w-6 h-6 border-gray-300 border- rounded-md cursor-pointer hover:bg-black" />
  <label htmlFor="checkbox1" className="ml-2 text-[#5C5362] cursor-pointer hover:text-black text-left">Model Y All-Weather <br/> Interior Liners</label>
  <span className=" cursor-pointer text-[#5C5362] hover:text-black ml-24">$400</span>
  <br />
</div>

<div className="flex items-start mb-8">
  <input type="checkbox" id="checkbox2" name="Model Y Sunshade" className="w-6 h-6 border-gray-300 rounded-md cursor-pointer" />
  <label htmlFor="checkbox2" className="ml-2 cursor-pointer text-[#5C5362] hover:text-black">Model Y Sunshade</label>
  <span className=" cursor-pointer text-[#5C5362] hover:text-black ml-28">$300</span>
</div>

<div className="flex items-start mb-8">
  <input type="checkbox" id="checkbox2" name="Model Y Center Console Trays" className="w-6 h-6 border-gray-300 rounded-md cursor-pointer" />
  <label htmlFor="checkbox2" className="ml-2 cursor-pointer text-[#5C5362] hover:text-black text-left">Model Y Center Console <br/> Trays</label>
  <span className=" cursor-pointer text-[#5C5362] hover:text-black ml-20">$35</span>
</div>

<button className="bg-[#F4F4F4] text-[#393C41] text-sm border px-8 py-1 rounded  hover:bg-[#eeeff1] transition delay-200 duration-200 ease-in-out">Learn More</button>

</div>

   <div className="mb-44">
    <h1 className="text-3xl mb-4">Order Your Model X</h1>
    <p className="">Est. Delivery: Apr – May 2024</p>
    <Check className="text-[#12bb00] mt-6" />
    <p className="text-left -mt-6 ml-7 mb-6"> Your design qualifies for a $7,500 <br/> federal tax credit for eligible buyers. <br/> <span className="underline cursor-pointer ">See Details</span> </p>

    <button className="bg-[#3E6AE1] px-28 hover:bg-[#2045ab] transition delay-200 duration-200 ease-in-out  py-2 rounded text-white mb-72">Continue</button>
  </div>   

{/*  */}
     </div>
    
    </div>
    
  </div>
        
    </div>
  )
}


export default ModelX