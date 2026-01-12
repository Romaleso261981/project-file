
import SectionHeader from '@/components/shared/section-header'
import React from 'react'
import Blogs from '@/jsons/blogs.json'
import BlogCard from '@/components/shared/blog-card';

export default function BlogIndex() {
    return (
        <section className='pb-0'>
            <div className="container">
                <SectionHeader
                    title='Архив блога'
                    titleClass='!justify-center'
                    className='mb-8 xl:mb-16'
                    colors={{ "1+": "#FC5A11" }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {Blogs.map((blog) => (
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
        </section>
    )
}
