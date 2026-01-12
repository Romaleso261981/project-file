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
                                title='Свяжитесь с нами'    
                                colors={{ "3+": "#2563EB" }} 
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
                                <h5 className="d2c_small_title text-2xl font-bold">Телефон</h5>
                                <p><a href="tel:+1 (212) 555-9876">+1 (212) 555-9876</a></p>
                            </div>
                            <div data-aos="fade-up" className='text-center md:text-left'>
                                <h5 className="d2c_small_title text-2xl font-bold">Электронная почта</h5>
                                <p><a href="mailto:info@surveyridge.com">info@surveyridge.com</a></p>
                            </div>
                            <div data-aos="fade-up" className='text-center md:text-left'>
                                <h5 className="d2c_small_title text-2xl font-bold">Адрес офиса</h5>
                                <p>6391 Elgin St. Celina, Delaware 10299</p>
                            </div>
                            <div data-aos="fade-up" className='text-center md:text-left'>
                                <h5 className="d2c_small_title text-2xl font-bold">Часы работы</h5>
                                <p>Пн - Пт: 9:00 - 18:00</p>
                                <p>Сб: 10:00 - 14:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <p className='text-center md:text-left'>Мы хотим, чтобы каждый сотрудник и торговый партнер чувствовали, что они являются частью общего блага, каждый сотрудник и торговый партнер чувствуют, что они являются частью общего блага</p>
                        <SectionHeader
                            title='Давайте работать вместе'
                            colors={{ "3+": "#2563EB" }}
                            className='!my-8'
                        />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}