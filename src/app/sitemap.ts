import { MetadataRoute } from 'next';
import { SITE_URL, serviceSlugs } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-10');

  const staticRoutes = [
    { route: '', priority: 1, changeFrequency: 'weekly' as const },
    { route: '/services', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/services/ai-automation', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/services/industrial-automation', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/services/business-automation', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/services/home-automation', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/services/robotics', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/services/computer-vision', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/services/security', priority: 0.75, changeFrequency: 'monthly' as const },
    { route: '/services/product-development', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/products', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/labs', priority: 0.75, changeFrequency: 'weekly' as const },
    { route: '/sparkinnov8', priority: 0.75, changeFrequency: 'weekly' as const },
    { route: '/insights', priority: 0.7, changeFrequency: 'weekly' as const },
    { route: '/careers', priority: 0.65, changeFrequency: 'monthly' as const },
    { route: '/contact', priority: 0.85, changeFrequency: 'monthly' as const },
  ].map((route) => ({
    url: `${SITE_URL}${route.route}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes.filter(
      (serviceRoute) => !staticRoutes.some((route) => route.url === serviceRoute.url),
    ),
  ];
}
