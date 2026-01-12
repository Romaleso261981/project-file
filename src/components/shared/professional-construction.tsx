"use client"
import React, { useState } from 'react'
import SectionHeader from './section-header'
import Image from 'next/image'
import projects from '@/jsons/projects.json'


export default function ProfessionalConstruction() {
  const [activeProject, setActiveProject] = useState(1)

  return (
    <section className='py-0'>
      <div className="container">
        
        {/* Heading */}
        <div className="text-center mb-16 px-4">
          <SectionHeader
            title="Мы предоставляем профессиональное строительство"
            colors={{ "3+": "#FC5A11" }}
            className="xl:max-w-[70%] mx-auto"
            titleClass="!justify-center"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-auto" data-aos="fade-up">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project.id)}
              className={`border-t ${index !== projects.length - 1 ? "xl:border-r" : ""} 
                border-primary p-4 xl:p-6 cursor-pointer transition-colors
                ${activeProject === project.id ? "bg-primary text-white duration-200" : "bg-[#FEFCFB] text-[#1D0900] duration-200"}`}
            >
              <h2
                className={`text-xl 2xl:text-2xl ${
                  activeProject === project.id ? "text-white duration-200" : "text-[#1D0900] duration-200"
                }`}
              >
                {project.title}
              </h2>
              <p
                className={`mt-2 text-sm 2xl:text-base uppercase font-medium ${
                  activeProject === project.id ? "text-white duration-200" : "text-secondary duration-200"
                }`}
              >
                Местоположение: {project.location}
              </p>
              <p
                className={`mt-3 text-sm 2xl:text-base font-inter leading-6 ${
                  activeProject === project.id ? "text-white duration-200" : "text-[#3B302B] duration-200"
                }`}
              >
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Active Project Image */}
        {projects.map((project) => (
          <div
            key={project.id}
            className={`w-full overflow-hidden ${
              activeProject === project.id ? "block" : "hidden"
            }`}
          >
            <div className={`${activeProject === project.id ? "animate-slideUp" : ""}`}>
              <Image
                src={project.image}
                alt="construction Image"
                width={1720}
                height={880}
                className="w-full h-[250px] lg:h-[500px] xl:h-[880px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
