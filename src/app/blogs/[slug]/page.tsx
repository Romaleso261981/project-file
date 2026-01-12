import React from 'react'
import Blogs from "@/jsons/blogs.json";
import ClientWrapper from '@/components/shared/client-wrapper';
import SectionHeader from '@/components/shared/section-header';
import { Metadata } from 'next';
import Image from 'next/image';
import { GoDotFill } from 'react-icons/go';
import CtaSection from '@/components/shared/cta';
import CtaImage1 from '@/assets/images/cta-image-2.png';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "SurveyRidge - Blog Details - Laboratory and Research",
}

export async function generateStaticParams() { 
    return Blogs.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogDetailsIndex({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
	const { slug } = await params;
	const blog = Blogs.find((s) => s.slug === slug);

	if (!blog) {
		return <p className="container py-10">Blogs not found.</p>;
	}
	return (
		<ClientWrapper>
            <section className='pt-10 md:mt-10 xl:mt-24 pb-5'>
                <div className="container space-y-6 md:space-y-10">
                    <div className='md:max-w-3/4 2xl:max-w-[55%]'>
                        <SectionHeader
                            title={blog.title}
                            colors={{"4+": "#FC5A11"}}
                            titleClass='!justify-start'
                        />

                        <div className="flex divide-x divide-secondary flex-wrap md:flex-nowrap" data-aos="fade-up">
                            <div className="flex items-center gap-1 md:gap-2 px-2 md:px-6 !pl-0">
                                <Image
                                    src={blog.authorImage}
                                    alt={blog.author}
                                    width={30}
                                    height={30}
                                    className="md:w-6 md:h-6 w-5 h-5 rounded-full border border-secondary/10"
                                />
                                <p className='text-sm'>{blog.author}</p>
                            </div>
                            <p className='px-2 md:px-6 text-sm'>{blog.date}</p>
                            <p className='px-2 md:px-6 text-sm'>4 min read</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-20">
                        <div className="col-span-12 md:col-span-8 space-y-6 md:space-y-10">

                            <div>
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    width={1200}
                                    height={640}
                                    className="h-[450px] xl:h-[600px] xl:h-[640px] w-full h-full object-cover mb-6 d2c_slide_animation"
                                />
                            </div>
                            <div data-aos="fade-up">
                                <p>{blog.description}</p>
                            </div>

                            <div className='space-y-2' data-aos="fade-up">
                                <h5 className='d2c_medium_title font-bold'>Why Planning Matters Before You Build</h5>
                                <p>Pre-construction planning - including boundary surveys, zoning checks, and site layout - establishes a sound baseline. Accurate data from the start mitigates cost overruns and construction delays.</p>
                            </div>

                            <div className='space-y-2' data-aos="fade-up">
                                <h5 className='d2c_medium_title font-bold'>Key Pre-Build Roadmap</h5>
                                <p>Pre-construction planning - including boundary surveys, zoning checks, and site layout - establishes a sound baseline. Accurate data from the start mitigates cost overruns and construction delays.</p>
                            </div>

                            <div className='space-y-2' data-aos="fade-up">
                                <div className='flex items-center gap-2'>
                                    <GoDotFill className='text-primary' />
                                    <h6 className='d2c_small_title'>Step 01:</h6>
                                </div>
                                <div>
                                    <h6 className='d2c_small_title'>Define Your Priorities</h6>
                                    <p>Understand your goals - budget, timing, permitted land use - and any constraints like terrain or site access.</p>
                                </div>
                            </div>

                            <div className='space-y-2' data-aos="fade-up">
                                <div className='flex items-center gap-2'>
                                    <GoDotFill className='text-primary' />
                                    <h6 className='d2c_small_title'>Step 02:</h6>
                                </div>
                                <div>
                                    <h6 className='d2c_small_title'>Explore Site Possibilities</h6>
                                    <p>Visit the site early. Think about slope, drainage, vegetation, access points, and how land orientation may affect utilities.</p>
                                </div>
                            </div>

                            <div className='space-y-2' data-aos="fade-up">
                                <div className='flex items-center gap-2'>
                                    <GoDotFill className='text-primary' />
                                    <h6 className='d2c_small_title'>Step 03:</h6>
                                </div>
                                <div>
                                    <h6 className='d2c_small_title'>Choose a Survey Type</h6>
                                    <p>Decide whether your project requires a boundary, topographic, ALTA‑NSPS, or as‑built survey. Each serves a different regulatory.</p>
                                </div>
                            </div>

                            <div className='space-y-2' data-aos="fade-up">
                                <div className='flex items-center gap-2'>
                                    <GoDotFill className='text-primary' />
                                    <h6 className='d2c_small_title'>Step 04:</h6>
                                </div>
                                <div>
                                    <h6 className='d2c_small_title'>Align Design with Permits</h6>
                                    <p>Produce a permit-ready site plan, setbacks, utility routing, and grading layout. Compliance with local regulations is easier.</p>
                                </div>
                            </div>

                            <div className='space-y-2' data-aos="fade-up">
                                <h5 className='d2c_medium_title font-bold'>What SurveyRidge Does Differently</h5>
                                <p>SurveyRidge brings licensed expertise, GPS and drone-based survey methods, and CAD-ready documentation. We streamline communication, minimize revisions, and deliver complete, clear data that supports developers, architects, and property planners.</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4 mt-6 md:mt-0">
                            <h4 className='d2c_medium_title xl:text-[34px] uppercase tracking-normal mb-8' data-aos="fade-down">Popular Blogs</h4>
                            <div className='space-y-6 md:space-y-8'>
                                {Blogs.filter((b) => b.slug !== slug).slice(0, 3).map((blog, idx) => {
                                    return (
                                        <Link key={idx} href={`/blogs/${blog.slug}`} className="flex flex-col overflow-hidden border-b pb-5 border-primary space-y-3 group">
                                            <div className="relative overflow-hidden d2c_slide_animation">
                                                <Image 
                                                    src={blog.image} 
                                                    alt={blog.title} 
                                                    className="w-full h-[150px] lg:h-[230px] object-cover border-b group-hover:scale-105 transition-all duration-600"
                                                    width={412}
                                                    height={231}
                                                />
                                                <p className="absolute top-4 left-4 bg-primary text-sm text-white px-4 py-2 min-w-[140px] text-center">
                                                    {blog.date} 
                                                </p>
                                            </div>

                                            <div className="flex flex-col pt-2 xl:pt-4 space-y-2 xl:space-y-4">
                                                <div className="flex gap-8" data-aos="fade-up">
                                                    <p>Author</p>
                                                    <p>{blog.author}</p>
                                                </div>

                                                <h2 className="d2c_small_title xl:text-2xl font-bold group-hover:text-primary transition-all duration-600 leading-[1.1] xl:leading-[1.4] line-clamp-2" data-aos="fade-up">
                                                    {blog.title}
                                                </h2>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                
            </section>

            <section className='pb-5'>
                <CtaSection 
                    title="Turn Property Plans into Reality, Confidently"
                    description="Get Your Free Consultation Now"
                    image={CtaImage1.src}
                    descriptionClass='!font-bold text-base lg:text-2xl xl:text-3xl font-primary'
                    className='pt-5 lg:pt-10 2xl:pt-20'
                />
            </section>
    </ClientWrapper>
	)
}