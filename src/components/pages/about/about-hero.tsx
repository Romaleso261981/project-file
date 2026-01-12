import Counter from '@/components/shared/counter'
import PrimaryButton from '@/components/shared/primary-button'
import SectionHeader from '@/components/shared/section-header'
import SlideImage from '@/components/shared/slide-image'
import React from 'react'
import AboutHeroImage from '@/assets/images/about-hero-img.jpg'

export default function AboutHero() {
    return (
        <section className='pb-0'>
            <div className="container">
                <SectionHeader 
                    title="About SurveyRidge" 
                    colors={{"1": "#FC5A11"}} 
                    description={[
                        "Our team of licensed engineers and registered surveyors brings years of experience across residential, commercial, agricultural land, and renovation projects, Combine modern tools like drone scanning, GPS positioning, and 3D modeling with expert workflow processes to make your land plans work.",
                        "At SurveyRidge, we’re committed to transforming ideas into dependable, code-compliant site plans and surveying solutions. Our focus on quality, safety, and innovation ensures we deliver precision for every project big or small."
                    ]}
                    className='xl:max-w-[85%]'
                />
                <div className='mb-10 text-center md:text-left' data-aos="fade-up">
                    <PrimaryButton text="Visit Our Sites" href="/contact" />
                </div>
                <Counter />
            </div>

            <SlideImage
                src={AboutHeroImage.src}
                width={1920}
                height={1080}
                className="h-[250px] md:h-[500px] xl:h-[700px] 2xl:h-[1080px] mt-10"
            />
        </section>
    )
}