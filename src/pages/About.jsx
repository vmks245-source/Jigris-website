import React from 'react';
import { Info, Map, Smartphone, DollarSign, Navigation } from 'lucide-react';

const About = () => {
  return (
    <div className="page about-modern">
      <h2 style={{ fontSize: '3rem', color: 'var(--primary-blue)', marginBottom: '40px' }}>Mission Profile</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div className="card" style={{ borderLeft: '5px solid var(--electric-blue)' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Info color="var(--electric-blue)" /> The Objective</h3>
          <p>
            When Prashanth was diagnosed, we didn't look for answers in a hospital. We looked for them in the 
            rearview mirror of our childhood. The goal: Goa. The deadline: Before time runs out.
          </p>
        </div>

        <div className="card">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Map color="var(--electric-blue)" /> The Route</h3>
          <p>
            Hyderabad to Goa. 650 Kilometers of broken roads, rural weddings, and dacoit territory. 
            All in a car that older than most of its passengers.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '60px', background: 'var(--dashboard-dark)', padding: '60px', borderRadius: '20px', color: 'white' }}>
        <h3 style={{ color: 'var(--cyan-accent)', textAlign: 'center', marginBottom: '40px' }}>CAR SPECS: MARUTI 800 (1998)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', textAlign: 'center' }}>
          <div>
            <Smartphone size={32} color="var(--cyan-accent)" style={{ marginBottom: '15px' }} />
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>NO PHONES</p>
            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Total connectivity isolation</p>
          </div>
          <div>
            <DollarSign size={32} color="var(--cyan-accent)" style={{ marginBottom: '15px' }} />
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>NO MONEY</p>
            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Relying on friendship & Bilal</p>
          </div>
          <div>
            <Navigation size={32} color="var(--cyan-accent)" style={{ marginBottom: '15px' }} />
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>NO GPS</p>
            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Paper maps and gut instinct</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <img 
          src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&w=1200&q=80" 
          alt="Map" 
          style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px', filter: 'grayscale(1) brightness(0.8) contrast(1.2)' }}
        />
      </div>
    </div>
  );
};

export default About;
