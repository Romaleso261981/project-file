import PrimaryButton from '@/components/shared/primary-button'
import Image from 'next/image'
import React from 'react'
import MissionImage from '@/assets/images/mission-image.jpg'
import VisionImage from '@/assets/images/vision-image.jpg'

export default function MissionVision() {
    return (
        <section className='bg-[#FEFCFB] py-0'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className='p-6 md:p-10 xl:p-20 space-y-7 flex flex-col justify-center order-1'>
                    <h2 className='d2c_medium_title uppercase' data-aos="fade-up">Our Mission</h2>
                    <div className='space-y-4' data-aos="fade-up">
                        <p>At SurveyRidge, our mission is to empower individuals and businesses with accurate, transparent, and accessible property insights. We believe that property decisions whether buying a home, investing in real estate, or managing a portfolio should be grounded in facts.</p>
                        <p>Our commitment extends beyond reports we strive to build long-term relationships, offer trusted guidance, and contribute to safer, smarter, and more sustainable property development in every community we serve.</p>
                    </div>
                    <div data-aos="fade-up">
                        <PrimaryButton text="Explore Our Project" href="/projects" className='max-w-fit' />
                    </div>
                </div>

                <div className='order-2' data-aos="fade-left">
                    <Image src={MissionImage.src} alt="Mission Image" width={948} height={579} className='w-full h-full object-cover' />
                </div>

                <div className='order-4 md:order-3' data-aos="fade-right">
                    <Image src={VisionImage.src} alt="Vision Image" width={948} height={579} className='w-full h-full object-cover' />
                </div>

                <div className='p-6 md:p-10 xl:p-20 space-y-7 flex flex-col justify-center order-3 md:order-4'>
                    <h2 className='d2c_medium_title uppercase' data-aos="fade-up">Our Vision</h2>
                    <div className='space-y-4' data-aos="fade-up">
                        <p>At SurveyRidge, our vision is to be the leading name in property surveying recognized for our integrity, precision, and commitment to client success.</p>
                        <p>We envision a future where every property decision is backed by clear, accurate, and trustworthy information. As the property landscape evolves.</p>
                        <p>Through our work, we strive to make the property market more transparent, more informed, and more secure one survey at a time.</p>
                    </div>
                    <div data-aos="fade-up">
                        <PrimaryButton text="Explore Our Project" href="/projects" className='max-w-fit' />
                    </div>
                </div>
            </div>
        </section>
    )
}