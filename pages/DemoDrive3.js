'use client'
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";

import { TfiClose } from "react-icons/tfi";
import { useRouter } from 'next/navigation'
import todoImage from "../public/model-s.jpg";
import calendarImage from  "../public/model-x.jpg";
import remindersImage from   "../public/model-y.jpg";
import planningImage from  "../public/model-4.jpg";

const navItems = [
  {
    label: "Vehicles",
    link: "#",
    children: [
      {
        label: "Model S",
        link: "#",
        iconImage:todoImage
      },
      {
        label: "Model X",
        link: "#",
        iconImage: calendarImage
      },
      {
        label: "Model Y",
        link: "#",
        iconImage:remindersImage
      },
      {
        label: "Model 3",
        link: "#",
        iconImage: planningImage
      }
    ]
  },
  {
    label: "Energy",
    link: "#",
    children: [
      {
        label: "Solar panel",
        link: "#"
      },
      {
        label: "Solar roof",
        link: "#"
      },
      {
        label: "Powerwall",
        link: "#"
      },
      {
        label: "Megapack",
        link: "#"
      }
    ]
  },
  {
    label: "Charging",
    link: "#",
    children: [
      {
        label: "Charging",
        link: "#"
      },
      {
        label: "Home Charging",
        link: "#"
      },
      {
        label: "Super Charging",
        link: "#"
      }
    ]
  },
  {
    label: "Discover",
    link: "#",
    children: [
      {
        label: "Resources",
        link: "#"
      },
      {
        label: "Demo Drive",
        link: "#"
      },
      {
        label: "Insurance",
        link: "#"
      },
      {
        label: "Video Guides",
        link: "#"
      },
      {
        label: "Custom Stories",
        link: "#"
      },
      {
        label: "Events",
        link: "#"
      },
    ]
  },
  {
    label: "Shop",
    link: "#",
    children: [
      {
        label: "Charging",
        link: "#"
      },
      {
        label: "Vehicles Accessories",
        link: "#"
      },
      {
        label: "Apparel",
        link: "#"
      },
      {
        label: "Life Style",
        link: "#"
      }
    ]
  }
];

const DemoDrive3 = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(null);

  const toggleMenu = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };
  return (
    
      <div>
        {/* for Navbar */}
        <div className=" top-0 left-0 right-0 flex justify-between items-center font-bold px-12 p-4 text-sm">
        <div>
          <Link href="https://www.tesla.com/">
            <Image
              src="/tesla.svg"
              alt="Tesla Logo"
              width={120}
              height={100}
              className="relative"
            />
          </Link>
        </div>
        <div className="hidden lg:inline ">
          <ul className="relative flex justify-center left-48 hover:cursor-pointer text-lg font-normal text-[#171A20] ">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative py-1 px-3 hover:rounded hover:bg-black/5"
                onMouseEnter={() => toggleMenu(index)}
                onMouseLeave={() => toggleMenu(null)}
              >
                {item.label}
                {index === isOpen && isOpen !== null && (
                  <div className="absolute flex top-full w-auto mt-2 bg-white border border-gray-200 rounded shadow-md">
                    <ul className="">
                      {item.children && item.children.map((child, childIndex) => (
                        <li key={childIndex} className="px-4 py-2">
                          {child.iconImage && (
                            <Image
                              src={child.iconImage}
                              alt={child.label}
                              width={100}
                              height={70}
                            />
                          )}

                          {child.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:inline">
          <ul className="flex justify-center relative left-[27rem] hover:cursor-pointer">
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
        <div/>
    

    <div>
      <div className="absolute top-[16%] left-[28%]">
      <h1 className="text-4xl font-semibold ">Demo Drive Model 3</h1>
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
    </div>
  )
}

export default DemoDrive3