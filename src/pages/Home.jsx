import React from 'react';

const Home = () => {
  return (
    <div className="page home-page">
      <section style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '4.5rem', margin: '0 0 10px 0', color: 'var(--primary-color)' }}>JIGRIS</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>- One Last Ride -</h2>
        
        <div className="diary-page" style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
            "4 childhood friends. 1 old Maruti 800. No money. No phones. No GPS. 
            Just a promise to make it to Goa for one final adventure."
          </p>
          <div style={{ marginTop: '30px', borderTop: '1px dashed #ccc', paddingTop: '20px' }}>
            <p><strong>Theatrical Release:</strong> <span style={{ color: 'var(--vintage-red)' }}>November 14, 2025</span></p>
            <p><strong>OTT Premiere:</strong> <span style={{ color: 'var(--vintage-red)' }}>January 6, 2026</span></p>
          </div>
        </div>

        <div style={{ marginTop: '40px' }}>
          <a href="#" className="vintage-ticket">
            WATCH TRAILER
          </a>
        </div>
      </section>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '40px' }}>
        <div className="polaroid" style={{ transform: 'rotate(-5deg)' }}>
          <div style={{ width: '200px', height: '150px', background: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <span style={{ fontFamily: 'Special Elite' }}>MARUTI 800</span>
          </div>
          <div className="polaroid-caption">The Ride</div>
        </div>
        <div className="polaroid" style={{ transform: 'rotate(3deg)' }}>
          <div style={{ width: '200px', height: '150px', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <span style={{ fontFamily: 'Special Elite' }}>GOA ROAD</span>
          </div>
          <div className="polaroid-caption">The Destination</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
