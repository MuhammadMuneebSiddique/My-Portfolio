"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {

    const [isMenu , setIsMenu] = useState(false)

  return (
    <>
        <section className='desktop-header relative text-[10px] flex justify-between items-center px-[10rem] py-[2rem]'>
            <div>
                <h2 className='.websiteN text-[#0DB760] font-poppines text-[3.2em] font-semibold'>Portfolio..</h2>
            </div>
            <div className='nav-bar'>
                <ul className='flex gap-[2em] text-[1.6em] font-inter list-none capitalize font-medium'>
                    <Link href="/"><li>home</li></Link>
                    <Link href="#about"><li>about</li></Link>
                    <Link href="#skill"><li>skill</li></Link>
                    <Link href="#project"><li>projects</li></Link>
                    <Link href="#contact"><li>contact</li></Link>
                </ul>
            </div>
            <div>
                <a href={"/MuhammadMuneebResume.pdf"} target='_blank' download ><button className='CV-btn capitalize bg-transparent hover:bg-[#0DB760] hover:text-[#fff] font-medium text-[1.6em] px-[1.5em] py-[0.6em] border-[0.15em] rounded-[0.3em] border-[#0DB760]'>dowload CV</button></a>
            </div>
            <div className='w-[0.5em] h-[0.5em] bg-[#0DB760] absolute top-[1em] left-[25em] rounded-full'></div>
            <div className='w-[1em] h-[1em] bg-[#FF0000] absolute top-[12em] left-[3em] rounded-full'></div>
            <div className='w-[1.1em] h-[1.1em] bg-[#0047FF] absolute top-[5em] left-[30em] rounded-full'></div>
            <div className='w-[1.5em] h-[1.5em] bg-[#F9F047] absolute top-[6em] left-[40em] rounded-full'></div>
            <div className='w-[0.8em] h-[0.8em] bg-[#0047FF] absolute top-[2em] left-[5em] rounded-full'></div>
            <div className='w-[0.5em] h-[0.5em] bg-[#4D4D4D] absolute top-[10em] left-[24em] rounded-full'></div>
            <div className='w-[0.8em] h-[0.8em] bg-[#0047FF] absolute top-[16em] left-[45em] rounded-full'></div>
            <div className='w-[0.8em] h-[0.8em] bg-[#4D4D4D] absolute top-[1em] left-[47em] rounded-full'></div>
            <div className='w-[0.5em] h-[0.5em] bg-[#0DB760] absolute top-[10em] left-[50em] rounded-full'></div>
            <div className='w-[1em] h-[1em] bg-[#0DB760] absolute top-[17em] left-[25em] rounded-full'></div>
            <div className='w-[0.8em] h-[0.8em] bg-[#FF0000] absolute top-[13em] left-[35em] rounded-full'></div>
        </section>
        <section className='mobile-header bg-[#fff] h-full relative justify-between px-[5rem] py-[3rem] hidden'>
            <div className='w-[1em] h-[1em] bg-[#0DB760] absolute top-[13em] left-[17em] rounded-full'></div>
            <div className='w-[0.5em] h-[0.5em] bg-[#0DB760] absolute top-[1em] left-[25em] rounded-full'></div>
            <div className='w-[1em] h-[1em] bg-[#FF0000] absolute top-[12em] left-[3em] rounded-full'></div>
            <div className='w-[1.1em] h-[1.1em] bg-[#0047FF] absolute top-[5em] left-[30em] rounded-full'></div>
            <div className='w-[1.5em] h-[1.5em] bg-[#F9F047] absolute top-[6em] left-[40em] rounded-full'></div>
            <div className='w-[0.8em] h-[0.8em] bg-[#0047FF] absolute top-[2em] left-[5em] rounded-full'></div>
            <div className='w-[0.5em] h-[0.5em] bg-[#4D4D4D] absolute top-[10em] left-[24em] rounded-full'></div>
            <div>
                <h2 className='.websiteN text-[#0DB760] font-poppines text-[3.2em] font-semibold'>Portfolio..</h2>
            </div>
            <div>
                <IoMdClose className={`text-[4em] ${isMenu ? "block" : "hidden"}`} onClick={()=>setIsMenu(!isMenu)} />
                <RiMenu3Line className={`text-[4em] ${isMenu ? "hidden" : "block"} font-semibold`} onClick={() => setIsMenu(!isMenu)}/>
            </div>
            <div className={`w-[33em] ${isMenu ? "block" : "hidden"} z-40 bg-[#fff] absolute right-0 top-[6em] h-screen p-[2em]`}>
                <ul className='flex flex-col gap-[2em] text-[2.5em] font-inter list-none capitalize font-medium'>
                    <Link onClick={()=>setIsMenu(!isMenu)} href="/"><li>home</li></Link>
                    <Link onClick={()=>setIsMenu(!isMenu)} href="#about"><li>about</li></Link>
                    <Link onClick={()=>setIsMenu(!isMenu)} href="#skill"><li>skill</li></Link>
                    <Link onClick={()=>setIsMenu(!isMenu)} href="#project"><li>projects</li></Link>
                    <Link onClick={()=>setIsMenu(!isMenu)} href="#contact"><li>contact</li></Link>
                </ul>
            </div>
        </section>
    
    </>
  )
}

export default Header