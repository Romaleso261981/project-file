'use client'
import Image from 'next/image'
import footerLogo from '../../../public/images/logo/footer-logo.svg'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Link from 'next/link';
import { useForm } from "react-hook-form"
import Toast from 'react-hot-toast';
import PrimaryButton from './primary-button';

export default function Footer() {
    type FormValues = {
        email: string
      }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = async () => {
        try {
            Toast.success('Ваша информация отправлена!',{
                duration: 500,
            });
            reset();
        } catch {
            Toast.error('Что-то пошло не так. Пожалуйста, попробуйте снова.',{
                duration: 500,
            });
        }
    };

    const currentYear = new Date().getFullYear();

	return (
        <>
            <footer className='pt-20'>
                <div className="container">

                    {/* <!-- Footer main --> */}
                    <div className="grid grid-cols-12 gap-4 md:gap-10 xl:gap-6">
                        <div className="col-span-12 md:col-span-6 xl:col-span-2 space-y-6">
                            <h4 className="d2c_footer_title">Быстрые ссылки</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="d2c_footer_link">Главная</Link>
                                </li>
                                <li>
                                    <Link href="/about" className="d2c_footer_link">О нас</Link>
                                </li>
                                <li>
                                    <Link href="/blogs" className="d2c_footer_link">Блог</Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="d2c_footer_link">Проекты</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-12 md:col-span-6 xl:col-span-3 md:pl-10 2xl:pl-20">
                            <h4 className="d2c_footer_title">Услуги</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/services" className="d2c_footer_link">3D сканирование и картографирование</Link>
                                </li>
                                <li>
                                    <Link href="/services" className="d2c_footer_link">Проектирование коммуникаций и дренажа</Link>
                                </li>
                                <li>
                                    <Link href="/services" className="d2c_footer_link">Планировка подразделений</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="d2c_footer_link">Планирование участка</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-12 md:col-span-6 xl:col-span-3 xl:pl-10">
                            <h4 className="d2c_footer_title">Полезные ссылки</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="d2c_footer_link">Условия использования</Link>
                                </li>
                                <li>
                                    <Link href="#" className="d2c_footer_link">Лицензия</Link>
                                </li>
                                <li>
                                    <Link href="#" className="d2c_footer_link">Журнал изменений</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="d2c_footer_link">Руководство по стилю</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-12 md:col-span-6 xl:col-span-4 md:pl-10">
                            <h4 className="d2c_footer_title">Подпишитесь на рассылку</h4>

                            <form onSubmit={handleSubmit(onSubmit)} className='flex justify-between items-center mt-8 lg:mt-14 border-b border-b-primary'>
                                <div className="relative w-full">
                                    <input
                                        type="email"
                                        placeholder={errors.email ? errors.email.message : "Электронная почта"}
                                        className={`form-control py-4 pl-0 bg-white focus:outline-0 border-0 ${
                                            errors.email ? ' placeholder-red-500' : ' placeholder-muted-dark/80'
                                        }`}
                                        {...register('email', {
                                        required: 'Электронная почта обязательна',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Неверный адрес электронной почты'
                                        }
                                        })}
                                    />
                                </div>


                                {/* Button */}
                                <PrimaryButton text="Отправить" as='button' type='submit' className='py-5 xl:py-[20px]' />
                            </form>
                        </div>
                    </div>

                    <div className='py-6 md:py-10 xl:py-20'>
                        <Link href="/">
                            <Image
                                src={footerLogo.src}
                                alt="Logo"
                                width={1700}
                                height={200}
                                className='mx-auto'
                            />
                        </Link>
                    </div>

                    {/* <!-- Copyright --> */}
                    <div className="grid md:grid-cols-12 gap-4 md:gap-6 py-6 d2c_copyright border-t border-t-primary">
                        <div className="col-span-12 md:col-span-7 lg:col-span-6">
                            <p className="text-center md:text-left text-inter">Авторские права © <span id="year">{currentYear}</span> <strong>DesignToCodes</strong>. Все права защищены</p>
                        </div>
                        <div className="col-span-12 md:col-span-5 lg:col-span-6 flex justify-center md:justify-end">
                            <div className="d2c_social_icon space-x-2 lg:space-x-4">
                                <Link href="#">
                                    <FaFacebookF />
                                </Link>
                                <Link href="#">
                                    <FaXTwitter />
                                </Link>
                                <Link href="#">
                                    <FaLinkedinIn />
                                </Link>
                                <Link href="#">
                                    <FaInstagram />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}