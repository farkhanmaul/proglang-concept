import { Metadata } from 'next';
import { SITE_CONFIG, SEO_KEYWORDS } from '@/lib/constants';
import { ProgrammingLanguage } from '@/types';

export function generateMetadata(options: {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}): Metadata {
  const {
    title = SITE_CONFIG.name,
    description = SITE_CONFIG.description,
    keywords = SEO_KEYWORDS,
    canonical,
    ogImage = SITE_CONFIG.ogImage,
  } = options;

  const fullTitle = title === SITE_CONFIG.name ? title : `${title} | ${SITE_CONFIG.name}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: SITE_CONFIG.author.name }],
    creator: SITE_CONFIG.author.name,
    publisher: SITE_CONFIG.author.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: canonical || SITE_CONFIG.url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: SITE_CONFIG.author.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'verification-token-here', // Add actual verification token
    },
  };
}

export function generateLanguageMetadata(language: ProgrammingLanguage): Metadata {
  const title = `${language.name} Programming Language`;
  const description = `Learn about ${language.name}, created by ${language.creator} in ${language.year}. ${language.description}`;
  const keywords = [
    language.name.toLowerCase(),
    `${language.name} programming`,
    `${language.name} tutorial`,
    language.creator,
    language.year.toString(),
    ...language.paradigms.flatMap(p => p.characteristics),
    language.category,
    'programming language',
    'software development',
  ];

  return generateMetadata({
    title,
    description,
    keywords,
    canonical: `/languages/${language.id}`,
  });
}

export function generateStructuredData(language: ProgrammingLanguage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: language.name,
    description: language.description,
    url: language.website,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform',
    programmingLanguage: language.name,
    author: {
      '@type': 'Person',
      name: Array.isArray(language.creator) ? language.creator[0] : language.creator,
    },
    dateCreated: language.year.toString(),
    license: language.license,
    sameAs: [
      language.website,
      language.documentation,
      language.repository,
    ].filter(Boolean),
  };
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}