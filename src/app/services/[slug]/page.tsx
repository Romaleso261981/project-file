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

export const metadata: Metadata = {
  title: "Services Details - SurveyRidge - Property Surveyors Template",
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
		return <p className="container py-10">Services Item Not Found.</p>;
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
                        <p data-aos="fade-up">At SurveyRidge, construction is more than just delivering a structure - it’s about creating spaces that last, improve communities, and bring visions to life. We want every employee, partner, and trade professional to feel part of the common good, working as one cohesive team.</p>
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
                                title="Our Approach"
                                colors={{ "1+": "#FC5A11" }}
                                description="From pre-construction planning to project completion, we believe in a hands-on, transparent, and collaborative process."
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
                                    We work closely with clients, engineers to maintain open communication
                                </li>
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                    Strict adherence to safety guidelines and regulatory codes is built into every project.
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
                                title="What We Build"
                                colors={{ "2+": "#FC5A11" }}
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
                                    Commercial Projects – Offices, retail spaces, and industrial developments.
                                </li>
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                    Residential Communities - Subdivisions, condominiums, and custom housing projects.
                                </li>
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                    Renovation & Remodelling – Upgrading spaces to meet modern standards.
                                </li>
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                    Infrastructure Support – Roads, drainage systems, and utilities to support.
                                </li>
                            </ul>
                        </div>
                        
                        <div className='space-y-7 flex flex-col justify-center order-5'>
                            <SectionHeader
                                title="Why Choose Us"
                                colors={{ "1+": "#FC5A11" }}
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
                                    Experienced teams with a track record across diverse project scales
                                </li>
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                    Integration of surveying, planning, and engineering under one roof
                                </li>
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                    On-time, on-budget delivery with complete transparency
                                </li>
                                <li className='flex gap-2 items-baseline'>
                                    <Image 
                                        src={uilderEngineerIcon.src} 
                                        alt="Service Details Image" 
                                        width={16} 
                                        height={16} 
                                        className='max-w-[16px] max-h-[16px] h-full object-contain relative top-.5' 
                                    />
                                   Strong partnerships with reliable subcontractors and trades
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
                                title="Our Team, Our Strength"
                                colors={{ "2+": "#FC5A11" }}
                                className='!mb-6'
                            />
                            <p data-aos="fade-up">At the heart of every successful build is a team that works as one. We ensure that architects, engineers, surveyors, builders.</p>
                            <p data-aos="fade-up">subcontractors align seamlessly - giving you a smooth process and a structure you can trust.</p>
                        </div>
                    </div>

                    <div>
                        <SectionHeader
                            title="Last Outcome"
                            colors={{ "1+": "#FC5A11" }}
                            description="Whether it’s a new development, a community project, or a property upgrade, SurveyRidge brings clarity, expertise, and teamwork to the table."
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