'use client'
import SectionHeader from '@/components/shared/section-header'
import React from 'react'
import ServicesData from '@/jsons/services.json'
import ServiceCard from '@/components/shared/service-card'

export default function ServiceIndex() {
    return (
        <section>
            <div className="container">
                <SectionHeader
                    title='Professional Services'
                    colors={{ "1+": "#FC5A11" }}
                    titleClass='!justify-center'
                    className='mb-8 xl:mb-16'
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {ServicesData.map((service, idx) => (
                        <ServiceCard key={idx} {...service} variant="card" />
                    ))}
                </div>
            </div>
        </section>
    )
}