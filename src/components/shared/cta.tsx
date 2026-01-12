import React from 'react'
import SectionHeader from './section-header'
import PrimaryButton from './primary-button'
import Image, { StaticImageData } from 'next/image'

type CtaSectionProps = {
  title: string
  description: string
  image: StaticImageData | string
  buttonText?: string
  buttonHref?: string,
  descriptionClass?: string
  className?: string
}

export default function CtaSection({
  title,
  description,
  image,
  buttonText = "Получить оценку участка",
  buttonHref = "/contact",
  descriptionClass = "",
  className = ""
}: CtaSectionProps) {
  return (
    <section className={`bg-primary py-0 ${className}`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Text */}
          <div className="md:col-span-6 lg:col-span-7 text-center md:text-left py-14 xl:py-28">
            <SectionHeader
              title={title}
              description={description}
              titleClass="text-white"
              descriptionClass={`text-white xl:max-w-[65%] ${descriptionClass}`}
            />
            <PrimaryButton 
              text={buttonText} 
              href={buttonHref} 
              className="bg-white !text-primary hover:!text-white" 
              data-aos="fade-up"
            />
          </div>

          {/* Image */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-end items-end">
            <Image 
              src={image} 
              alt="CTA Image" 
              width={748} 
              height={500} 
              className="w-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
