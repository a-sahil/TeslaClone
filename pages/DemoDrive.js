'use client'
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";

import { TfiClose } from "react-icons/tfi";
import { useRouter } from 'next/navigation'


const DemoDrive = () => {
  const router = useRouter();
  return (
    
      <div>
        {/* for Navbar */}
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
          <ul className="flex justify-center hover:cursor-pointer">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5 ">
              Vehicle
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
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
          <ul className="flex justify-center hover:cursor-pointer">
            <Link href="/">
              <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <RxQuestionMarkCircled className="w-6 h-6" />
              </li>
            </Link>
            
            <Link href="/">
               <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <CiGlobe className="w-6 h-6" />
               </li>
            </Link>
            
            <Link href="/">
               <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <IoMdContact className="w-6 h-6" /> 
               </li>
            </Link>
            
          </ul>
        </div>
      </div>
    

    <div>
      <div className="absolute top-[16%] left-[28%]">
      <h1 className="text-4xl font-semibold ">Demo Drive Model Y</h1>
      <p className="text-light pb-4 pt-4">Experience Full Self-Driving (Supervised), Learn About Charging and Get All Your 
      Questions Answered
      </p>
      <h2 className="text-2xl font-semibold pt-6">Find Location and Time</h2>
      <p>Zip Code: Enter Zip Code</p>
      </div>
      
    <div className= "absolute top-[50%] left-[28%] ">
      <h1 className="text-3xl font-bold  text-gray-800 mb-4 ">Contact Information</h1>
      <form  className="space-y-6 ">
        <div className="flex flex-row space-x-8">
        <div>
          <label htmlFor="firstName" className="block font-bold mb-2 text-[#5C5E62] font-sans">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className=" border rounded-md py-2 px-14  bg-[#F4F4F4]"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block font-bold mb-2 text-[#5C5E62] font-sans">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="border rounded-md py-2 px-14 bg-[#F4F4F4]"
            required
          />
        </div>
        </div>
        
        <div className="flex flex-row space-x-8">
        <div>
          <label htmlFor="email" className="block font-bold mb-2 text-[#5C5E62] font-sans">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className=" border rounded-md py-2 px-14 bg-[#F4F4F4]" 
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block font-bold mb-2 text-[#5C5E62] font-sans">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className=" border rounded-md py-2 px-14 bg-[#F4F4F4]"
            placeholder="+91 123456789"
            required
          />
        </div>
        </div>

        <div>
          <p className="text-sm font-light text-gray-500 py-6">
          By continuing, I agree to the <Link href="#"><span className="underline" onClick={() => router.push('/Term')}>Terms and Conditions</span></Link> 
          </p>
          <button
            type="submit"
            className="bg-[#3E61E1] hover:bg-blue-800  text-white font-bold py-2 px-20 rounded mb-6"
          >
            Schedule Demo Drive
          </button>
        </div>
      </form>
      <div className="flex space-x-4 py-6 text-sm font-light text-gray-600 mb-1 ml-20">
        <Link href="#"><p>Tesla © 2024</p></Link>
        <Link href="#"><p>Privacy & Legal</p></Link>
        <Link href="#"><p>Contact</p></Link>
        <Link href="#"><p>Careers</p></Link>
        <Link href="#"><p>Get Newsletter</p></Link>
        <Link href="#"><p>Locations</p></Link>
      </div>
    </div>
    </div>

      
        

    </div>
  )
}

export default DemoDrive