import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsGlobe2 } from "react-icons/bs";

const SignIn = () => {
  return (
    <div className='relative w-full h-screen '>
      <div className='relative top-4 flex justify-between'>
      <Link href="https://www.tesla.com/">
            <Image
              src="/tesla.svg"
              alt="Tesla Logo"
              width={120}
              height={100}
              className="relative left-7"
            />
          </Link>
          <div className='flex mr-8'>
          <BsGlobe2 className="w-6 h-5" />
          <span className=''>en-US</span>
          </div>
      </div>

      <div>
        <h2 className=' text-3xl font-medium relative top-20 ml-[38rem]'>Sign In</h2>
        <div className='relative ml-[38rem] top-24'>
        <label htmlFor="email" className="block font-bold mb-2 text-[#5C5E62] font-sans">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className=" border rounded-md py-2 px-20 bg-[#F4F4F4]" 
            required
          />
        </div>
        <button className='relative mt-32 ml-[38rem] bg-[#a5bdff] px-[10rem] py-2 rounded text-white cursor-not-allowed'>Next</button>
        <button className='relative mt-5 ml-[45rem] underline'>Trouble Signing In?</button>
      </div>
      <div className="relative">
  <span className="line-clamp-2 line-through line-break mt-10 ml-[47rem]">Or</span>
  
</div>

      <button className='relative mt-12 ml-[38rem] bg-[#f4f4f4] px-[8rem] py-2 rounded text-black cursor-not-allowed mb-9'>Create Account</button>
    </div>
  )
}

export default SignIn