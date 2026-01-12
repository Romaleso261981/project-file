import Script from 'next/script';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'BreadcrumbList';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const baseUrl = 'https://project-file-woad.vercel.app';

  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'SurveyRidge',
          description: 'Професійні геодезичні послуги та земельні зйомки',
          url: baseUrl,
          logo: `${baseUrl}/images/logo/logo.svg`,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-212-555-9876',
            contactType: 'customer service',
            email: 'info@surveyridge.com',
            areaServed: 'RU',
            availableLanguage: ['ru', 'en']
          },
          sameAs: [
            // Додайте посилання на соціальні мережі, якщо вони є
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: '6391 Elgin St.',
            addressLocality: 'Celina',
            addressRegion: 'Delaware',
            postalCode: '10299',
            addressCountry: 'US'
          }
        };

      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'SurveyRidge',
          url: baseUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/blogs/?search={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          }
        };

      case 'BreadcrumbList':
        return data || {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: []
        };

      default:
        return {};
    }
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  );
}
