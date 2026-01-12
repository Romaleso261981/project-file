'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import Toast from 'react-hot-toast';
import PrimaryButton from './primary-button';
import { IoIosArrowDown } from 'react-icons/io';

type ContactFormInputs = {
    nameRequired: string,
    emailRequired: string,
    numberRequired: string,
    messageRequired: string,
    serviceRequired: string,
}

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormInputs>();

    const selectedService = watch('serviceRequired', '');

    const onSubmit = async () => {
        try {
            Toast.success('Your information is submitted!');
            reset();
        } catch {
            Toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <form className="space-y-4 xl:space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name and email */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6" data-aos="fade-up" data-aos-delay="500">
                <div className="md:col-span-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter first name"
                        {...register("nameRequired", { required: true })}
                    />
                    {errors.nameRequired && (
                        <span className="mt-2 inline-block font-primary text-red-400 text-sm">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="md:col-span-3">
                    <label className="form-label">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email address"
                        {...register("emailRequired", { required: true })}
                    />
                    {errors.emailRequired && (
                        <span className="mt-2 inline-block font-primary text-red-400 text-sm">
                            This field is required
                        </span>
                    )}
                </div>
            </div>

            {/* Phone + Services */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6" data-aos="fade-up" data-aos-delay="500">
                <div className="col-span-3">
                    <label className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter phone number"
                        {...register("numberRequired", { required: true })}
                    />
                    {errors.numberRequired && (
                        <span className="mt-2 inline-block font-primary text-red-400 text-sm">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="col-span-3">
                <label className="form-label">Service</label>
                    <div className="relative w-full">
                        <select
                            {...register('serviceRequired', { required: 'Please select this field' })}
                            defaultValue=""
                            className={`form-control appearance-none ${selectedService !== '' ? 'text-secondary-light' : 'text-secondary-light/80'}`}
                        >
                            <option value="" disabled>
                                Select Service
                            </option>
                            <option value="Construction">Construction</option>
                            <option value="Architecture">Architecture</option>
                            <option value="Project Planning">Project Planning</option>
                            <option value="Interior">Interior</option>
                        </select>

                        {/* Icon */}
                        <IoIosArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-2xl ${selectedService !== 'text-secondary-light/80' ? 'text-secondary-light' : 'text-secondary-light/80'}`} />
                    </div>

                    {errors.serviceRequired && <span className="mt-2 inline-block font-primary text-red-400 text-sm">{errors.serviceRequired.message}</span>}
                </div>
            </div>

            {/* Message */}
            <div data-aos="fade-up" data-aos-delay="600">
                <label className="form-label">Messages</label>
                <textarea
                    rows={4}
                    className="form-control"
                    placeholder="Enter your message"
                    {...register("messageRequired", { required: true })}
                ></textarea>
                {errors.messageRequired && (
                    <span className="mt-2 inline-block font-primary text-red-400 text-sm">
                        This field is required
                    </span>
                )}
            </div>

            {/* Submit */}
            <div data-aos="fade-up" data-aos-delay="700">
                <PrimaryButton
                    text={isSubmitting ? "Send" : "Send Now"}
                    as="button"
                    type="submit"
                />
            </div>
        </form>
    );
}
