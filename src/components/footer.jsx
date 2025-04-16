import Link from 'next/link';
import React from 'react'
import { FaFacebookF , FaInstagram , FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


const Footer = () => {
  return (
    <section className='footer flex flex-wrap gap-[4em] justify-between items-center mx-[10rem] py-[2em] border-t-[0.1em] border-[#BEC0BF]'>
        <div>
            <h2 className='text-[1.6em] font-inter capitalize font-normal'>@2025.All Rights Reserved</h2>
        </div>
        <div>
            <h2 className='text-[1.6em] font-inter capitalize font-normal'>Created By Muhammad Muneeb</h2>
        </div>
        <div className='flex justify-center items-center gap-[2em]'>
            <div className="w-[4em] bg-[#0DB760] flex justify-center items-center h-[4em] rounded-full ">
                <Link href="https://www.facebook.com/share/18k37rzENr/" target='_blank' ><FaFacebookF className='text-[2em] text-[#fff]'/></Link>
            </div>
            <div className="w-[4em] bg-[#0DB760] flex justify-center items-center h-[4em] rounded-full ">
                <Link href="https://www.instagram.com/_muneeb__siddiqui_?igsh=MWVuZ3lheGE4N3QyNA==" target='_blank' ><FaInstagram className='text-[2em] text-[#fff]'/></Link>
            </div>
            <div className="w-[4em] bg-[#0DB760] flex justify-center items-center h-[4em] rounded-full ">
              <Link href="https://www.linkedin.com/in/muhammad-muneeb-6a5a86323?" target='_blank' ><FaLinkedinIn className='text-[2em] text-[#fff]'/></Link>
            </div>
            <div className="w-[4em] bg-[#0DB760] flex justify-center items-center h-[4em] rounded-full ">
              <Link href="https://github.com/MuhammadMuneebSiddique" target='_blank' ><FiGithub className='text-[2em] text-[#fff]'/></Link>
            </div>
        </div>
    </section>
  )
}

export default Footer