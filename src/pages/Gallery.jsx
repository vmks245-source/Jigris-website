import React from 'react';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1512100356956-c1227c3317bb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  ];

  return (
    <div className="page gallery-modern">
      <h2 style={{ fontSize: '3rem', color: 'var(--primary-blue)', marginBottom: '50px' }}>The Stills</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '20px'
      }}>
        {images.map((src, index) => (
          <div key={index} className="card" style={{ padding: '0', overflow: 'hidden', height: '250px' }}>
            <img 
              src={src} 
              alt={`Movie Still ${index + 1}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        ))}
      </div>

      <div style={{ marginTop: '80px', textAlign: 'center' }}>
        <button className="blue-btn">LOAD MORE SCENES</button>
      </div>
    </div>
  );
};

export default Gallery;
