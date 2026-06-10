import { Metadata } from "next";
import { SparkInnov8Content } from "@/components/sparkinnov8-content";
import { SITE_URL } from "@/lib/seo";
 
export const metadata: Metadata = {
  title: "SparkInnov8 Lab | School Robotics & AI Lab Setup | GAS AI",
  description:
    "SparkInnov8 by GAS AI brings Arduino, IoT, robotics & AI labs to schools. Complete lab setup, curriculum & training for the next generation of student innovators.",
  keywords: [
    "sparkinnov8 lab",
    "sparkinnov8 program",
    "school robotics lab India",
    "robotics education for schools",
    "AI labs for students",
    "Arduino lab for schools",
    "IoT lab setup schools",
    "STEM education India",
    "robotics curriculum schools",
    "school AI program",
    "student robotics lab",
    "SparkInnov8 GAS",
    "school technology lab",
    "robotics training for students",
    "embedded systems education",
  ],
  alternates: {
    canonical: `${SITE_URL}/sparkinnov8`,
  },
  openGraph: {
    title: "SparkInnov8 Lab | School Robotics & AI Lab Setup | GAS AI",
    description:
      "Complete Arduino, IoT, robotics & AI lab setup for schools. Curriculum, training & certification for the next generation of innovators.",
    url: `${SITE_URL}/sparkinnov8`,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "SparkInnov8 - Robotics & AI Labs for Schools" }],
  },
  twitter: {
    title: "SparkInnov8 Lab | School Robotics & AI Lab Setup | GAS AI",
    description:
      "Arduino, IoT, robotics & AI lab setup for schools. Empowering the next generation of student innovators.",
  },
};
 
export default function SparkInnov8Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SparkInnov8 School Lab Setup",
    "image": `${SITE_URL}/logo.png`,
    "description": "Complete robotics, Arduino, IoT & AI lab setup program for schools. Includes curriculum, equipment, student training and certifications.",
    "brand": {
      "@type": "Brand",
      "name": "SparkInnov8"
    },
    "offers": {
      "@type": "Offer",
      "url": `${SITE_URL}/sparkinnov8`,
      "priceCurrency": "INR",
      "price": "0",
      "valueAddedService": {
        "@type": "Service",
        "name": "Robotics Curriculum and Lab Installation"
      }
    }
  };
 
  return (
    <div className="py-24 bg-brand-black min-h-screen relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Background Effect */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-cyan/10 to-transparent pointer-events-none" />
      <SparkInnov8Content />
    </div>
  );
}
