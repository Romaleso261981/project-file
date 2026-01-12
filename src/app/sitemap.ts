import { MetadataRoute } from 'next';
import blogsData from '@/jsons/blogs.json';
import servicesData from '@/jsons/services.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://project-file-woad.vercel.app';

  // Статичні сторінки
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Функція для парсингу дати з російського формату
  const parseDate = (dateString: string): Date | undefined => {
    // Мапінг російських місяців
    const monthMap: { [key: string]: string } = {
      'янв': '01', 'фев': '02', 'мар': '03', 'апр': '04',
      'май': '05', 'июн': '06', 'июл': '07', 'авг': '08',
      'сен': '09', 'окт': '10', 'ноя': '11', 'дек': '12'
    };

    try {
      // Формат: "1 авг 2025" або "15 сен 2025"
      const parts = dateString.trim().split(' ');
      if (parts.length === 3) {
        const day = parts[0].padStart(2, '0');
        const month = monthMap[parts[1].toLowerCase()];
        if (!month) {
          return undefined;
        }
        const year = parts[2];
        const isoDate = `${year}-${month}-${day}T00:00:00.000Z`;
        const parsed = new Date(isoDate);
        // Перевірка чи дата валідна
        if (!isNaN(parsed.getTime()) && parsed.getTime() > 0) {
          return parsed;
        }
      }
    } catch {
      // Якщо помилка, повертаємо undefined
      return undefined;
    }
    // Якщо не вдалося розпарсити, повертаємо undefined
    return undefined;
  };

  // Динамічні сторінки блогів
  const blogPages: MetadataRoute.Sitemap = blogsData.map((blog) => {
    const lastModified = parseDate(blog.date);
    return {
      url: `${baseUrl}/blogs/${blog.slug}/`,
      ...(lastModified && { lastModified }),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });

  // Динамічні сторінки послуг
  const servicePages: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...servicePages];
}
