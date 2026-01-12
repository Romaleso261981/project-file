
import FaqSection from '@/components/shared/faq'
import React from 'react'
import AboutHero from './about-hero'
import MissionVision from './mission-vision'
import Team from '@/components/shared/team'
import CtaSection from '@/components/shared/cta'
import ServicesSection from './services-section'
import CtaImage1 from '@/assets/images/cta-image.png'

export default function AboutIndex() {
    return (
        <>
            <AboutHero />
            <ServicesSection />
            <MissionVision />
            <Team />
            <CtaSection 
                title="Ready to Make Confident Property"
                description="Whether you're buying, building, investing, or resolving a dispute SurveyRidge is here to provide the clarity you need."
                image={CtaImage1.src}
            />
            <FaqSection variant='global' />
        </>
    )
}
