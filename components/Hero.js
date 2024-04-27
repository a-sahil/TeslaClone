'use client'
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";

import { TfiClose } from "react-icons/tfi";
import { useRouter } from 'next/navigation';
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


const Hero = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(null);

  const toggleMenu = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center font-bold px-12 p-4 text-sm">
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
          <ul className="relative flex justify-center hover:cursor-pointer ">
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

  <div className="absolute top-40 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
  <h1 className="text-5xl font-light p-2 ml-8">Model Y</h1>
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

<div className="flex justify-end pr-8 pt-8 w-auto  bg-white ">
            <TfiClose onClick={handleNav} className="rounded p-1 hover:bg-black/5" size={28} />
          </div>

          <ul className="flex flex-col justify-center hover:cursor-pointer w-auto bg-white">
            {navItems.map((item, index) => (
              <li key={index} className="py-1 px-3 hover:rounded hover:bg-black/5">
                {item.label}
              </li>
            ))}
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

      <p className="absolute bottom-20 font-light text-sm left-1/3">*Price before incentives is $44,990, excluding taxes and fees. Subject to change.</p>
      <Link href="/">
         <p className="absolute bottom-16 font-light text-sm left-1/2 -ml-20 underline underline-offset-4 ">Learn about est. gas savings.</p>
      </Link>
    </div>
  );
};

export default Hero;