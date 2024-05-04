'use client'
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";

import { TfiClose } from "react-icons/tfi";
import { useRouter } from 'next/navigation';






const Model3 = () => {
  const router = useRouter();
  

  return (
    <div>

      <div>
      <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-LHD-v2.jpg" alt="bg-img" className="relative h-screen w-full object-cover" />
      </div>
  <div className="absolute top-[55rem] left-2/4 transform -translate-x-1/2 -translate-y-1/2">
  <h1 className="font-GothamSSm-Book_Weeb.woff2 text-4xl font-bold p-2 px-4 ml-8">Model 3</h1>
  <h3 className="text-2xl font-semibold ml-10 text-ellipsis">From $29,490*</h3>
  <p className="font-light text-sm">After Federal Tax Credit & Est. Gas Savings</p>
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

      <p className="absolute bottom-20 font-light text-sm left-1/3">*Price before incentives is $44,990, excluding taxes and fees. Subject to change.</p>
      <Link href="/">
         <p className="absolute bottom-16 font-light text-sm left-1/2 -ml-20 underline underline-offset-4 ">Learn about est. gas savings.</p>
      </Link>
    </div>
  );
};

export default Model3;