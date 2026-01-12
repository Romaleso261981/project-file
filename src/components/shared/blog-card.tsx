import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
    slug: string;
    title: string;
    author: string;
    authorImage: string;
    date: string;
    image: string;
    description: string;
    className?: string;
}

export default function BlogCard({
    slug,
    title,
    author,
    authorImage,
    date,
    image,
    description,
    className = "",
}: BlogCardProps) {
    return (
        <Link
            href={`/blogs/${slug}`}
            className={`p-4 md:p-6 xl:p-10 border block border-primary-light-shade bg-[#FEFCFB] space-y-6 group ${className}`} data-aos="fade-up"
        >
            <div className="grid grid-cols-12 gap-3 md:gap-5">
                <div className="col-span-4 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        width={227}
                        height={127}
                        className="w-full h-full object-cover group-hover:scale-108 transition-all duration-600"
                    />
                </div>
                <div className="col-span-8 flex flex-col justify-between">
                    <h5 className="d2c_medium_title font-bold group-hover:text-primary transition-all duration-600 tracking-[-1px] line-clamp-2">
                        {title}
                    </h5>
                    <div className="flex flex-row items-center gap-4 xl:gap-10 pt-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src={authorImage}
                                alt={author}
                                width={30}
                                height={30}
                                className="w-6 h-6 rounded-full border border-secondary/10"
                            />
                            <p className="text-xs md:text-sm xl:text-base">{author}</p>
                        </div>
                        <p className="text-xs md:text-sm xl:text-base">{date}</p>
                    </div>
                </div>
            </div>

            <p className="indent-6 line-clamp-2">{description}</p>

            <hr className="border-t-[1px] border-primary-light-shade" />
        </Link>
    );
}
