"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

// Import client images
import clientImage1 from '@/assets/images/client-image-1.jpg'
import clientImage2 from '@/assets/images/client-image-2.jpg'
import clientImage3 from '@/assets/images/client-image-3.jpg'
import clientImage4 from '@/assets/images/client-image-4.jpg'
import { FaStar } from 'react-icons/fa6'
import CountUp from './count-up'
import quoteIcon from '../../../public/images/quote_left_icon.png'
import { LuMoveLeft, LuMoveRight } from 'react-icons/lu'
import { StaticImageData } from 'next/image'

interface Testimonial {
    id: number
    quote: string
    authorName: string
    authorTitle: string
    authorImage: StaticImageData
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Professional, precise, and dependable. The team delivered detailed site layouts that helped us move forward with confidence. They handled everything - from the fieldwork to the final plans.",
        authorName: "Arlene McCoy",
        authorTitle: "CEO at saira",
        authorImage: clientImage1
    },
    {
        id: 2,
        quote: "Outstanding service and attention to detail. Their expertise in land surveying and site planning exceeded our expectations. The team was responsive and delivered results on time.",
        authorName: "John Smith",
        authorTitle: "Project Manager at BuildCo",
        authorImage: clientImage2
    },
    {
        id: 3,
        quote: "Highly professional team with excellent technical skills. They provided comprehensive drainage solutions and site analysis that made our project a success.",
        authorName: "Sarah Johnson",
        authorTitle: "Director at Urban Developers",
        authorImage: clientImage3
    },
    {
        id: 4,
        quote: "Exceptional quality and reliability. Their surveying work was thorough and accurate, helping us avoid costly mistakes during construction. Highly recommend their services.",
        authorName: "Michael Brown",
        authorTitle: "CEO at Construct Ltd",
        authorImage: clientImage4
    }
]

export default function Testimonial() {
    const swiperRef = useRef<SwiperType | null>(null)
    const [activeIndex, setActiveIndex] = React.useState(0)

    const totalSlides = testimonials.length
    const progressPercentage = ((activeIndex + 1) / totalSlides) * 100

    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
                    
                    {/* Left Side - Heading */}
                    <div className="lg:col-span-4">
                        <h2 className="d2c_title uppercase leading-tight">
                            What our <span className="text-primary">clients say</span>
                        </h2>
                    </div>

                    {/* Right Side - Testimonials */}
                    <div className="lg:col-span-8">
                        
                        {/* Rating Section */}
                        <div className="flex flex-col items-start gap-4 mb-8 max-w-[180px] md:ml-auto">
                            <div className="flex -space-x-3">
                                <Image 
                                    src={clientImage1} 
                                    alt="Client" 
                                    width={48} 
                                    height={48} 
                                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                    data-aos="fade-right"
                                    data-aos-delay="100"
                                />
                                <Image 
                                    src={clientImage2} 
                                    alt="Client" 
                                    width={48} 
                                    height={48} 
                                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                    data-aos="fade-right"
                                    data-aos-delay="200"
                                />
                                <Image 
                                    src={clientImage3} 
                                    alt="Client" 
                                    width={48} 
                                    height={48} 
                                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                    data-aos="fade-right"
                                    data-aos-delay="300"
                                />
                                <Image 
                                    src={clientImage4} 
                                    alt="Client" 
                                    width={48} 
                                    height={48} 
                                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                    data-aos="fade-right"
                                    data-aos-delay="400"
                                />
                            </div>
                            
                            <div className="ml-2">
                                <div className="flex items-center gap-2 mb-1" data-aos="fade-up">
                                    <span className="d2c_small_title font-bold">4.8</span>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar key={index} className='text-primary' />
                                        ))}
                                    </div>
                                </div>
                                <p data-aos="fade-up">from <CountUp to={500} duration={2} separator="," />+ reviews</p>
                            </div>
                        </div>

                        {/* Swiper Slider */}
                        <div className="relative mt-16 xl:mt-32">
                            {/* Vertical Progress Bar - Right Side */}
                            <div className="absolute top-0 right-0 h-full w-[2px] bg-[#F5EBE6] rounded-full overflow-hidden z-10">
                                <div 
                                    className="w-full bg-primary rounded-full transition-all duration-500 ease-out"
                                    style={{ height: `${progressPercentage}%` }}
                                ></div>
                            </div>
                            
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                direction="horizontal"
                                onSwiper={(swiper) => { swiperRef.current = swiper }}
                                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                speed={800}
                                className="testimonial-swiper"
                            >
                                {testimonials.map((testimonial) => (
                                    <SwiperSlide key={testimonial.id}>
                                        <div className='pr-4'>
                                            {/* Quote Icon */}
                                            <Image src={quoteIcon} alt="Quote Icon" width={128} height={128} data-aos="fade-down" className="max-w-12 max-h-13 object-contain mb-6" />

                                            {/* Testimonial Text */}
                                            <p className="text-lg md:text-2xl 2xl:text-3xl mb-8" data-aos="fade-up">
                                                &ldquo;{testimonial.quote}&rdquo;
                                            </p>

                                            {/* Author Info */}
                                            <div className="flex items-center gap-4" data-aos="fade-up">
                                                <Image 
                                                    src={testimonial.authorImage} 
                                                    alt={testimonial.authorName} 
                                                    width={56} 
                                                    height={56} 
                                                    className="w-12 h-12 xl:w-14 xl:h-14 rounded-full object-cover"
                                                />
                                                <div>
                                                    <h4 className="text-lg xl:text-xl font-bold text-secondary mb-0">
                                                        {testimonial.authorName}
                                                    </h4>
                                                    <p className="text-sm xl:text-base text-secondary-light">
                                                        {testimonial.authorTitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="flex gap-2 max-w-fit ml-auto absolute bottom-0 right-8 z-20 px-2">
                                <button
                                    aria-label="Previous"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    className="text-2xl text-[#F5EBE6] hover:text-primary transition-all duration-600 cursor-pointer"
                                >
                                    <LuMoveLeft />
                                </button>
                                <button
                                    aria-label="Next"
                                    onClick={() => swiperRef.current?.slideNext()}
                                    className="text-2xl text-[#F5EBE6] hover:text-primary transition-all duration-600 cursor-pointer"
                                >
                                    <LuMoveRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

