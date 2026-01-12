
import FaqSection from "@/components/shared/faq";
import ContactForm from "@/components/shared/contact-form";
import SectionHeader from "@/components/shared/section-header";
import React from "react";
import ScrollVelocity from "@/components/animation/scroll-velocity";
import ServicesData from "@/jsons/services.json";

export default function ContactIndex() {
    return (
        <section className="pb-0">
            <div className="container">
                <div className="py-10 px-6 lg:p-20 shadow-[0_0_24px_0_rgba(0,0,0,0.08)] 2xl:max-w-[80%] mx-auto space-y-10">
                    <SectionHeader
                        title='Let’s work with us'
                        colors={{ "2+": "#FC5A11" }}
                        titleClass="!justify-center"
                    />
                    <ContactForm />

                    <div className="grid grid-cols-12 gap-4 p-6 lg:p-10 shadow-[0_0_24px_0_rgba(0,0,0,0.08)] border border-primary-light-shade" data-aos="fade-up">
                        <div className="col-span-12 md:col-span-4">
                            <h5 className="d2c_small_title mb-3">Call Us</h5>
                            <p className="text-base xl:text-lg">Phone: <a href="tel:12125559876">++1 (212) 555-9876</a></p>
                            <p className="text-base xl:text-lg">Support Hours:</p>
                            <p className="text-base xl:text-lg">Monday to Friday: 9 AM–6 PM</p>
                        </div>

                        <div className="col-span-12 md:col-span-5">
                            <h5 className="d2c_small_title mb-3">Email Us</h5>
                            <p className="text-base xl:text-lg">General Inquiries:<a href="mailto:info@mail.com">info@mail.com</a></p>
                            <p className="text-base xl:text-lg">Customer Support: <a href="mailto:support@mail.com">support@mail.com</a></p>
                            <p className="text-base xl:text-lg">Press & Media: <a href="mailto:press@mail.com">press@mail.com</a></p>
                        </div>

                        <div className="col-span-12 md:col-span-3">
                            <h5 className="d2c_small_title mb-3">Business Hours</h5>
                            <p className="text-base xl:text-lg">Monday to Friday:</p>
                            <p className="text-base xl:text-lg">9:00 AM – 6:00 PM</p>
                            <p className="text-base xl:text-lg">Saturday & Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary mt-24">
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

            <FaqSection />
        </section>
    );
}
