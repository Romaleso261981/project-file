import React from 'react'
import servicesData from "@/jsons/services.json";
import ClientWrapper from '@/components/shared/client-wrapper';
import { Metadata } from 'next';
import SectionHeader from '@/components/shared/section-header';
import Image from 'next/image';
import serviceDetailsImage1 from '@/assets/images/service-details-image-1.jpg';
import serviceDetailsImage2 from '@/assets/images/service-details-image-2.jpg';
import serviceDetailsImage3 from '@/assets/images/service-details-image-3.jpg';
import serviceDetailsImage4 from '@/assets/images/service-details-image-4.jpg';
import serviceDetailsImage5 from '@/assets/images/service-details-image-5.jpg';
import serviceDetailsImage6 from '@/assets/images/service-details-image-6.jpg';
import serviceDetailsImage7 from '@/assets/images/service-details-image-7.jpg';
import uilderEngineerIcon from '@/assets/images/builder_engineer_icon.svg';

const baseUrl = 'https://project-file-woad.vercel.app';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Услуга не найдена",
    };
  }

  return {
    title: service.name,
    description: service.description,
    keywords: ["услуги", "геодезия", service.name, service.description],
    alternates: {
      canonical: `${baseUrl}/services/${slug}/`,
    },
    openGraph: {
      title: `${service.name} - SurveyRidge`,
      description: service.description,
      url: `${baseUrl}/services/${slug}/`,
      images: [
        {
          url: `${baseUrl}${service.image}`,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} - SurveyRidge`,
      description: service.description,
      images: [`${baseUrl}${service.image}`],
    },
  };
}

export async function generateStaticParams() { 
    return servicesData.map((services) => ({
        slug: services.slug,
    }))
}

export default async function ServicesDetailsIndex({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
	const { slug } = await params;
	const services = servicesData.find((s) => s.slug === slug);

	if (!services) {
		return <p className="container py-10">Услуга не найдена.</p>;
	}
	return (
		<ClientWrapper>
            <section className='pb-4'>
                <div className="container space-y-10 md:space-y-20">
                    <div className='space-y-6'>
                        <SectionHeader
                            title={services.name}
                            className='!mb-6'
                        />
                        <p data-aos="fade-up">В SurveyRidge строительство - это больше, чем просто создание структуры - это создание пространств, которые служат долго, улучшают сообщества и воплощают видения в жизнь. Мы хотим, чтобы каждый сотрудник, партнер и торговый специалист чувствовали себя частью общего блага, работая как одна сплоченная команда.</p>
                        <div>
                            <Image
                                src={services.image}
                                alt={services.name}
                                width={1700}
                                height={1000}
                                className='w-full h-[400px] lg:h-[600px] 2xl:h-[1000px] object-cover d2c_slide_animation'
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 xl:gap-16 items-center">
                        <div className='space-y-7 flex flex-col justify-center order-1'>
                            <SectionHeader
                                title="Наш подход"
                                colors={{ "1+": "#2563EB" }}
                                description="От предстроительного планирования до завершения проекта мы верим в практический, прозрачный и совместный процесс."
                                className='!mb-6'
                            />
                            <ul className='space-y-4' data-aos="fade-up">
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                    Мы тесно работаем с клиентами и инженерами для поддержания открытой коммуникации
                                </li>
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                    Строгое соблюдение правил безопасности и нормативных кодексов заложено в каждый проект.
                                </li>
                            </ul>
                        </div>

                        <div className='order-2 grid grid-cols-12 gap-4 h-full'>
                            <div className='col-span-8'>
                                <Image src={serviceDetailsImage1.src} alt="Service Details Image" width={557} height={420} className='w-full h-[300px] lg:h-[420px] object-cover d2c_slide_animation' />
                            </div>
                            <div className='col-span-4'>
                                <Image src={serviceDetailsImage2.src} alt="Service Details Image" width={267} height={420} className='w-full h-[300px] lg:h-[420px] object-cover d2c_slide_animation' />
                            </div>
                        </div>

                        <div className='order-4 md:order-3 grid grid-cols-12 gap-4 h-full'>
                            <div className='col-span-4'>
                                <Image src={serviceDetailsImage3.src} alt="Service Details Image" width={557} height={420} className='w-full h-[300px] lg:h-[420px] h-full object-cover d2c_slide_animation' />
                            </div>
                            <div className='col-span-8'>
                                <Image src={serviceDetailsImage4.src} alt="Service Details Image" width={267} height={420} className='w-full h-[300px] lg:h-[420px] h-full object-cover d2c_slide_animation' />
                            </div>
                        </div>

                        <div className='space-y-7 flex flex-col justify-center order-3 md:order-4'>
                            <SectionHeader
                                title="Что мы строим"
                                colors={{ "2+": "#2563EB" }}
                                className='!mb-6'
                            />
                            <ul className='space-y-4' data-aos="fade-up">
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                    Коммерческие проекты – Офисы, торговые площади и промышленные застройки.
                                </li>
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                    Жилые сообщества - Подразделения, кондоминиумы и индивидуальные жилищные проекты.
                                </li>
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                    Реконструкция и перепланировка – Модернизация пространств для соответствия современным стандартам.
                                </li>
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                    Инфраструктурная поддержка – Дороги, дренажные системы и коммуникации для поддержки.
                                </li>
                            </ul>
                        </div>
                        
                        <div className='space-y-7 flex flex-col justify-center order-5'>
                            <SectionHeader
                                title="Почему выбирают нас"
                                colors={{ "1+": "#2563EB" }}
                                className='!mb-6'
                            />
                            <ul className='space-y-4' data-aos="fade-up">
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                    Опытные команды с послужным списком в различных масштабах проектов
                                </li>
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                    Интеграция геодезии, планирования и инженерии под одной крышей
                                </li>
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                    Доставка вовремя, в рамках бюджета с полной прозрачностью
                                </li>
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                   Прочные партнерства с надежными субподрядчиками и торговцами
                                </li>
                            </ul>
                        </div>

                        <div className='order-6 h-full'>
                            <div className='h-full'>
                                <Image src={serviceDetailsImage5.src} alt="Service Details Image" width={791} height={334} className='w-full h-[334px] object-cover d2c_slide_animation' />
                            </div>
                        </div>

                        <div className='order-7 h-full'>
                            <div>
                                <Image src={serviceDetailsImage6.src} alt="Service Details Image" width={791} height={334} className='w-full h-[334px] object-cover d2c_slide_animation' />
                            </div>
                        </div>

                        <div className='order-8'>
                            <SectionHeader
                                title="Наша команда, наша сила"
                                colors={{ "2+": "#2563EB" }}
                                className='!mb-6'
                            />
                            <p data-aos="fade-up">В основе каждого успешного строительства - команда, которая работает как единое целое. Мы обеспечиваем, чтобы архитекторы, инженеры, геодезисты, строители.</p>
                            <p data-aos="fade-up">субподрядчики согласовывались безупречно - давая вам гладкий процесс и структуру, которой можно доверять.</p>
                        </div>
                    </div>

                    <div>
                        <SectionHeader
                            title="Финальный результат"
                            colors={{ "1+": "#2563EB" }}
                            description="Будь то новая застройка, общественный проект или модернизация недвижимости, SurveyRidge привносит ясность, экспертизу и командную работу."
                            className='!mb-6'
                        />
                        <div>
                            <Image src={serviceDetailsImage7.src} alt="Service Details Image" width={1700} height={720} className='w-full h-[500px] xl:h-[700px] h-full object-cover d2c_slide_animation' />
                        </div>
                    </div>
                </div>
            </section>
        </ClientWrapper>
	)
}