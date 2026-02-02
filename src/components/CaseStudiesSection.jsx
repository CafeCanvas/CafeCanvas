import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const caseStudies = [
    {
        id: 1,
        client: 'BMS IT Solutions',
        industry: 'Professional Services / IT',
        tagline: 'Full-stack digital transformation for a growing IT consultancy.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
        results: [
            'Custom ERP dashboard',
            'Multi-page responsive website',
            'SEO & Lead Generation',
            '40% increase in client inquiries'
        ],
        color: '#6366F1'
    },
    {
        id: 2,
        client: 'Dr. Ajay Agrawal Clinic',
        industry: 'Healthcare',
        tagline: 'A patient-first medical website with modern booking and trust signals.',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
        results: [
            'Appointment booking system',
            'Service & specialty pages',
            'Schema markup for Google Rich Results',
            'Mobile-optimized design'
        ],
        color: '#10B981'
    }
];

const CaseStudiesSection = () => {
    return (
        <section id="case-studies" className="section-container py-20">
            <div className="text-center mb-12">
                <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
                    Our Work
                </span>
                <h2 className="heading-1 mb-4">Case Studies</h2>
                <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto' }}>
                    Real results for real clients. Here's how we've helped businesses like yours succeed.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.map((study) => (
                    <div
                        key={study.id}
                        className="case-study-card rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={study.image}
                                alt={study.client}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div
                                className="absolute top-4 left-4 py-1 px-3 rounded-full text-white text-xs font-semibold"
                                style={{ background: study.color }}
                            >
                                {study.industry}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="heading-2 mb-2" style={{ color: 'var(--coffee-dark)' }}>{study.client}</h3>
                            <p className="body-medium text-gray-600 mb-4">{study.tagline}</p>
                            <ul className="space-y-2 mb-4">
                                {study.results.map((result, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                        <span style={{ color: study.color }}>✓</span> {result}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="inline-flex items-center gap-2 font-semibold text-sm"
                                style={{ color: study.color }}
                            >
                                View Full Case Study <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CaseStudiesSection;
