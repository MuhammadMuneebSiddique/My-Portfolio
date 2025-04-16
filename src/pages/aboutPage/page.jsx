import Image from 'next/image'
import React from 'react'
import profileImage from "../landingPage/images/gw8s+6XmmfXLFbmXzc1WQQXgCQCf+68efAPyjLELq+olIAAAAABJRU5ErkJggg__-removebg-preview.png"
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";

const About = () => {
  return (
    <section className="about-page flex justify-center items-center gap-[7rem] my-[20rem] relative px-[7rem]" id="about">
        <div className='w-[0.8em] h-[0.8em] bg-[#4D4D4D] absolute top-[4em] right-[14em] rounded-full'></div>
        <div className='w-[0.7em] h-[0.7em] bg-[#0DB760] absolute top-[-5em] right-[5em] rounded-full'></div>
        <div className='w-[1em] h-[1em] bg-[#FF0000] absolute top-[12em] right-[3em] rounded-full'></div>
        <div className='w-[1.5em] h-[1.5em] bg-[#F9F047] absolute top-[-3em] right-[17em] rounded-full'></div>
        <div className='w-[1.1em] h-[1.1em] bg-[#0047FF] absolute top-[2em] right-[5em] rounded-full'></div>
        <div className="left_side">
            <Image
                src={profileImage}
                alt="image"
                className=" w-[45em] h-[60em] object-cover rounded-[1em]"
            />                   
        </div>
        <div className="right_side flex justify-center flex-col w-[65em] p-[1em]">
            <p className="text-[1.7em] font-medium font-inter tracking-[0.1em]">MY BIOGRAPHY</p>
            <h2 className="mb-[0.5em] mt-[1em] font-poppines capitalize text-[2.8em] font-bold tracking-[0.1em] w-full">a lead <span className="text-[#0DB760]">Front-End Developer</span> based in pakistan</h2>
            <p className="text-[1.7em] font-normal font-inter text-[#323433]">An enthusiastic, motivated developer with increasing knowledge in front-end technologies such as HTML, CSS, JavaScript, and React.js.</p>
            <div className="details my-[3em] flex gap-[2em]">
                <div>
                    <p className="text-[1.8em] py-[0.5em] font-inter font-light"><span className="font-medium capitalize">name: </span> Muhammad Muneeb</p>
                    <p className="text-[1.8em] py-[0.5em] font-inter font-light"><span className="font-medium capitalize">from: </span> Pakistan</p>
                </div>
                <div>
                    <p className="text-[1.8em] py-[0.5em] font-inter font-light"><span className="font-medium capitalize">email: </span> siddiquimuneeb894@gamil.com</p>
                    <p className="text-[1.8em] py-[0.5em] font-inter font-light"><span className="font-medium capitalize">phone: </span> 03152040559</p>
                </div>
            </div>
            <div className="social_accounts my-[1em] flex items-center gap-[5em]">
                <h4 className="text-[2.3em] font-poppines font-semibold">Follow me on</h4>
            <div className="contact_icon flex justify-center items-center gap-[3em]">
                    <a href="https://github.com/MuhammadMuneebSiddique">
                        <LuGithub className='text-[3.5em] hover:opacity-70'/>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-muneeb-6a5a86323?">
                        <FaLinkedinIn className='text-[3em] hover:opacity-[0.7em] text-[#0063C2]'/>
                    </a>
                    <a href="mailto:siddiquimuneeb894@gmail.com">
                        <IoIosMail className='text-[4em] hover:opacity-[0.7em] '/>
                    </a>
                </div>
            </div>    
            <div className="btn flex gap-[4em] mt-[4em]">
                <a href={"/MuhammadMuneebResume.pdf"} target='_blank' download ><button className="btn2 w-[12em] font-inter text-[#fff] hover:text-[#000] hover:bg-transparent text-[1.7em] border-[0.2em] border-[#0DB760] bg-[#0DB760] py-[0.7em] rounded-[3em] font-medium capitalize transition-all">Dowload CV</button></a>
            </div>
        </div>
    </section>
  )
}

export default About