"use client"

import React, { useState } from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { useForm, ValidationError } from '@formspree/react';
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {

    const [state, handleSubmit] = useForm("mnnpwlad");
    const [message , setMessage] = useState({
        name:"",
        email:"",
        phone_number:"",
        message:""
    })

    const handleMessage = (name,value) => {
        setMessage({...message , [name]:value})
    }

    const contactInformation = [
        {name:"call me" , information:"+9237031002902" , icon:<FiPhoneCall className='text-[3.5em] text-white '/>},
        {name:"email me" , information:"siddiquimuneeb894@gmail.com" , icon:<MdOutlineMailOutline className='text-[3.5em] text-white '/>},
        {name:"address" , information:"Karachi,Pakistan" , icon:<CiLocationOn className='text-[3.5em] font-bold text-white '/>}
    ]

    if(state.succeeded){
        setTimeout(() => {
            handleSubmit({...state , succeeded : !state.succeeded })
        }, 3000);
    }

    console.log(state.succeeded)

    return (
    <section className='contact-page px-[10rem] my-[15rem] relative text-[10px]' id='contact'>
        <div className='w-[0.8em] h-[0.8em] bg-[#4D4D4D] absolute top-[4em] left-[14em] rounded-full'></div>
        <div className='w-[0.7em] h-[0.7em] bg-[#0DB760] absolute top-[-5em] left-[5em] rounded-full'></div>
        <div className='w-[1em] h-[1em] bg-[#FF0000] absolute top-[12em] left-[3em] rounded-full'></div>
        <div className='w-[1.5em] h-[1.5em] bg-[#F9F047] absolute top-[-3em] left-[17em] rounded-full'></div>
        <div className='w-[1.1em] h-[1.1em] bg-[#0047FF] absolute top-[2em] left-[5em] rounded-full'></div>
        <div>
            <h2 className='text-[2em] my-[0.5em] font-semibold font-inter text-center capitalize text-[#0DB760]'>contact</h2>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h2 className='font-inter font-semibold text-[4em] capitalize text-center'>let&apos;s discuss your <span className='text-[#0DB760]'>Project</span> </h2>
            <p className='w-[30em] my-[1em] font-inter font-normal text-[1.6em] text-center '>Let&apos;s make something new, different and more meaningful or make thing more visual or conceptual</p>
        </div>
        <div className=' flex justify-center items-center gap-[5em] my-[3em]'>
            <div className='left-side flex flex-col gap-[10em]'>
                {contactInformation.map((curElem,index)=>{
                    return(
                        <div key={index} className='flex gap-[2em] items-center w-[40em]'>
                            <div className='w-[7em] h-[7em] flex justify-center items-center rounded-[1em] bg-[#0DB760] '>{curElem.icon}</div>
                            <div className='flex flex-col gap-[0.5em]'>
                                <h3 className='font-inter font-normal text-[1.6em] text-[#92929D] capitalize '>{curElem.name}</h3>
                                <h2 className='font-inter font-medium text-[1.6em]'>{curElem.information}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='right-side flex flex-col gap-[2em] w-[70%]'>
                <form onSubmit={handleSubmit} className='w-[100%]'>
                    <div className='flex gap-[2em] py-[1.5em]'>
                        <input type="text" name='name' onChange={(e) => handleMessage(e.target.name,e.target.value)}  className='text-[1.6em] rounded-[0.3em] font-inter font-normal p-[1em] border-[0.1em] border-[#BEC0BF] w-[50%]' required autoComplete='off' placeholder='Full name'/>             
                        <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                        />
                        <input type="email" name='email' onChange={(e) => handleMessage(e.target.name,e.target.value)}  className='text-[1.6em] rounded-[0.3em] font-inter font-normal p-[1em] border-[0.1em] border-[#BEC0BF] w-[50%]' required autoComplete='off' placeholder='Your Email'/>
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className='py-[1.5em]'>
                        <input type="text" name='subject' onChange={(e) => handleMessage(e.target.name,e.target.value)}  className='text-[1.6em] rounded-[0.3em] font-inter font-normal p-[1em] border-[0.1em] border-[#BEC0BF] w-[100%]' required autoComplete='off' placeholder='Subject'/>
                        <ValidationError 
                            prefix="Subject" 
                            field="subject"
                            errors={state.errors}
                        />
                    </div>
                    <div className='py-[1.5em]'>
                        <textarea name='message' onChange={(e) => handleMessage(e.target.name,e.target.value)} className='h-[10em] rounded-[0.3em] w-full text-[1.6em] text-start font-inter font-normal p-[1em] border-[0.1em] border-[#BEC0BF]' required autoComplete='off' placeholder='Message' />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <div className='flex justify-end'>
                        <button type="submit" disabled={state.submitting} className='capitalize hover:bg-transparent hover:text-[#000] font-inter text-[1.6em] text-[#fff] border-[0.1em] border-[#0DB760] bg-[#0DB760] px-[1.5em] py-[0.7em] rounded-[0.4em]'>submit message</button>
                    </div>
                </form>
            </div>
            <div className={`notify flex justify-center gap-[1em] transition-all ${state.succeeded ? "" : "hidden"} shadow-lg absolute items-center bg-white py-[2.5em] rounded-[1em] px-[3em] `}>
                    <BsFillSendFill className="text-[3em] text-[#59B259]"/> 
                <h2 className="text-[3em] text-[#000] font-semibold" >Message Send Successfully</h2>
            </div>
        </div>
    </section>
  )
}

export default Contact