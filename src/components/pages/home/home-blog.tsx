import PrimaryButton from '@/components/shared/primary-button'
import SectionHeader from '@/components/shared/section-header'
import React from 'react'
import Blogs from '@/jsons/blogs.json'
import BlogCard from '@/components/shared/blog-card'

export default function HomeBlog() {
    return (
        <section>
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
                    <div className='px-16 py-10 md:py-24 bg-blog bg-no-repeat bg-cover bg-center text-center lg:text-left'>
                        <SectionHeader
                            title="Инсайты с поля от профессионалов"
                            colors={{ "5+": "#FC5A11" }}
                            titleClass='text-offWhite !justify-center lg:!justify-start'
                            className='!mb-6'
                        />
                        <PrimaryButton
                            text="Все блоги"
                            href="/blogs"
                        />
                    </div>

                    <div className='space-y-5'>
                        {Blogs.slice(0, 3).map((blog) => (
                            <BlogCard
                                key={blog.id}
                                slug={blog.slug}
                                title={blog.title}
                                author={blog.author}
                                authorImage={blog.authorImage}
                                date={blog.date}
                                image={blog.image}
                                description={blog.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}