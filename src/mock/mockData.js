// Mock data for CaféCanvas website
// This will be replaced with actual API calls when backend is implemented

export const mockFormSubmission = async (formData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Log the form data (in real implementation, this would be sent to backend)
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
  email: 'hello@cafecanvas.com',
  address: '123 Digital Street, Tech City, TC 12345',
  businessHours: {
    weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
    saturday: 'Saturday: 10:00 AM - 4:00 PM',
    sunday: 'Sunday: Closed'
  }
};

export const mockServices = [
  {
    id: 1,
    title: "QR-based Ordering Website Development",
    description: "Custom-built websites with integrated QR code ordering systems that allow customers to browse menus, place orders, and pay directly from their phones.",
    icon: "QrCode"
  },
  {
    id: 2,
    title: "Digital Menu Integration",
    description: "Convert your traditional menus into interactive digital experiences with real-time updates, item availability tracking, and seamless ordering flows.",
    icon: "Smartphone"
  },
  {
    id: 3,
    title: "Social Media Packages",
    description: "Complete social media solutions including eye-catching posters, engaging reels, promotional content, and strategic campaigns to boost your online presence.",
    icon: "Share2"
  },
  {
    id: 4,
    title: "Branding & Online Presence Setup",
    description: "End-to-end branding services from logo design to complete online presence setup, ensuring your café or restaurant stands out in the digital landscape.",
    icon: "Palette"
  }
];

export const mockPricingPlans = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for small cafés just getting started",
    features: [
      "Basic QR ordering website",
      "Digital menu (up to 20 items)",
      "Mobile-responsive design",
      "Basic branding setup",
      "1 month support"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Growth",
    description: "Ideal for established restaurants ready to grow",
    features: [
      "Advanced QR ordering system",
      "Unlimited menu items",
      "Customer analytics dashboard",
      "Social media package (10 posts)",
      "Complete branding package",
      "3 months support",
      "Online payment integration"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Premium",
    description: "Complete digital transformation for ambitious businesses",
    features: [
      "Everything in Growth",
      "Multi-location support",
      "Advanced analytics & reporting",
      "Monthly social media management",
      "Custom app development",
      "6 months support",
      "Priority customer service",
      "Staff training included"
    ],
    popular: false
  }
];

// Mock API endpoints (to be replaced with real backend URLs)
export const mockApiEndpoints = {
  contactForm: '/api/contact/submit',
  getServices: '/api/services',
  getPricing: '/api/pricing',
  getTestimonials: '/api/testimonials'
};

// Mock testimonials (if needed in future)
export const mockTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    business: "Brew & Bite Café",
    text: "CaféCanvas transformed our small café into a digital powerhouse. The QR ordering system has increased our efficiency by 40%!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    business: "The Corner Restaurant",
    text: "Professional service, beautiful design, and ongoing support. Our customers love the new digital menu experience.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    business: "Artisan Coffee Co.",
    text: "From branding to website to social media - CaféCanvas handled everything. Our online presence has never been stronger.",
    rating: 5
  }
];