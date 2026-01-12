import Image from 'next/image'
import SectionHeader from './section-header'
import React from 'react'
import ProcessData from '@/jsons/process.json'

export default function WorkingProcess() {
    return (
        <section>
            <div className="container">
                <SectionHeader 
                    title="The SurveyRidge Working Process" 
                    colors={{ "2+": "#FC5A11" }}
                    className='md:max-w-1/2' 
                />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-6 mt-20">
                    {
                        ProcessData.map((process, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`
                                        p-8 pt-28 bg-[#FEFCFB] border border-primary-light-shade relative group cursor-pointer text-center xl:text-left scroll-animate
                                        ${index > 0 ? 'mt-6 md:mt-0' : ''}      
                                        ${index > 1 ? 'md:mt-6 xl:mt-0' : ''}   
                                    `}
                                >
                                    <Image
                                        src={process.icon}
                                        alt="Process Icon"
                                        width={146}
                                        height={140}
                                        className="max-w-[80px] xl:max-w-[100px] 2xl:max-w-[146px] mx-auto mb-10"
                                    />
                                    <div>
                                        <h5 className='text-xl md:text-2xl mb-2 group-hover:text-primary'>{process.title}</h5>
                                        <p>{process.description}</p>
                                    </div>

                                    <div className='w-14 h-[50px] bg-primary grid place-items-center absolute top-0 -translate-y-1/2 group-hover:bg-secondary group-hover:translate-y-1/2 transition-all duration-600'>
                                        <p className='text-offWhite text-sm'>{index + 1}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}
