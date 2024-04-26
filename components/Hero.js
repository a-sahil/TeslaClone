'use client'
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";

import { TfiClose } from "react-icons/tfi";
import { useRouter } from 'next/navigation'
import { VscAccount } from "react-icons/vsc";



const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter()

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center font-bold px-12 p-4 text-sm ">
        <div>
        <Link href="https://www.tesla.com/">
      
      <Image
        src="/tesla.svg"
        alt="Tesla Logo"
        width={120}
        height={100}
        className="relative "
      />
    
  </Link>
        </div>
        <div className="hidden lg:inline">
          <ul className="flex justify-center hover:cursor-pointer text-base text-gray-700">
            <li className="font-GothamSSm py-1 px-3 hover:rounded hover:bg-black/5 "  onMouseEnter={toggleMenu}
             onMouseLeave={toggleMenu}>
              Vehicles
            </li>
            
            <li className=" py-1 px-3 hover:rounded hover:bg-black/5"  onMouseEnter={toggleMenu}
        onMouseLeave={toggleMenu}>
              Energy
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Charging
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Discovery
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Shop
            </li>
          </ul>
        </div>
        <div className="hidden lg:inline">
          <ul className="flex justify-center hover:cursor-pointer ">
            <Link href="/">
              <li className="py-1 px-2 hover:rounded hover:bg-black/5">
              <RxQuestionMarkCircled className="w-6 h-6" />
              </li>
            </Link>
            
            <Link href="/">
               <li className="py-1 px-2 hover:rounded hover:bg-black/5">
              <CiGlobe className="w-6 h-6" />
               </li>
            </Link>
            
            <Link href="/">
               <li className="py-1 px-2 hover:rounded hover:bg-black/5">
              <IoMdContact className="w-6 h-6" /> 
               </li>
            </Link>
            
          </ul>
        </div>

  <div className="absolute top-40 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
  <h1 className="text-5xl font-light p-2 ml-8 font-GothamSSm-Book_web.woff2 ">Model Y</h1>
  <h3 className="text-2xl font-semibold ml-10 text-ellipsis">From $29,490*</h3>
  <p className="font-light text-sm">After Federal Tax Credit & Est. Gas Savings</p>
</div>



        <div className="lg:hidden">
          <button className="inline-flex items-center rounded-md py-2 px-4 p-2 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10" onClick={handleNav}>
            Menu
          </button>
        </div>

        <div
          className={
            nav
              ? " absolute right-0 top-0 w-80 h-full z-10"
              : "fixed right-[-100%]"
          }
        >

<div className="flex justify-end pr-8 pt-8">
            <TfiClose onClick={handleNav} className="rounded p-1 hover:bg-black/5" size={28} />
          </div>

          <ul className="pt-8 px-6 mr-32 bg-white">
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                Vehicle
            </li>
            </Link>
            
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                 Energy
            </li>
            </Link>
            
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                Charging
            </li>
            </Link>
            
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                 Discover
            </li>
            </Link>
            
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                Shop
            </li>
            </Link>

            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                Support
            </li>
            </Link>
            
            <Link href="/">
               <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <CiGlobe className="w-6 h-6" />
               </li>
            </Link>

            <Link href="/">
               <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <VscAccount className="w-6 h-6" />
               </li>
            </Link>
          </ul>
        </div>
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

      <p className="absolute bottom-20 font-light text-sm left-1/3 ">*Price before incentives is $44,990, excluding taxes and fees. Subject to change.</p>
      <Link href="/">
         <p className="absolute bottom-16 font-light text-sm left-1/2 -ml-20 underline underline-offset-4 ">Learn about est. gas savings.</p>
      </Link>
    </div>
  );
};

export default Hero;