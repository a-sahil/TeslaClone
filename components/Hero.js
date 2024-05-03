'use client'
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";

import { TfiClose } from "react-icons/tfi";
import { useRouter } from 'next/navigation';
import modelsImage from "../public/model-s.jpg";
import modelxImage from  "../public/model-x.jpg";
import modelyImage from   "../public/model-y.jpg";
import model3Image from  "../public/model-4.jpg";


const navItems = [
  {
    label: "Vehicles",
    label1:"Vehicles",
    button:"button",
    link: "#",
    children: [
      {
        label: "Model S",
        label1:"Inventory",
        button:"Learn",
        button2:"More",
        link: "#",
        iconImage:modelsImage
      },
      {
        label: "Model X",
        label1:"Used Cars",
        button:"Learn",
        button2:"More",
        link: "#",
        iconImage: modelxImage
      },
      {
        label: "Model Y",
        label1:"Demo Drive",
        button:"Learn",
        button2:"More",
        link: "#",
        iconImage:modelxImage
      },
      {
        label: "Model 3",
        label1:"Trade In",
        button:"Learn",
        button2:"More",
        link: "#",
        iconImage: model3Image
      },
      {
        
        label1:"Demo Drive",
       
      },
      {
        
        label1:"Demo Drive",
        
      },
      {
       
        label1:"Demo Drive",
        
        
      },
    ]
  },
  {
    label: "Energy",
    link: "#",
    children: [
      {
        label: "Solar panel",
        label1:"Schedule a Consultation",
        link: "#"
      },
      {
        label: "Solar roof",
        label1:"Why Solar",
        link: "#"
      },
      {
        label: "Powerwall",
        label1:"Incentives",
        link: "#"
      },
      {
        label: "Megapack",
        label1:"Support",
        link: "#"
      },
      {
        label1:"Partner With Tesla"
      },
      {
        label1:"Commercial"
      },
      {
        label1:"Utilites"
      }
    ]
  },
  {
    label: "Charging",
    link: "#",
    children: [
      {
        label: "Charging",
        label1:"Help me charge",
        link: "#"
      },
      {
        label: "Home Charging",
        label1:"Charging Calculator",
        link: "#"
      },
      {
        label: "Super Charging",
        label1:"Charging With NACS",
        link: "#"
      },
      {
        label1:"Supercharger Voting"
      },
      {
        label1:"Host a Supercharger"
      },{
        label1:"Commercial Charging"
      },
      {
        label1:"Host Wall Connectors"
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
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center font-bold px-12 p-4 text-sm font-GothamSSm">
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
        {navItems.map((item, index) => (
  <React.Fragment key={index}>
    {index === isOpen && isOpen !== null && (
      <div
        className="absolute -top-2 flex w-full h-[27rem] left-0 right-0 z-10 mt-2 bg-white border border-gray-200 rounded shadow-md transition ease-in duration-700"
        onMouseEnter={() => setIsOpen(index)} 
        onMouseLeave={() => setIsOpen(null)}   
      >
        <div className="">
          <ul className="relative flex top-28 left-40 ease-in durration 300">
            {item.children && item.children.map((child, childIndex) => (
              <li key={childIndex} className="px-4 py-4">
                {child.iconImage && (
                  <Image
                    src={child.iconImage}
                    alt={child.label}
                    width={100}
                    height={70}
                    className="rounded-full"
                  />
                )}
                <span className="relative left-4 text-semibold text-lg">{child.label}</span>
                {child.button && (
                  <button className="relative top-8 right-16 px-2 py-1 group-hover:underline rounded mt-3">{child.button}</button>
                )}
                {child.button2 && (
                  <button className="relative top-8 right-16 px-2 py-1 group-hover:underline rounded mt-3">{child.button2}</button>
                )}
              </li>
            ))}
          </ul>

          {/* Assuming you want to render a list of labels here */}
          <div className="absolute left-[70rem] top-28">
            <ul className="">
              {item.children && item.children.map((child, labelIndex) => (
                <li key={labelIndex} className="text-gray-600 font-14px py-1 ">
                  {item.children.some(child => child.label1) && (
                    <hr className="relative border-b rotate-90 right-28 border-gray-300 w-full  top-4 custom-hr" />
                  )}
                  {child.label1}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )}
  </React.Fragment>
))}

   <div className="hidden lg:inline ">
          <ul className=" z-40 flex justify-center left-6 hover:cursor-pointer  text-lg font-normal text-[#171A20] ">
            {navItems.map((item, index) => (
              <li
                key={item.label}
                className="  z-50 py-1 px-4 hover:rounded hover:bg-gray-100 "
                onMouseEnter={() => toggleMenu(index)}
                onMouseLeave={() => toggleMenu(null)}
              >
                      {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:inline">
          <ul className="flex justify-center  hover:cursor-pointer">
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
            
            <Link href="/SignIn">
               <li className="py-1 px-2 hover:rounded hover:bg-black/5">
              <IoMdContact className="w-6 h-6" /> 
               </li>
            </Link>
            
          </ul>
        </div>

  <div className="absolute top-40 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
  <h1 className="font-GothamSSm-Book_Weeb.woff2 text-4xl font-bold p-2 px-4 ml-8">Model Y</h1>
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