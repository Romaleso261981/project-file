import React from 'react'
import ProjectHero from './project-hero'
import ProjectCta from './project-cta'
import WorkingProcess from '@/components/shared/working-process'
import FaqSection from '@/components/shared/faq'
import ProfessionalConstruction from '@/components/shared/professional-construction'

export default function ProjectIndex() {
    return (
        <>
            <ProjectHero />
            <section>
                <ProfessionalConstruction />
            </section>
            <ProjectCta />
            <WorkingProcess />
            <FaqSection />
        </>
    )
}
