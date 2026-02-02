import React from 'react';
import { Stethoscope, ShoppingBag, Building, GraduationCap, Briefcase, Utensils, Truck, Factory, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
    {
        id: 1,
        name: 'Healthcare & Clinics',
        description: 'Patient portals, appointment booking, medical websites that build trust.',
        icon: <Stethoscope size={36} />,
        color: '#10B981', // Emerald
        example: 'Dr. Ajay Agrawal Clinic'
    },
    {
        id: 2,
        name: 'Retail & E-commerce',
        description: 'Online stores, inventory management, and seamless checkout experiences.',
        icon: <ShoppingBag size={36} />,
        color: '#F59E0B', // Amber
        example: 'Fashion Boutiques, Electronics'
    },
    {
        id: 3,
        name: 'Real Estate',
        description: 'Property listings, virtual tours, and lead generation websites.',
        icon: <Building size={36} />,
        color: '#3B82F6', // Blue
        example: 'BrightPath Realty'
    },
    {
        id: 4,
        name: 'Education & Training',
        description: 'LMS platforms, school websites, and online course portals.',
        icon: <GraduationCap size={36} />,
        color: '#8B5CF6', // Violet
        example: 'Coaching Institutes'
    },
    {
        id: 5,
        name: 'Professional Services',
        description: 'Portfolio sites for lawyers, accountants, consultants, and freelancers.',
        icon: <Briefcase size={36} />,
        color: '#6366F1', // Indigo
        example: 'BMS IT Solutions'
    },
    {
        id: 6,
        name: 'Restaurants & Cafés',
        description: 'QR ordering, digital menus, and social media growth for food businesses.',
        icon: <Utensils size={36} />,
        color: '#FF7F50', // Coral (Original CafeCanvas color)
        example: 'Brew & Bite Café',
        link: '/restaurants'
    },
    {
        id: 7,
        name: 'Logistics & Distribution',
        description: 'Fleet tracking, warehouse management, and delivery optimization.',
        icon: <Truck size={36} />,
        color: '#14B8A6', // Teal
        example: 'Sterling Logistics'
    },
    {
        id: 8,
        name: 'Manufacturing',
        description: 'ERP systems, supply chain dashboards, and operational efficiency tools.',
        icon: <Factory size={36} />,
        color: '#64748B', // Slate
        example: 'Thorne Manufacturing'
    }
];

const IndustriesSection = () => {
    return (
        <section id="industries" className="section-container py-20" style={{ background: 'var(--bg-section)' }}>
            <div className="text-center mb-12">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
                    Who We Serve
                </span>
                <h2 className="heading-1 mb-4">Industries We Transform</h2>
                <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto' }}>
                    From healthcare to hospitality, we've helped businesses across diverse sectors build their digital presence.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {industries.map((industry) => (
                    <div
                        key={industry.id}
                        className="industry-card p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        style={{
                            '--accent-color': industry.color,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = industry.color;
                            e.currentTarget.style.transform = 'translateY(-8px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#f3f4f6';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <div
                            className="mb-4 p-3 rounded-xl inline-block"
                            style={{ background: `${industry.color}15`, color: industry.color }}
                        >
                            {industry.icon}
                        </div>
                        <h3 className="heading-3 mb-2" style={{ color: 'var(--coffee-dark)' }}>{industry.name}</h3>
                        <p className="body-small text-gray-600 mb-3">{industry.description}</p>
                        <p className="text-xs font-medium" style={{ color: industry.color }}>
                            e.g., {industry.example}
                        </p>
                        {industry.link && (
                            <Link
                                to={industry.link}
                                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                                style={{ color: industry.color }}
                            >
                                Learn More <ArrowRight size={14} />
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IndustriesSection;
