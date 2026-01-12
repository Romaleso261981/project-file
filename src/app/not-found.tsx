import Link from 'next/link';
import { Metadata } from 'next';
import PrimaryButton from '@/components/shared/primary-button';

export const metadata: Metadata = {
  title: "Страница не найдена - 404",
  description: "Запрашиваемая страница не найдена. Вернитесь на главную страницу SurveyRidge.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Страница не найдена
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          К сожалению, запрашиваемая страница не существует или была перемещена.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryButton 
            text="Вернуться на главную" 
            href="/"
            className="inline-block"
          />
          <Link 
            href="/contact/"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors inline-block"
          >
            Связаться с нами
          </Link>
        </div>
      </div>
    </div>
  );
}
