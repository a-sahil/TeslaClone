'use client'
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";

import { TfiClose } from "react-icons/tfi";
import { useRouter } from 'next/navigation'
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


const DemoDrive = () => {
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

   <div className="hidden lg:inline relative left-48">
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
          <ul className="flex justify-center relative left-[23rem] hover:cursor-pointer">
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
      <div className="absolute top-[150%] left-[28%]">
      <h1 className="text-4xl font-semibold ">Demo Drive Model Y</h1>
      <p className="text-light pb-4 pt-4">Experience Full Self-Driving (Supervised), Learn About Charging and Get All Your 
      Questions Answered
      </p>
      <h2 className="text-2xl font-semibold pt-6">Find Location and Time</h2>
      <p>Zip Code: Enter Zip Code</p>
      </div>
      
    <div className= "absolute top-[500%] left-[28%] ">
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

export default DemoDrive