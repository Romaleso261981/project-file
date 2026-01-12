import SectionHeader from '@/components/shared/section-header'
import React from 'react'
import ProjectHeroImage from '@/assets/images/project-hero-image.jpg'
import SlideImage from '@/components/shared/slide-image'

export default function ProjectHero() {
    return (
        <section className='pb-0'>
            <div className="container">
                <SectionHeader 
                    title="Проекты SurveyRidge" 
                    colors={{"1": "#2563EB"}} 
                    description={[
                        "В SurveyRidge мы предоставляем полный спектр услуг по геодезии недвижимости, адаптированных для покупателей, продавцов, инвесторов и застройщиков. Наши отчеты точны, без жаргона и предоставляются с ясностью, необходимой для принятия умных, уверенных решений о недвижимости."
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