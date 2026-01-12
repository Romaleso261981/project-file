"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroImage from "@/assets/images/hero-image.jpg";
import HeroDotLiner from "@/assets/images/hero-dot-liner.svg";
import LinerImage from "@/assets/images/liner.svg";
import SectionHeader from "@/components/shared/section-header";
import PrimaryButton from "@/components/shared/primary-button";
import CircularText from "@/components/animation/circular-text";
import AboutIcon from '@/assets/images/about-icon.svg'
import clientImage1 from '@/assets/images/client-image-1.jpg'
import clientImage2 from '@/assets/images/client-image-2.jpg'
import clientImage3 from '@/assets/images/client-image-3.jpg'
import clientImage4 from '@/assets/images/client-image-4.jpg'
import CountUp from "@/components/shared/count-up";
import Counter from "@/components/shared/counter";
import SlideImage from "@/components/shared/slide-image";
import ScrollVelocity from "@/components/animation/scroll-velocity";
import ServicesData from "@/jsons/services.json";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const ClientImages = [clientImage1, clientImage2, clientImage3, clientImage4];
    const circularTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (circularTextRef.current) {
            // Set initial state
            gsap.set(circularTextRef.current, {
                opacity: 0,
                x: "-100%"
            });

            // Create animation
            const animation = gsap.to(circularTextRef.current, {
                opacity: 1,
                x: "0%",
                duration: 1.5,
                ease: "power1.out"
            });

            // Create ScrollTrigger
            ScrollTrigger.create({
                trigger: circularTextRef.current,
                start: "top 80%",
                end: "bottom 20%",
                animation: animation,
                toggleActions: "play none none reverse"
            });
        }

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="space-y-16 pt-12 pb-4 md:py-16">
            <div className="container">
                <div className="grid grid-cols-12 gap-4 md:gap-10 lg:gap-6">
                    <div className="col-span-12 md:col-span-6 lg:col-span-7 space-y-4 md:space-y-6">
                        <div className="text-center md:text-left">
                            <h4 className="uppercase text-xs md:text-base" data-aos="fade-down">Construction Company</h4>
                            <Image
                                src={HeroDotLiner.src}
                                alt="Hero Dot Liner"
                                width={195}
                                height={2}
                                className="max-w-fit h-auto object-cover d2c_slide_animation mx-auto md:mx-0"
                            />
                        </div>
                        <SectionHeader
                            title="Designing Your Dream"
                            colors={{"0": "#FC5A11"}}
                            className="!mb-2"
                            titleClass="text-6xl lg:text-[80px] xl:text-[120px] 2xl:text-168 tracking-[-4px] xl:tracking-[-8px]"
                        />
                        <div className="mt-6 md:mt-8 flex flex-col lg:flex-row gap-4 lg:gap-6" data-aos="fade-up">
                            <PrimaryButton
                                text="Get a Site Plan Estimate"
                                href="/contact"
                                className="w-full lg:w-auto"
                            />
                            <PrimaryButton
                                text="Get A Free Consultation"
                                href="/contact"
                                className="bg-transparent !text-secondary hover:!text-white border border-secondary before:bg-secondary w-full lg:w-auto"
                            />
                        </div>

                        <Counter variant="compact" />
                    </div>
                    <div className="hidden xl:flex xl:col-span-1 2xl:col-span-2 h-full flex-col justify-center items-center">
                        <Image
                            src={LinerImage.src}
                            alt="Liner Icon"
                            width={220}
                            height={2}
                            className="max-w-fit h-auto object-cover d2c_slide_animation"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4 2xl:col-span-3 h-full flex flex-col justify-between lg:pt-[10%] 2xl:pt-[25%]">
                        <div className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left">
                            <p data-aos="fade-up">SurveyRidge is here to build your construction for the country gained century of development in new era of machine.</p>
                            <div 
                                ref={circularTextRef}
                                className='flex justify-center relative w-full max-w-fit rounded-full border border-primary-light-shade bg-offWhite p-0 mt-6 2xl:mt-8'
                            >
                                <CircularText
                                    text=" AN AWARD WINNING COMPANY"
                                    onHover="speedUp"
                                    spinDuration={15}
                                    className='!w-[130px] !h-[130px] lg:!w-[150px] lg:!h-[150px] xl:!w-[170px] xl:!h-[170px]'
                                />
                                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white border border-primary/20 w-20 h-20 lg:w-24 lg:h-24 rounded-full grid place-items-center'>
                                    <Image
                                        src={AboutIcon.src}
                                        alt="About Icon"
                                        width={80}
                                        height={62}
                                        className='max-w-[50px] max-h-[50px] lg:max-w-[70px] lg:max-h-[70px] object-cover'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="md:flex items-center justify-center md:justify-start gap-3 md:gap-4 p-3 lg:p-4 bg-offWhite md:rounded-l-full border border-primary-light-shade mt-6 overflow-hidden">
                            <div className='flex justify-center md:justify-start -space-x-4 mb-3 md:mb-0'>
                                {ClientImages.map((img, index) => (
                                    <Image
                                        key={index}
                                        src={img}
                                        alt={`Client Profile Image ${index + 1}`}
                                        className="w-11 h-11 object-cover rounded-full border-2 border-white"
                                        width={44}
                                        height={44}
                                        data-aos="fade-right"
                                        data-aos-delay={400 + index * 100}
                                    />
                                ))}
                            </div>
                            <h5 className='text-base text-secondary font-medium text-center md:text-left' data-aos="fade-left">Reviews from <CountUp from={0} to={1.2} duration={1} />K clients</h5 >
                        </div>
                    </div>
                </div>
            </div>
            <SlideImage
                src={HeroImage.src}
                width={1920}
                height={1080}
                className="w-full h-[250px] md:h-[500px] xl:h-[700px] 2xl:h-[1080px] object-cover"
            />

            <div className="bg-primary mt-6 md:mt-10 xl:mt-24">
                <ScrollVelocity
                    items={[
                        ServicesData.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-4 items-center py-6 px-10 rounded-[20px] bg-linen max-w-fit"
                            >
                                <h4 className="d2c_medium_title text-white xl:text-[34px] uppercase tracking-[1px]">{item.name}</h4>
                            </div>
                        ))
                    ]}
                    velocity={100}
                    numCopies={4}
                    className="flex gap-4 md:gap-6"
                />
            </div>
        </section>
    )
}