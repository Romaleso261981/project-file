'use client'
import SectionHeader from '@/components/shared/section-header'
import Image from 'next/image'
import React from 'react'
import ArrowImage from '@/assets/images/arrow-big.svg'
import PrimaryButton from '@/components/shared/primary-button'
import AboutImage1 from '@/assets/images/about-image-1.jpg'
import AboutImage2 from '@/assets/images/about-image-2.jpg'
import AboutImage3 from '@/assets/images/about-image-3.jpg'
import AboutIcon from '@/assets/images/about-icon.svg'
import CircularText from '@/components/animation/circular-text'

const AboutData = [
    {
        title: "Ясность в каждой линии",
        description: "Каждое измерение, граница и высота подтверждены тщательной полевой работой и контролем качества.",
    },
    {
        title: "Точность на основе технологий",
        description: "Мы используем современные инструменты для захвата, обработки и доставки реальных данных участка – быстрее и надежнее.",
    },
    {
        title: "Точность, заложенная в каждый проект",
        description: "Наша команда понимает региональные нормы, процессы получения разрешений и проблемы с землей в городах и округах.",
    }
]

export default function About() {
    return (
        <section className='xl:pt-10'>
            <div className="container">
                <div className="flex flex-col gap-12">
                    <div className="grid grid-cols-12 gap-4 md:gap-6 items-center">
                        <div className='col-span-12 md:col-span-5'>
                            <SectionHeader 
                                title="Точность, заложенная в каждый проект" 
                                colors={{ "4+": "#FC5A11" }}
                                className='!mb-4 pr-10'
                            />
                            <div className='mb-10'>
                                <Image 
                                    src={ArrowImage.src} 
                                    alt="Arrow Image" 
                                    width={515} 
                                    height={2} 
                                    className='max-w-fit object-contain d2c_slide_animation'
                                />
                            </div>
                            <div className="flex flex-col gap-6 max-w-lg">
                                {AboutData.map((item, index) => {
                                    return (
                                        <div key={index} data-aos="fade-up">
                                            <h5 className="d2c_small_title text-2xl font-bold">{item.title}</h5>
                                            <p>{item.description}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div data-aos="fade-up">
                                <PrimaryButton text="Посетить наши сайты" href='/contact' className='mt-10'/>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-7 space-y-8 xl:space-y-14"> 
                            <div>
                                <div className='flex gap-8 xl:gap-14 items-end relative'>
                                    <div className='absolute top-[60%] left-1/2 xl:left-[35%] -translate-x-1/2 z-10'>
                                        <div className='flex justify-center relative w-full max-w-fit rounded-full border border-primary-light-shade bg-offWhite p-2'>
                                            <CircularText
                                                text=" НАГРАЖДЕННАЯ КОМПАНИЯ"
                                                onHover="speedUp"
                                                spinDuration={20}
                                                className='!w-[130px] !h-[130px] lg:!w-[150px] lg:!h-[150px] xl:!w-[220px] xl:!h-[220px]'
                                            />
                                            <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white border border-primary/20 xl:w-36 xl:h-36 w-20 h-20 rounded-full grid place-items-center'>
                                                <Image
                                                    src={AboutIcon.src}
                                                    alt="About Icon"
                                                    width={80}
                                                    height={62}
                                                    className='max-w-[50px] max-h-[50px] xl:max-w-[100px] xl:max-h-[100px] object-cover'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Image
                                        src={AboutImage1.src}
                                        alt="About Image"
                                        width={376}
                                        height={292}
                                        className='w-full xl:max-w-[376px] md:h-[292px] h-[200px] object-cover scroll-animate'
                                    />
                                    <Image
                                        src={AboutImage2.src}
                                        alt="About Image"
                                        width={356}
                                        height={332}
                                        className='w-full xl:max-w-[356px] md:h-[332px] h-[200px] object-cover scroll-animate hidden xl:block'
                                    />
                                </div>
                            </div>
                            
                            <Image
                                src={AboutImage3.src}
                                alt="About Image"
                                width={703}
                                height={386}
                                className='w-full lg:max-w-[703px] max-h-full object-cover ml-auto scroll-animate'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}