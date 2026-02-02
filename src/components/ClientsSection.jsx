import React from 'react';
import { Building2, Globe, Cpu, ShoppingBag, Truck } from 'lucide-react';

const clients = [
    { id: 1, name: 'TechFlow Solutions', icon: <Cpu size={32} /> },
    { id: 2, name: 'Global Trade Corp', icon: <Globe size={32} /> },
    { id: 3, name: 'Urban Retailers', icon: <ShoppingBag size={32} /> },
    { id: 4, name: 'Swift Logistics', icon: <Truck size={32} /> },
    { id: 5, name: 'Apex Structures', icon: <Building2 size={32} /> },
];

const ClientsSection = () => {
    return (
        <section className="section-container" style={{ padding: '4rem 1rem', background: 'var(--bg-section)' }}>
            <div className="text-center mb-10">
                <h2 className="heading-2 mb-4">Our Clients</h2>
                <p className="body-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Trusted by innovative businesses across industries.
                </p>
            </div>

            <div className="features-grid" style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '3rem',
                marginTop: '2rem'
            }}>
                {clients.map((client) => (
                    <div
                        key={client.id}
                        className="client-logo-card"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1.5rem',
                            background: 'var(--bg-card)',
                            borderRadius: '1rem',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                            minWidth: '150px',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ color: 'var(--coffee-medium)', marginBottom: '0.5rem' }}>
                            {client.icon}
                        </div>
                        <span style={{
                            fontWeight: '600',
                            color: 'var(--coffee-dark)',
                            fontSize: '1rem'
                        }}>
                            {client.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientsSection;
