"use client";

import React, { useEffect, useState } from "react";
import laptop from "./images/istockphoto-1266659893-612x612-removebg-preview.png";
import ProjectCard from "/src/components/projectCard";
import { client } from "@/utils/config-sanity";

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [allFilter , setAllFilter] = useState([])
    const [projectCount , setProjectCount] = useState(3)

    const fetchDataFromSanity = async () => {
        const data = await client.fetch(`*[_type == "Project"]{
            "name":project_name ,
            "description":project_description,
            "live_link":project_link,
            "repo_link":project_repositry_link,
            "category":project_category,
            "technologies":technologies,
            "image": project_image.asset->url,
            "id": project_id
        }`);

        setProjects(data)
    };

    const handleAllProject = () => {
        setProjects(projects)
    }

    const handleUIProject = () => {
        const updatedProjects = projects.filter((curElem)=>{
            if(curElem.category == "Ui_UX_Website"){
                return curElem
            }
        })
        setAllFilter(updatedProjects)
    }

    const handleResponsiveProject = () => {
        const updatedProjects = projects.map((curElem)=>{
            return curElem
        })
        setAllFilter(updatedProjects)
    }

    const handleDynamicProject = () => {
        const updatedProjects = projects.filter((curElem)=>{
            if(curElem.category == "dynamic_website"){
                return curElem
            }
        })
        setAllFilter(updatedProjects)
    }

    const handleShowAllProject = () => {
        setProjectCount(projects.length)
    }

    
    useEffect(() => {
        fetchDataFromSanity()
    }, []);

    allFilter.sort((a,b) => a.id - b.id)
    projects.sort((a,b) => a.id - b.id)

    if(allFilter.length){
        return(
            
        <section
        className="project-page flex justify-center items-center flex-col px-[10rem] my-[15rem] relative"
        id="project"
        >
        <div>
            <div className="w-[0.8em] h-[0.8em] bg-[#4D4D4D] absolute top-[4em] right-[14em] rounded-full"></div>
            <div className="w-[0.7em] h-[0.7em] bg-[#0DB760] absolute top-[-5em] right-[5em] rounded-full"></div>
            <div className="w-[1em] h-[1em] bg-[#FF0000] absolute top-[12em] right-[3em] rounded-full"></div>
            <div className="w-[1.5em] h-[1.5em] bg-[#F9F047] absolute top-[-3em] right-[17em] rounded-full"></div>
            <div className="w-[1.1em] h-[1.1em] bg-[#0047FF] absolute top-[2em] right-[5em] rounded-full"></div>
        </div>
        <div className="w-[40em]">
            <h2 className="capitalize text-center font-poppines font-semibold text-[2.5em] text-[#0DB760]">
            My Project
            </h2>
            <p className="font-inter font-normal text-[1.6em] text-center">
            I have selected and mentioned here some of my latest projects to share
            with you.
            </p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-[3em] my-[4em] ">
            <button onClick={handleAllProject} className="text-[1.6em] px-[1.2em] hover:bg-[#0DB760] hover:text-[#fff] py-[0.5em] rounded-[0.4em] capitalize border-[0.1em] border-[#0DB760]">
            all
            </button>
            <button onClick={handleUIProject} className="text-[1.6em] px-[1.2em] hover:bg-[#0DB760] hover:text-[#fff] py-[0.5em] rounded-[0.4em] capitalize border-[0.1em] border-[#0DB760]">
            UI/UX Website
            </button>
            <button onClick={handleResponsiveProject} className="text-[1.6em] hover:bg-[#0DB760] hover:text-[#fff] px-[1.2em] py-[0.5em] rounded-[0.4em] capitalize border-[0.1em] border-[#0DB760]">
            responsive website
            </button>
            <button onClick={handleDynamicProject} className="text-[1.6em] hover:bg-[#0DB760] hover:text-[#fff] px-[1.2em] py-[0.5em] rounded-[0.4em] capitalize border-[0.1em] border-[#0DB760]">
            dynamic website
            </button>
        </div>
        <div className="flex flex-wrap gap-[5em]">
            {!allFilter ? 
            <h2>Loading...</h2>
            :
            allFilter.map((curElem, index) => {
            return (
                <ProjectCard
                key={index}
                name={curElem.name}
                category={curElem.category}
                description={curElem.description}
                image={curElem.image}
                live_link={curElem.live_link}
                repo_link={curElem.repo_link}
                technologies={curElem.technologies}
                lapotop_image={laptop}
                />
            );
            })}
        </div>
        </section>
        )
    }

    return (
        <section
        className="project-page flex justify-center items-center flex-col px-[10rem] my-[15rem] relative"
        id="project"
        >
        <div>
            <div className="w-[0.8em] h-[0.8em] bg-[#4D4D4D] absolute top-[4em] right-[14em] rounded-full"></div>
            <div className="w-[0.7em] h-[0.7em] bg-[#0DB760] absolute top-[-5em] right-[5em] rounded-full"></div>
            <div className="w-[1em] h-[1em] bg-[#FF0000] absolute top-[12em] right-[3em] rounded-full"></div>
            <div className="w-[1.5em] h-[1.5em] bg-[#F9F047] absolute top-[-3em] right-[17em] rounded-full"></div>
            <div className="w-[1.1em] h-[1.1em] bg-[#0047FF] absolute top-[2em] right-[5em] rounded-full"></div>
        </div>
        <div className="w-[40em]">
            <h2 className="capitalize text-center font-poppines font-semibold text-[2.5em] text-[#0DB760]">
            My Projects
            </h2>
            <p className="font-inter font-normal text-[1.6em] text-center">
            I have selected and mentioned here some of my latest projects to share
            with you.
            </p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-[3em] my-[4em] ">
            <button onClick={handleAllProject} className="text-[1.6em] hover:bg-[#0DB760] hover:text-[#fff] px-[1.2em] py-[0.5em] rounded-[0.4em] capitalize border-[0.1em] border-[#0DB760]">
            all
            </button>
            <button onClick={handleUIProject} className="text-[1.6em] hover:bg-[#0DB760] hover:text-[#fff] px-[1.2em] py-[0.5em] rounded-[0.4em] capitalize border-[0.1em] border-[#0DB760]">
            UI/UX Website
            </button>
            <button onClick={handleResponsiveProject} className="text-[1.6em] hover:bg-[#0DB760] hover:text-[#fff] px-[1.2em] py-[0.5em] rounded-[0.4em] capitalize border-[0.1em] border-[#0DB760]">
            responsive website
            </button>
            <button onClick={handleDynamicProject} className="text-[1.6em] hover:bg-[#0DB760] hover:text-[#fff] px-[1.2em] py-[0.5em] rounded-[0.4em] capitalize border-[0.1em] border-[#0DB760]">
            dynamic website
            </button>
        </div>
        <div className="flex flex-wrap gap-[5em]">
            {!projects ? 
            <h2 className="text-[2em] font-poppines" >Loading...</h2>
            :
            projects.map((curElem, index) => {
            return (
                <ProjectCard
                key={index}
                name={curElem.name}
                category={curElem.category}
                description={curElem.description}
                image={curElem.image}
                live_link={curElem.live_link}
                repo_link={curElem.repo_link}
                technologies={curElem.technologies}
                lapotop_image={laptop}
                id={curElem.id}
                />
            );
            }).slice(0,projectCount)}
        </div>
        <div className="my-[3em] flex justify-center items-center">
            <button onClick={handleShowAllProject} className='capitalize hover:bg-transparent hover:text-[#000] bg-[#0DB760] border-[0.1em] px-[1.5em] py-[0.8em] rounded-[0.5em] border-[#0DB760] font-inter font-medium text-[1.6em] text-[#fff]'>See More</button>
        </div>
        </section>
    );
};

export default Project;
