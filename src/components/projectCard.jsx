import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaSortDown } from 'react-icons/fa'
import { GoArrowUpRight } from 'react-icons/go'

const ProjectCard = ({name,category,description,image,technologies,live_link,repo_link,lapotop_image,id}) => {
    return (
        <div className='project-card flex justify-center py-[2em] items-center gap-[5em]'>
            <div className='left-side project-image p-[0.5em] hover:scale-110 flex justify-center items-center relative '>
                <Image src={lapotop_image} className="laptop-img w-[35em] drop-shadow-2xl "  alt='Laptop-image' />
                <Image src={image} width={1000} height={1000} className='project-img absolute z-10 w-[25em] h-[15.7em] bottom-[3.9em]' alt='project-image' />
                <Link href={live_link} className='top-[-1.8em] absolute' target='_blank'><button className='explore-btn text-[1.5em] hidden justify-center gap-[0.2em] items-center font-poppines font-medium capitalize py-[0.2em] rounded-[0.2em] px-[1em] text-[#0DB760] bg-[#0db75f42]'>
                    Explore
                    <GoArrowUpRight className='text-[1.2em]'/>
                    <FaSortDown className='absolute text-[1.5em] text-[#0db75f42] bottom-[-0.39em]' /> 
                </button></Link>
            </div>
            <div className='right-side flex w-[60%] flex-col gap-[1em]'>
                <h2 className='text-[2.5em] font-poppines font-semibold capitalize' >{name}</h2>
                <p className='text-[1.5em] font-normal font-poppines '>{description}</p>
                <p><span className='text-[1.7em] font-medium font-poppines capitalize'>repositry : </span> <span> <Link href={repo_link} target='_blank' className='text-[1.2em] hover:text-[#0DB760] font-medium font-poppines'>{repo_link}</Link></span></p>
                <div className='flex flex-col gap-[0.8em]'>
                    <h3 className='text-[1.7em] font-medium font-poppines capitalize'>Technologies</h3>
                    <div className='flex items-center gap-[1em]'>
                        {technologies.map((curElem,index)=>{
                            return  <span key={index} className='text-[1.2em] font-medium font-poppines uppercase text-[#0DB760] py-[0.2em] rounded-[0.2em] px-[1em] bg-[#0db75f42]'>{curElem}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
