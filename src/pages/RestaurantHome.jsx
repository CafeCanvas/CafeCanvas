import React, { useEffect, useState } from 'react';
import { Coffee, Smartphone, Utensils, QrCode, ArrowRight, Star, TrendingUp, Users, CheckCircle, ChefHat, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const RestaurantHome = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const features = [
        {
            icon: <QrCode size={40} />,
            title: 'QR Ordering',
            description: 'Contactless, seamless ordering directly from the table. Customers scan, browse, order, and pay — all from their phones.',
            color: '#FF7F50'
        },
        {
            icon: <Utensils size={40} />,
            title: 'Digital Menus',
            description: 'Beautiful, easy-to-update menus with photos, descriptions, and real-time availability. No more reprinting costs.',
            color: '#F59E0B'
        },
        {
            icon: <Smartphone size={40} />,
            title: 'Mobile-First Design',
            description: 'Websites and apps optimized for mobile users. Your customers are on their phones — your business should be too.',
            color: '#10B981'
        },
        {
            icon: <Share2 size={40} />,
            title: 'Social Media Growth',
            description: 'Instagram-ready content strategies, reels, posters, and campaigns to fill your seats and build your brand.',
            color: '#8B5CF6'
        },
        {
            icon: <TrendingUp size={40} />,
            title: 'Analytics & Insights',
            description: 'Track popular items, peak hours, and customer behavior. Data-driven decisions for your restaurant.',
            color: '#3B82F6'
        },
        {
            icon: <ChefHat size={40} />,
            title: 'Kitchen Display Systems',
            description: 'Digital order tickets and preparation timers to streamline your kitchen operations.',
            color: '#EC4899'
        }
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            business: 'Brew & Bite Café',
            text: 'CafeCanvas transformed our small café into a digital powerhouse. The QR ordering system has increased our efficiency by 40%.',
            rating: 5
        },
        {
            name: 'Marco Rossi',
            business: 'Rossi\'s Trattoria',
            text: 'The social media package alone brought in dozens of new customers. Their team really understands the food business.',
            rating: 5
        }
    ];

    return (
        <div className="restaurant-page">
            {/* Hero Section */}
            <section className="hero-section min-h-[90vh] flex items-center relative overflow-hidden" style={{ background: 'transparent' }}>
                <div className="section-container relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
                            ☕ Specially for Cafés & Restaurants
                        </span>
                        <h1 className="heading-hero mb-6" style={{ color: '#78350F' }}>
                            The Digital Canvas for Your <span style={{ color: '#EA580C' }}>Culinary Art</span>
                        </h1>
                        <p className="body-large mb-8" style={{ color: '#92400E', maxWidth: '700px', margin: '0 auto' }}>
                            CafeCanvas provides the ultimate digital toolkit for modern food businesses.
                            From QR ordering to social media mastery, we handle the tech so you can focus on the taste.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <button className="btn-primary flex items-center gap-2" onClick={scrollToContact}>
                                Get Started <ArrowRight size={20} />
                            </button>
                            <button className="btn-secondary flex items-center gap-2">
                                View Demo <Smartphone size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-10 text-5xl opacity-20 animate-bounce" style={{ transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` }}>☕</div>
                <div className="absolute bottom-1/4 right-10 text-5xl opacity-20 animate-pulse" style={{ transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` }}>🥐</div>
                <div className="absolute top-1/3 right-1/4 text-4xl opacity-15" style={{ transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)` }}>🍽️</div>
            </section>

            {/* Features Grid */}
            <section className="section-container py-20">
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
                        What We Offer
                    </span>
                    <h2 className="heading-1 mb-4">Restaurant-Specific Solutions</h2>
                    <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        We understand the unique challenges of running a food business. Our tools are built specifically for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="service-card p-8 rounded-2xl shadow-lg border transition-all duration-300"
                            style={{ '--accent-color': feature.color, background: 'var(--bg-card)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderColor: 'var(--border-light)' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = feature.color;
                                e.currentTarget.style.transform = 'translateY(-8px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#f3f4f6';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div className="mb-4 p-3 rounded-xl inline-block" style={{ background: `${feature.color}15`, color: feature.color }}>
                                {feature.icon}
                            </div>
                            <h3 className="heading-3 mb-3">{feature.title}</h3>
                            <p className="body-medium text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20" style={{ background: 'transparent' }}>
                <div className="section-container">
                    <div className="text-center mb-12">
                        <h2 className="heading-1 mb-4">What Our Clients Say</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="p-8 rounded-2xl shadow-lg border" style={{ background: 'var(--bg-card)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderColor: 'var(--border-light)' }}>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />
                                    ))}
                                </div>
                                <p className="body-medium text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-orange-600">{testimonial.business}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 section-container">
                <div className="text-center max-w-3xl mx-auto p-12 rounded-3xl" style={{ background: 'rgba(234, 88, 12, 0.9)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 20px 40px rgba(234, 88, 12, 0.2)' }}>
                    <h2 className="heading-1 mb-4 text-white">Ready to Digitize Your Restaurant?</h2>
                    <p className="body-large text-white/90 mb-8">
                        Join hundreds of cafés and restaurants already using CafeCanvas to streamline operations and grow their business.
                    </p>
                    <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-colors" onClick={scrollToContact}>
                        Get Your Free Consultation
                    </button>
                </div>
            </section>
        </div>
    );
};

export default RestaurantHome;
