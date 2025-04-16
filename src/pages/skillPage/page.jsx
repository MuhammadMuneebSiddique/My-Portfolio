import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";


const Skill = () => {

    const skill = [
        {name:"html" , description:"Create a structure and foundation of a website, defining its content and layout" , image:<FaHtml5 className='text-[3.5em] text-[#DD4B25]'/>},
        {name:"css" , description:"Create a designs and improves a website's visual appearance and layout" , image:<FaCss3Alt className='text-[3.5em] text-[#1B84C1]'/>},
        {name:"tailwind css" , description:"Next.js optimizes React apps with faster performance and SEO benefits." , image:<RiTailwindCssFill className='text-[3.5em] text-[#36B7F0]'/>},
        {name:"javascript" , description:"Create a interactivity and dynamic functionality to a website" , image:<RiJavascriptFill className='text-[4em] text-[#ECDA1D]'/>},
        {name:"react.js" , description:"Create a dynamic and interactive user interfaces efficiently." , image:<FaReact className='text-[3em] text-[#00D0F7]'/>},
        {name:"next.js" , description:"Next.js optimizes React apps with faster performance and SEO benefits." , image:<RiNextjsFill className='text-[3.5em] text-[#000]'/>},
    ]

  return (
    <section className='skill-page flex justify-between items-center px-[10rem] relative my-[10rem]' id='skill'>
        <div className='w-[0.8em] h-[0.8em] bg-[#4D4D4D] absolute top-[2em] left-[12em] rounded-full'></div>
        <div className='w-[0.7em] h-[0.7em] bg-[#0DB760] absolute top-[-5em] left-[5em] rounded-full'></div>
        <div className='w-[1em] h-[1em] bg-[#FF0000] absolute top-[12em] left-[3em] rounded-full'></div>
        <div className='w-[1.1em] h-[1.1em] bg-[#0047FF] absolute top-[4em] left-[25em] rounded-full'></div>
        <div className='w-[1.5em] h-[1.5em] bg-[#F9F047] absolute top-[-3em] left-[15em] rounded-full'></div>
        <div className='w-[0.5em] h-[0.5em] bg-[#0047FF] absolute top-[2em] left-[5em] rounded-full'></div>
        <div className='w-[70em] left-side'>
            <div className='my-[2em]'>
                <h2 className='text-[2em] font-inter font-semibold capitalize text-[#0DB760]'>my skills</h2>
            </div>
            <div className='w-[70%]'>
                <h2 className='capitalize font-inter font-semibold text-[4em]'>why hire me for your next <span className='text-[#0DB760]'>project?</span></h2>
            </div>
            <div className='my-[1.5em] w-[80%]'>
                <p className='text-[1.6em] font-inter font-normal text-[#323433]'>I specialize in front-end development using React.js and Next.js, building fast and user-friendly web apps. 🚀 With a problem-solving mindset, I write clean and scalable code for seamless digital experiences</p>
            </div>
            <div className='my-[5em] w-full'>
                <a href={"/MuhammadMuneebResume.pdf"} target='_blank' download ><button className='capitalize text-[1.6em] hover:bg-transparent border-[0.1em] border-[#0DB760] hover:text-[#000] font-inter font-medium text-[#fff] rounded-[0.5em] px-[2em] py-[0.7em] bg-[#0DB760]'>hire me</button></a>
            </div>
        </div>
        <div className='flex w-[70em] flex-wrap justify-center items-center gap-[3em]'>
            {skill.map((curElem,index)=>{
                return (
                    <>
                        <div key={index} className='flex w-[20em] h-[12em] justify-center items-center flex-col gap-[0.5em] my-[2em]'>
                            {curElem.image}
                            <h2 className='text-[1.6em] font-poppines font-semibold uppercase'>{curElem.name}</h2>
                            <p className='text-[1.2em] text-center font-inter font-normal text-[#323433]'>{curElem.description}</p>
                        </div>
                    </>
                )
            })}
        </div>
    </section>
  )
}

export default Skill