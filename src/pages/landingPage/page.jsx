import Image from 'next/image'
import React from 'react'
import profileImage from "./images/gw8s+6XmmfXLFbmXzc1WQQXgCQCf+68efAPyjLELq+olIAAAAABJRU5ErkJggg__-removebg-preview.png"
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';


const LandingPage = () => {

  return (
    <section className='landing-page relative w-full text-[10px] flex items-center justify-between my-[12rem] px-[10rem]'>
      <div className='w-[80em] left-side'>
        <div>
          <h3 className='text-[#0DB760] text-[2em] font-inter font-medium capitalize'>welcome</h3>
        </div>
        <div>
            <h2 className='capitalize text-[5.8em] font-inter break-words font-semibold'>I&apos;m muhammad muneeb</h2>
            <h2 className='text-[5.8em] text-[#0DB760] break-words font-semibold capitalize font-inter'>frontend developer</h2>
        </div>
        <div className='w-[55em]'>
          <p className='text-[#323433] text-[1.6em] font-inter font-light'>An enthusiastic, motivated developer with increasing knowledge in front-end technologies such as HTML, CSS, JavaScript, and React.js.</p>
        </div>
        <div className=' flex gap-[4em] items-center my-[5em]'>
          <a href={"/MuhammadMuneebResume.pdf"} target='_blank' download ><button className='capitalize hover:bg-transparent hover:text-[#000] bg-[#0DB760] border-[0.1em] px-[1.5em] py-[0.8em] rounded-[0.5em] border-[#0DB760] font-inter font-medium text-[1.6em] text-[#fff]'>Dowload CV</button></a>
          <Link href="#project" ><button className='capitalize font-inter font-medium text-[1.8em] flex justify-center items-center gap-[0.5em] text-[#000]'>view projects <GoArrowUpRight className='text-[1.2em]'/></button></Link>
        </div>
      </div>
      <div className='relative'>
        <div className='w-[35em] h-[35em] bg-[#0DB760] relative flex justify-center items-center rounded-[0.4em]'>
          <Image src={profileImage} className='w-[67em] h-[50em] z-20 absolute bottom-0 object-cover' alt='Profile-pic' />
        </div>
        <div className='w-[35em] h-[35em] border-[0.48em] rounded-[0.4em] border-[#000] absolute top-[4em] right-[5em]'></div>
      </div>
      <div className='w-[0.5em] h-[0.5em] bg-[#0DB760] absolute bottom-[1em] left-[25em] rounded-full'></div>
      <div className='w-[1em] h-[1em] bg-[#FF0000] absolute bottom-[1em] left-[3em] rounded-full'></div>
      <div className='w-[1.1em] h-[1.1em] bg-[#0047FF] absolute bottom-[-6em] left-[25em] rounded-full'></div>
      <div className='w-[1.5em] h-[1.5em] bg-[#F9F047] absolute bottom-[-1em] left-[17em] rounded-full'></div>
      <div className='w-[0.7em] h-[0.7em] bg-[#4D4D4D] absolute bottom-[-5em] left-[10em] rounded-full'></div>
    </section>
  )
}

export default LandingPage