import PrimaryButton from '@/components/shared/primary-button'
import SectionHeader from '@/components/shared/section-header'
import Image from 'next/image'
import React from 'react'
import CtaImage2 from '@/assets/images/project-cta-image.png'

export default function ProjectCta() {
    return (
        <section className="bg-primary py-0">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                    {/* Image */}
                    <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-end items-end order-2 md:order-1">
                        <Image 
                            src={CtaImage2.src} 
                            alt="CTA Image" 
                            width={640} 
                            height={463} 
                            className="w-full object-cover" 
                        />
                    </div>
                    {/* Text */}
                    <div className="md:col-span-6 lg:col-span-7 text-center md:text-left py-14 xl:py-28 order-1 md:order-2">
                        <SectionHeader
                            title="Have a Property of Project in Mind?"
                            description="From residential surveys to large-scale developments we're ready to support your next move with expertise and precision."
                            titleClass="text-white"
                            descriptionClass="text-white xl:max-w-[65%]"
                        />
                        <PrimaryButton 
                            text="Get A Free Consultation" 
                            href="/contact" 
                            className="bg-white !text-primary hover:bg-secondary hover:!text-white" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}