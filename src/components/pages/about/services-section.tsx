'use client'
import SectionHeader from '@/components/shared/section-header'
import Image from 'next/image'
import React from 'react'
import ServicesData from '@/jsons/services.json'
import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'

export default function ServicesSection() {
    return (
        <section>
            <div className="container">
                <SectionHeader title="What We Offer" colors={{"2": "#FC5A11"}} />

                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    {ServicesData.slice(0, 3).map((item, idx, arr) => {
                        const isLast = idx === arr.length - 1;
                        const isOdd = arr.length % 2 !== 0;

                        const responsiveCols =
                        isLast && isOdd
                            ? "col-span-12 md:col-span-6 lg:col-span-4 md:col-start-4"
                            : "col-span-12 md:col-span-6 lg:col-span-4";

                        return (
                            <Link
                                key={idx}
                                className={`bg-[#FEFCFB] scroll-animate border border-primary-light-shade p-8 group ${responsiveCols}`}
                                href={`/services/${item.slug}`}
                            >
                                <div className="flex justify-between gap-10 cursor-pointer">
                                    <h4 className="text-xl md:text-2xl 2xl:text-3xl font-primary text-secondary font-bold capitalize tracking-[-1px]">
                                        {item.name}
                                    </h4>
                                    <span className="text-secondary w-8 h-8 bg-primary rounded-full grid place-items-center text-white text-base group">
                                        <LuMoveRight className="transition-transform duration-500 -rotate-45 group-hover:rotate-0" />
                                    </span>
                                </div>

                                <div className="overflow-hidden transition-all duration-300 ease-in-out gap-4 md:gap-6 mt-6">
                                    <div>
                                        <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={342}
                                        height={192}
                                        className="w-full max-h-[192px] object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between pt-5">
                                        <p className="text-secondary-light line-clamp-3 lg:line-clamp-2 xl:line-clamp-3">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </section>
    )
}