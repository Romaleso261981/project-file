import React from 'react'
import SectionHeader from './section-header'
import Image from 'next/image'
import TeamData from '@/jsons/teams.json'

export default function Team() {
    return (
        <section className='bg-offWhite'>
            <div className="container">
                <SectionHeader 
                    title='Познакомьтесь с командой, которая ведет ваш проект'
                    colors={{"5+": "#2563EB"}}
                    className='xl:max-w-[80%] 2xl:max-w-1/2' 
                />

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
                    {TeamData.map((member,index) => (
                        <div
                            key={index}
                            className="group cursor-pointer scroll-animate"
                        >

                            <div className="overflow-hidden bg-[#FDF9F7] border border-primary-light-shade">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={412}
                                    height={437}
                                    className="w-full min-h-[170px] lg:min-h-[250px] xl:min-h-[437px] object-cover object-top block group-hover:scale-120 transition-all duration-600"
                                />
                            </div>
                            <div>
                                <h5 className="d2c_small_title mt-6 group-hover:text-primary">{member.name}</h5>
                                <div className='relative'>
                                    <hr className='border-primary-light-shade my-2'/>
                                    <div className='h-[1px] bg-primary max-w-1/2 absolute top-0 left-0 d2c_slide_animation'></div>
                                </div>
                                <p className='text-base text-primary'>{member.designation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
