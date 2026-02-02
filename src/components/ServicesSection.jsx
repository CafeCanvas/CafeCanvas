import React from 'react';
import { Globe, Smartphone, TrendingUp, Palette, Database, Code2 } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe size={48} />,
      title: "Website Development",
      description: "Custom, responsive websites tailored to your industry — from clinics and law firms to e-commerce and portfolios. Built for speed, SEO, and conversions."
    },
    {
      icon: <Smartphone size={48} />,
      title: "Mobile App Development",
      description: "Native and cross-platform apps for iOS and Android. From booking systems to customer engagement tools, we build apps that users love."
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Digital Marketing & SEO",
      description: "Data-driven strategies to grow your online visibility. Google Ads, social media campaigns, local SEO, and analytics that drive real results."
    },
    {
      icon: <Palette size={48} />,
      title: "Branding & Identity",
      description: "Complete visual identity packages including logo design, color palettes, typography, and brand guidelines that make your business memorable."
    },
    {
      icon: <Database size={48} />,
      title: "ERP & Custom Software",
      description: "Enterprise resource planning systems, inventory management, CRM solutions, and custom business software to streamline your operations."
    },
    {
      icon: <Code2 size={48} />,
      title: "API & Integrations",
      description: "Connect your systems with third-party services, payment gateways, shipping providers, and more. Seamless integrations for modern workflows."
    }
  ];

  return (
    <section id="services" className="bg-section">
      <div className="section-container">
        <div className="text-center mb-5">
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-600 text-sm font-semibold mb-4">
            What We Do
          </span>
          <h2 className="heading-1 mb-3 fade-in-up">Our Services</h2>
          <p className="body-large fade-in-up delay-1" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Full-stack digital solutions for businesses of all sizes — from startups to enterprises, across every industry.
          </p>
        </div>

        <div className="grid-services">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card fade-in-up delay-${index % 3 + 1}`}
            >
              <div className="text-orange mb-3">
                {service.icon}
              </div>
              <h3 className="heading-3 mb-3">{service.title}</h3>
              <p className="body-medium">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;