'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import SectionHeader from '@/components/shared/section-header'
import FaqData from '@/jsons/faq.json'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

// Images
import FaqImage from '@/assets/images/faq-image.jpg'
import FaqImage1 from '@/assets/images/faq-image-1.jpg'
import FaqImage2 from '@/assets/images/faq-image-2.jpg'
import FaqImage3 from '@/assets/images/faq-image-3.jpg'
import FaqImage4 from '@/assets/images/faq-image-4.jpg'

interface FaqSectionProps {
    variant?: 'home' | 'global';
}

export default function FaqSection({ variant = 'global' }: FaqSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index))
    }

    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-12 gap-6 md:gap-10 xl:gap-16 items-center">
                    
                    {/* LEFT CONTENT */}
                    <div className="col-span-12 lg:col-span-6 h-full">
                        {variant === 'home' ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6">
                                <div className='space-y-4 xl:space-y-6'>
                                    <Image
                                        src={FaqImage1.src}
                                        alt="Faq Image"
                                        width={394}
                                        height={250}
                                        className="max-w-full h-[250px] object-cover d2c_slide_animation"
                                    />
                                    <Image
                                        src={FaqImage2.src}
                                        alt="Faq Image"
                                        width={394}
                                        height={250}
                                        className="max-w-full h-[400px] xl:h-[490px] object-cover d2c_slide_animation"
                                    />
                                </div>
                                <div className='space-y-4 xl:space-y-6'>
                                    <Image
                                        src={FaqImage3.src}
                                        alt="Faq Image"
                                        width={394}
                                        height={250}
                                        className="max-w-full h-[400px] xl:h-[490px] object-cover d2c_slide_animation"
                                    />
                                    <Image
                                        src={FaqImage4.src}
                                        alt="Faq Image"
                                        width={394}
                                        height={250}
                                        className="max-w-full h-[250px] object-cover d2c_slide_animation"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="overflow-hidden h-full">
                                <Image
                                    src={FaqImage.src}
                                    alt="Faq Image"
                                    width={812}
                                    height={812}
                                    className="max-w-full max-h-full object-cover"
                                    data-aos="fade-right"
                                />
                            </div>
                        )}
                    </div>

                    {/* RIGHT CONTENT (FAQ ACCORDION) */}
                    <div className="col-span-12 lg:col-span-6">
                        <SectionHeader 
                            title="Все, что вам нужно знать"
                            description="Изучите наш раздел FAQ, чтобы получить четкие, подробные ответы о процессе SurveyRidge, услугах, сроках и о том, чего можно ожидать при работе с нашей командой надежных геодезистов недвижимости."
                            colors={{ "3+": "#2563EB" }}
                            className="xl:pr-20"
                        />

                        <div className="space-y-3 lg:space-y-5">
                            {FaqData.map((item, idx) => {
                                const isOpen = activeIndex === idx
                                return (
                                    <div
                                        key={idx}
                                        className="bg-[#FEFCFB] scroll-animate border border-primary-light-shade"
                                    >
                                        <div
                                            className="flex justify-between gap-10 p-5 cursor-pointer"
                                            onClick={() => toggleAccordion(idx)}
                                        >
                                            <h4 className="text-xl md:text-2xl 2xl:text-3xl font-primary text-secondary font-bold capitalize tracking-[-1px]">
                                                {item.question}
                                            </h4>
                                            <span className="text-xl text-secondary">
                                                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                            </span>
                                        </div>

                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                                isOpen ? 'max-h-[300px] p-5 -mt-3 pt-0' : 'max-h-0 p-0 px-5 pt-0'
                                            }`}
                                        >
                                            <p className="text-base text-secondary-light">{item.answer}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
