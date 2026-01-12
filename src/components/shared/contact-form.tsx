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
            Toast.success('Ваша информация отправлена!');
            reset();
        } catch {
            Toast.error('Что-то пошло не так. Пожалуйста, попробуйте снова.');
        }
    };

    return (
        <form className="space-y-4 xl:space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name and email */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6" data-aos="fade-up" data-aos-delay="500">
                <div className="md:col-span-3">
                    <label className="form-label">Полное имя</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Введите имя"
                        {...register("nameRequired", { required: true })}
                    />
                    {errors.nameRequired && (
                        <span className="mt-2 inline-block font-primary text-red-400 text-sm">
                            Это поле обязательно
                        </span>
                    )}
                </div>
                <div className="md:col-span-3">
                    <label className="form-label">Адрес электронной почты</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Введите адрес электронной почты"
                        {...register("emailRequired", { required: true })}
                    />
                    {errors.emailRequired && (
                        <span className="mt-2 inline-block font-primary text-red-400 text-sm">
                            Это поле обязательно
                        </span>
                    )}
                </div>
            </div>

            {/* Phone + Services */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6" data-aos="fade-up" data-aos-delay="500">
                <div className="col-span-3">
                    <label className="form-label">Номер телефона</label>
                    <input
                        type="tel"
                        className="form-control"
                        placeholder="Введите номер телефона"
                        {...register("numberRequired", { required: true })}
                    />
                    {errors.numberRequired && (
                        <span className="mt-2 inline-block font-primary text-red-400 text-sm">
                            Это поле обязательно
                        </span>
                    )}
                </div>
                <div className="col-span-3">
                <label className="form-label">Услуга</label>
                    <div className="relative w-full">
                        <select
                            {...register('serviceRequired', { required: 'Пожалуйста, выберите это поле' })}
                            defaultValue=""
                            className={`form-control appearance-none ${selectedService !== '' ? 'text-secondary-light' : 'text-secondary-light/80'}`}
                        >
                            <option value="" disabled>
                                Выберите услугу
                            </option>
                            <option value="Construction">Строительство</option>
                            <option value="Architecture">Архитектура</option>
                            <option value="Project Planning">Планирование проектов</option>
                            <option value="Interior">Интерьер</option>
                        </select>

                        {/* Icon */}
                        <IoIosArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-2xl ${selectedService !== 'text-secondary-light/80' ? 'text-secondary-light' : 'text-secondary-light/80'}`} />
                    </div>

                    {errors.serviceRequired && <span className="mt-2 inline-block font-primary text-red-400 text-sm">{errors.serviceRequired.message}</span>}
                </div>
            </div>

            {/* Message */}
            <div data-aos="fade-up" data-aos-delay="600">
                <label className="form-label">Сообщение</label>
                <textarea
                    rows={4}
                    className="form-control"
                    placeholder="Введите ваше сообщение"
                    {...register("messageRequired", { required: true })}
                ></textarea>
                {errors.messageRequired && (
                    <span className="mt-2 inline-block font-primary text-red-400 text-sm">
                        Это поле обязательно
                    </span>
                )}
            </div>

            {/* Submit */}
            <div data-aos="fade-up" data-aos-delay="700">
                <PrimaryButton
                    text={isSubmitting ? "Отправить" : "Отправить сейчас"}
                    as="button"
                    type="submit"
                />
            </div>
        </form>
    );
}
