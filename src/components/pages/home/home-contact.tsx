import ContactForm from '@/components/shared/contact-form'
import SectionHeader from '@/components/shared/section-header'
import Image from 'next/image'
import ArrowImage from '@/assets/images/arrow-big.svg'
import React from 'react'

export default function HomeContact() {
    return (
        <section className='py-0'>
            <div className="container">
                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    <div className="col-span-12 md:col-span-6">
                        <div className='lg:max-w-[70%]'>
                            <SectionHeader 
                                title='Get in Touch with us'    
                                colors={{ "3+": "#FC5A11" }} 
                                className='!mb-4'
                            />
                            <Image 
                                src={ArrowImage.src} 
                                alt="Arrow Image" 
                                width={515} 
                                height={2} 
                                className='max-w-fit object-contain d2c_slide_animation'
                            />
                        </div>

                        <div className='space-y-8 mt-10'>
                            <div data-aos="fade-up" className='text-center md:text-left'>
                                <h5 className="d2c_small_title text-2xl font-bold">Phone</h5>
                                <p><a href="tel:+1 (212) 555-9876">+1 (212) 555-9876</a></p>
                            </div>
                            <div data-aos="fade-up" className='text-center md:text-left'>
                                <h5 className="d2c_small_title text-2xl font-bold">Email</h5>
                                <p><a href="mailto:info@surveyridge.com">info@surveyridge.com</a></p>
                            </div>
                            <div data-aos="fade-up" className='text-center md:text-left'>
                                <h5 className="d2c_small_title text-2xl font-bold">Office Address</h5>
                                <p>6391 Elgin St. Celina, Delaware 10299</p>
                            </div>
                            <div data-aos="fade-up" className='text-center md:text-left'>
                                <h5 className="d2c_small_title text-2xl font-bold">Business Hours</h5>
                                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                                <p>Sat: 10:00 AM - 2:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <p className='text-center md:text-left'>We want every employee and trade partner feel that they are part of a common good every employee and trade partner feel that they are part of a common good</p>
                        <SectionHeader
                            title='Let’s work with us'
                            colors={{ "3+": "#FC5A11" }}
                            className='!my-8'
                        />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}