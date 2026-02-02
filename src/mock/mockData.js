// Mock data for CafeCanvas Solutions
// This will be replaced with actual API calls when backend is implemented

export const mockFormSubmission = async (formData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Log the form data
  console.log('Mock form submission:', {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    businessName: formData.businessName,
    requirements: formData.requirements,
    timestamp: new Date().toISOString()
  });

  // Simulate successful response
  return {
    success: true,
    message: 'Form submitted successfully',
    id: Math.random().toString(36).substr(2, 9)
  };
};

export const mockContactInfo = {
  phone: '+1 (555) 123-4567',
  email: 'contact@cafecanvas.com',
  address: '123 Innovation Drive, Tech City, TC 12345',
  businessHours: {
    weekdays: 'Monday - Friday: 9:00 AM - 9:00 PM',
    saturday: 'Saturday: 9:00 AM - 9:00 PM',
    sunday: 'Sunday: 9:00 AM - 9:00 PM'
  }
};

export const mockServices = [
  {
    id: 1,
    title: "Web & App Development",
    description: "Custom-built websites and mobile applications designed to scale with your business. We build secure, high-performance digital solutions.",
    icon: "Monitor"
  },
  {
    id: 2,
    title: "Digital Marketing & SEO",
    description: "Data-driven strategies to increase your visibility. We help you reach your target audience through SEO, social media, and paid campaigns.",
    icon: "TrendingUp"
  },
  {
    id: 3,
    title: "ERP & Operations Software",
    description: "Streamline your operations with custom ERP solutions that manage inventory, sales, HR, and finances in one unified dashboard.",
    icon: "Database"
  },
  {
    id: 4,
    title: "Brand Strategy & Design",
    description: "Create a lasting impression with our comprehensive branding services, including logo design, visual identity, and brand positioning.",
    icon: "Palette"
  }
];

export const mockPricingPlans = [
  {
    id: 1,
    name: "Startup",
    description: "Essential tools for everyday business needs",
    features: [
      "Professional Website",
      "Basic SEO Setup",
      "Google My Business Optimization",
      "Social Media Setup",
      "Standard Support"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Growth",
    description: "Perfect for scaling teams and expanding reach",
    features: [
      "E-commerce / Web App",
      "Advanced SEO & Analytics",
      "Social Media Management (10 posts/mo)",
      "CRM Integration",
      "Priority Support",
      "Monthly Strategy Calls"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Enterprise",
    description: "Comprehensive solutions for large-scale operations",
    features: [
      "Custom ERP/Software Solution",
      "Full-Service Marketing",
      "Dedicated Account Manager",
      "24/7 Priority Support",
      "Cloud Infrastructure Management",
      "On-site Training"
    ],
    popular: false
  }
];

// Mock API endpoints
export const mockApiEndpoints = {
  contactForm: '/api/contact/submit',
  getServices: '/api/services',
  getPricing: '/api/pricing',
  getTestimonials: '/api/testimonials'
};

// Mock testimonials
export const mockTestimonials = [
  {
    id: 1,
    name: "David Sterling",
    business: "Sterling Logistics",
    text: "The ERP solution they built for us has completely revolutionized our inventory tracking. We've seen a 30% increase in operational efficiency.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    business: "BrightPath Realty",
    text: "Our new website and branding have attracted so many more clients. The team really understood our vision and delivered beyond expectations.",
    rating: 5
  },
  {
    id: 3,
    name: "Marcus Thorne",
    business: "Thorne Manufacturing",
    text: "From digital marketing to backend systems, they handle it all with professionalism. A true partner in our business growth.",
    rating: 5
  }
];

export const mockRestaurantServices = [
  {
    id: 1,
    title: "QR-based Ordering",
    description: "Touchless ordering systems that allow customers to view menus and order directly from their smartphones.",
    icon: "QrCode"
  },
  {
    id: 2,
    title: "Digital Menu Management",
    description: "Real-time menu updates, inventory tracking, and dynamic pricing controls.",
    icon: "Smartphone"
  },
  {
    id: 3,
    title: "Kitchen Display Systems",
    description: "Streamline kitchen operations with digital order tickets and preparation timers.",
    icon: "Monitor"
  },
  {
    id: 4,
    title: "Social Media for Cafés",
    description: "Engaging content creation and community management specifically for food & beverage businesses.",
    icon: "Share2"
  }
];

export const mockRestaurantPricing = [
  {
    id: 1,
    name: "Café Digital",
    description: "Perfect for single-location cafés",
    features: [
      "QR Ordering System",
      "Digital Menu",
      "Basic Inventory",
      "Social Media Templates",
      "Email Support"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Ghost Kitchen",
    description: "For delivery-focused food businesses",
    features: [
      "Multi-platform Integration",
      "Delivery Fleet Management",
      "Advanced Analytics",
      "Marketing Automation",
      "24/7 Support"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Restaurant Chain",
    description: "For multi-location franchises",
    features: [
      "Centralized Dashboard",
      "Franchise Management",
      "Custom App Development",
      "Dedicated Account Manager",
      "On-site Training"
    ],
    popular: false
  }
];