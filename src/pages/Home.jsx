import React from 'react';
import { Play } from 'lucide-react';

const Home = () => {
  return (
    <div className="page home-modern">
      <header style={{ marginBottom: '60px' }}>
        <h1 style={{ fontSize: '5rem', color: 'var(--primary-blue)', margin: 0 }}>JIGRIS</h1>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--electric-blue)', letterSpacing: '8px' }}>One Last Ride</h2>
      </header>

      <div style={{ position: 'relative', marginBottom: '80px' }}>
        <img 
          src="/images/home-poster.jpg" 
          alt="JIGRIS Official Poster" 
          className="hero-image"
        />
        <div style={{ 
          position: 'absolute', 
          bottom: '-30px', 
          right: '50px',
          background: 'var(--electric-blue)',
          padding: '40px',
          borderRadius: '15px',
          color: 'white',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          maxWidth: '400px'
        }}>
          <h3 style={{ margin: '0 0 15px 0' }}>The Blueprint</h3>
          <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
            4 Friends. 1 Maruti 800. 0 GPS. 
            A high-speed emotional journey across the heart of India.
          </p>
          <a 
            href="https://www.youtube.com/watch?v=j7avSwVY_Bs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="blue-btn" 
            style={{ background: 'white', color: 'var(--electric-blue)', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
          >
            <Play size={18} fill="currentColor" /> WATCH TRAILER
          </a>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '100px' }}>
        <div className="card">
          <h4 style={{ color: 'var(--electric-blue)' }}>THEATRICAL</h4>
          <p style={{ fontSize: '2rem', fontWeight: '800', margin: '10px 0' }}>NOV 14, 2025</p>
          <p style={{ opacity: 0.6 }}>Experience the ride on the big screen.</p>
        </div>
        <div className="card" style={{ background: 'var(--primary-blue)', color: 'white' }}>
          <h4 style={{ color: 'var(--cyan-accent)' }}>STREAMING</h4>
          <p style={{ fontSize: '2rem', fontWeight: '800', margin: '10px 0' }}>JAN 06, 2026</p>
          <p style={{ opacity: 0.8 }}>Coming soon to Sun NXT & Prime Video.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
