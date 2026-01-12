'use client'
import PrimaryButton from '@/components/shared/primary-button'
import SectionHeader from '@/components/shared/section-header'
import Image from 'next/image'
import React, { useState } from 'react'
import OfferImage from '@/assets/images/offer-image.jpg'
import ServicesData from '@/jsons/services.json'
import ServiceCard from '@/components/shared/service-card'

export default function HomeServices() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index))
    }

    return (
        <section className='bg-offWhite'>
            <div className="container">
                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    <div className="col-span-12 lg:col-span-6">
                        <SectionHeader
                            title='What We Offer'
                            colors={{ "2+": "#FC5A11" }}
                            description='We want every employee and trade partner to feel that they are part of a common good and cohensive team. We help our teams form stronger'
                            className='!mb-6'
                        />
                        <div className='text-center md:text-left' data-aos="fade-up">
                            <PrimaryButton text='Explore Now' href='/about' />
                        </div>
                        <div className='d2c_slide_animation h-[250px] xl:h-[380px] mt-8'>
                            <Image 
                                src={OfferImage.src} 
                                alt="Offer Image" 
                                width={720} 
                                height={402} 
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-6">
                        <div className="space-y-3 lg:space-y-5">
                            {ServicesData.map((service, idx) => (
                                <ServiceCard key={idx} {...service} variant="accordion" isOpen={activeIndex === idx} onToggle={() => toggleAccordion(idx)} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}