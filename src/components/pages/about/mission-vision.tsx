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
                    <h2 className='d2c_medium_title uppercase' data-aos="fade-up">Наша миссия</h2>
                    <div className='space-y-4' data-aos="fade-up">
                        <p>В SurveyRidge наша миссия - предоставлять частным лицам и предприятиям точные, прозрачные и доступные данные о недвижимости. Мы считаем, что решения о недвижимости - будь то покупка дома, инвестиции в недвижимость или управление портфелем - должны основываться на фактах.</p>
                        <p>Наша приверженность выходит за рамки отчетов - мы стремимся строить долгосрочные отношения, предлагать надежное руководство и способствовать более безопасному, умному и устойчивому развитию недвижимости в каждом сообществе, которому мы служим.</p>
                    </div>
                    <div data-aos="fade-up">
                        <PrimaryButton text="Изучить наши проекты" href="/projects" className='max-w-fit' />
                    </div>
                </div>

                <div className='order-2' data-aos="fade-left">
                    <Image src={MissionImage.src} alt="Mission Image" width={948} height={579} className='w-full h-full object-cover' />
                </div>

                <div className='order-4 md:order-3' data-aos="fade-right">
                    <Image src={VisionImage.src} alt="Vision Image" width={948} height={579} className='w-full h-full object-cover' />
                </div>

                <div className='p-6 md:p-10 xl:p-20 space-y-7 flex flex-col justify-center order-3 md:order-4'>
                    <h2 className='d2c_medium_title uppercase' data-aos="fade-up">Наше видение</h2>
                    <div className='space-y-4' data-aos="fade-up">
                        <p>В SurveyRidge наше видение - быть ведущим именем в геодезии недвижимости, признанным за нашу честность, точность и приверженность успеху клиентов.</p>
                        <p>Мы представляем будущее, где каждое решение о недвижимости подкреплено четкой, точной и надежной информацией. По мере того как ландшафт недвижимости развивается.</p>
                        <p>Благодаря нашей работе мы стремимся сделать рынок недвижимости более прозрачным, более информированным и более безопасным, одну съемку за раз.</p>
                    </div>
                    <div data-aos="fade-up">
                        <PrimaryButton text="Изучить наши проекты" href="/projects" className='max-w-fit' />
                    </div>
                </div>
            </div>
        </section>
    )
}