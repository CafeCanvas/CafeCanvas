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
        color: '#6366F1',
        link: 'https://bmsitsolutionsindia.com'
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
        color: '#10B981',
        link: 'https://dr-ajay-agrawal.netlify.app/'
    },
    {
        id: 3,
        client: 'Samatva Yoga',
        industry: 'Wellness & Lifestyle',
        tagline: 'A seamless, serene digital platform for class bookings and retreats.',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop', // Yoga-themed image
        results: [
            'Dynamic scheduling & booking',
            'Membership portal',
            'Mobile-first responsive design',
            'Tranquil brand aesthetic'
        ],
        color: '#F59E0B', // Warm amber color fitting for yoga
        link: 'https://samatvayoga.com.my/'
    }
];

const CaseStudiesSection = () => {
    return (
        <section id="case-studies" className="section-container py-20">
            <div className="text-center mb-12">
                <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
                    Case Studies
                </span>
                <h2 className="heading-1 mb-4">Our recent clients</h2>
                <p className="body-large text-gray-700" style={{ maxWidth: '700px', margin: '0 auto' }}>
                    Beautiful, high-conversion websites tailored for top businesses. Explore a selection of recent digital transformations we've crafted, alongside numerous other scaling brands.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {caseStudies.map((study) => (
                    <div
                        key={study.id}
                        className="case-study-card rounded-2xl overflow-hidden shadow-lg border transition-all duration-300 w-full max-w-[340px]"
                        style={{ background: 'var(--bg-card)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderColor: 'var(--border-light)' }}
                    >
                        <div className="relative h-40 overflow-hidden">
                            <img
                                src={study.image}
                                alt={study.client}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div
                                className="absolute top-4 left-4 py-1 px-3 rounded-full text-white text-xs font-semibold shadow-sm"
                                style={{ background: study.color }}
                            >
                                {study.industry}
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="heading-3 mb-2" style={{ color: 'var(--coffee-dark)' }}>{study.client}</h3>
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{study.tagline}</p>
                            <ul className="space-y-1.5 mb-5">
                                {study.results.map((result, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                                        <span style={{ color: study.color, marginTop: '2px' }}>✓</span> {result}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={study.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 font-semibold text-sm hover:opacity-80 transition-opacity"
                                style={{ color: study.color }}
                            >
                                View client Website <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CaseStudiesSection;
