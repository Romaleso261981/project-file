import SectionHeader from '@/components/shared/section-header'
import React from 'react'
import ProjectHeroImage from '@/assets/images/project-hero-image.jpg'
import SlideImage from '@/components/shared/slide-image'

export default function ProjectHero() {
    return (
        <section className='pb-0'>
            <div className="container">
                <SectionHeader 
                    title="SurveyRidge’s Projects" 
                    colors={{"1": "#FC5A11"}} 
                    description={[
                        "At SurveyRidge, we provide a complete range of property surveying services tailored to buyers, sellers, investors, and developers. Our reports are accurate, jargon-free, and delivered with the clarity you need to make smart, confident property decisions."
                    ]}
                    className='xl:max-w-[85%]'
                />
            </div>

            <SlideImage
                src={ProjectHeroImage.src}
                width={1920}
                height={1080}
                className="h-[250px] md:h-[400px] xl:h-[600px] 2xl:h-[730px] mt-10"
            />
        </section>
    )
}