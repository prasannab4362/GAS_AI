import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gasautomation.ai';
  
  const staticRoutes = [
    '',
    '/services',
    '/insights',
    '/labs',
    '/products',
    '/careers',
    '/contact',
    '/sparkinnov8',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceSlugs = [
    'home-automation',
    'business-automation',
    'industrial-automation',
    'ai-automation',
    'computer-vision',
    'robotics',
    'security',
    'product-development'
  ];

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
