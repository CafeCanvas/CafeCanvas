import React from 'react';
import { QrCode, Smartphone, Share2, Palette } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <QrCode size={48} />,
      title: "QR-based Ordering Website Development",
      description: "Custom-built websites with integrated QR code ordering systems that allow customers to browse menus, place orders, and pay directly from their phones."
    },
    {
      icon: <Smartphone size={48} />,
      title: "Digital Menu Integration",
      description: "Convert your traditional menus into interactive digital experiences with real-time updates, item availability tracking, and seamless ordering flows."
    },
    {
      icon: <Share2 size={48} />,
      title: "Social Media Packages",
      description: "Complete social media solutions including eye-catching posters, engaging reels, promotional content, and strategic campaigns to boost your online presence."
    },
    {
      icon: <Palette size={48} />,
      title: "Branding & Online Presence Setup",
      description: "End-to-end branding services from logo design to complete online presence setup, ensuring your café or restaurant stands out in the digital landscape."
    }
  ];

  return (
    <section id="services" className="bg-section">
      <div className="section-container">
        <div className="text-center mb-5">
          <h2 className="heading-1 mb-3 fade-in-up">Our Services</h2>
          <p className="body-large fade-in-up delay-1" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive digital solutions designed specifically for cafés and restaurants
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