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
                    title="О SurveyRidge" 
                    colors={{"1": "#FC5A11"}} 
                    description={[
                        "Наша команда лицензированных инженеров и зарегистрированных геодезистов привносит годы опыта в жилые, коммерческие, сельскохозяйственные и реконструкционные проекты. Мы сочетаем современные инструменты, такие как сканирование дронами, GPS-позиционирование и 3D-моделирование, с экспертными рабочими процессами, чтобы ваши планы участков работали.",
                        "В SurveyRidge мы стремимся превращать идеи в надежные, соответствующие нормам планы участков и геодезические решения. Наш фокус на качестве, безопасности и инновациях гарантирует, что мы обеспечиваем точность для каждого проекта, большого или малого."
                    ]}
                    className='xl:max-w-[85%]'
                />
                <div className='mb-10 text-center md:text-left' data-aos="fade-up">
                    <PrimaryButton text="Посетить наши сайты" href="/contact" />
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