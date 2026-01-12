
import Team from '@/components/shared/team'
import WorkingProcess from '@/components/shared/working-process'
import React from 'react'
import Hero from './hero'
import About from './about'
import FaqSection from '@/components/shared/faq'
import HomeContact from './home-contact'
import HomeServices from './home-services'
import HomeBlog from './home-blog'
import ProfessionalConstruction from '@/components/shared/professional-construction'
import Testimonial from '@/components/shared/testimonial'

export default function HomeIndex() {
    return (
        <>
            <Hero />
            <About />
            <HomeServices />
            <WorkingProcess />
            <ProfessionalConstruction />
            <Team />
            <Testimonial />
            <FaqSection variant='home' />
            <HomeContact />
            <HomeBlog />
        </>
    )
}
