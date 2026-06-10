export const SITE_URL = "https://gasai.in";
export const SITE_NAME = "GAS AI";
export const COMPANY_NAME = "Green Automation Solution";
export const LINKEDIN_URL = "https://www.linkedin.com/company/green-automation-solution";
export const INSTAGRAM_URL = "https://www.instagram.com/green_automation_solution";
export const GITHUB_URL = "https://github.com/prasannab4362/GAS_AI";
export const CONTACT_EMAIL = "contact@gasai.in";
export const CONTACT_PHONE = "+91-9080785352";

export const seoKeywords = [
  "Green Automation Solution",
  "GAS AI",
  "GAS automation",
  "AI automation company",
  "AI automation services",
  "IoT automation solutions",
  "industrial IoT company",
  "smart home automation India",
  "business process automation",
  "WhatsApp AI automation",
  "n8n workflow automation",
  "robotics automation company",
  "ROS robotics development",
  "computer vision solutions",
  "embedded systems development",
  "smart automation systems",
  "GAS Virtual Labs",
  "SparkInnov8 robotics lab",
];

export const serviceSlugs = [
  "home-automation",
  "business-automation",
  "industrial-automation",
  "ai-automation",
  "computer-vision",
  "robotics",
  "security",
  "product-development",
];

export const serviceNames = [
  "AI Automation",
  "IoT Automation",
  "Smart Home Automation",
  "Business Automation",
  "WhatsApp AI Automation",
  "Industrial Automation",
  "Industrial IoT",
  "Robotics and ROS Development",
  "Computer Vision",
  "Embedded Product Development",
];

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: COMPANY_NAME,
  alternateName: [SITE_NAME, "GAS", "Green Automation Solution (GAS)", "GAS Automation"],
  legalName: COMPANY_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/logo.png`,
  description:
    "Green Automation Solution (GAS AI) engineers AI automation, IoT automation, smart home systems, industrial IoT, robotics, computer vision, embedded products, and virtual technology labs.",
  foundingDate: "2023",
  slogan: "AI and smart automation hub",
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  areaServed: ["India", "Worldwide"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      contactType: "sales",
      areaServed: ["IN", "Worldwide"],
      availableLanguage: ["English", "Tamil"],
    },
  ],
  sameAs: [LINKEDIN_URL, INSTAGRAM_URL, GITHUB_URL],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "AI Automation",
    "Internet of Things",
    "Industrial IoT",
    "Smart Home Automation",
    "Business Automation",
    "Robotics",
    "ROS",
    "Computer Vision",
    "Natural Language Processing",
    "Embedded Systems",
    "Product Development",
    "Workflow Automation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Green Automation Solution services",
    itemListElement: serviceNames.map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: ["India", "Worldwide"],
      },
    })),
  },
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: `${SITE_NAME} - ${COMPANY_NAME}`,
  alternateName: [COMPANY_NAME, SITE_NAME, "GAS Automation"],
  description:
    "Official website of Green Automation Solution for AI automation, IoT automation, smart home systems, industrial IoT, robotics, and technology lab programs.",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/services?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};
