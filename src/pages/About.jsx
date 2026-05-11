import React from 'react';

const About = () => {
  return (
    <div className="page about-page">
      <div className="diary-page">
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>The Journal Entry</h1>
        
        <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Date: Summer 2025</p>
        
        <p>
          It started with a phone call no one ever wants to get. Mani (Prashanth) was diagnosed. 
          The Doctors said "time is limited". But we've never been ones to listen to doctors, 
          especially when there's a sunset waiting for us in Goa.
        </p>

        <p>
          The plan was simple, or stupid, depending on who you ask:
          Karthik, Praveen, Vinay, and Prashanth. Four brothers since the first grade.
          One final wish: To see the ocean together one last time.
        </p>

        <div style={{ margin: '30px 0', border: '1px solid #d2b48c', padding: '15px', background: 'rgba(0,0,0,0.03)' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>The Rules of the Road:</h3>
          <ul style={{ listStyleType: 'square' }}>
            <li>No Money (Whatever is in the glovebox is all we have).</li>
            <li>No Smartphones (Left them in a box in Hyderabad).</li>
            <li>No GPS (Just an old paper map that Bilal gave us).</li>
            <li>The Maruti 800 must survive.</li>
          </ul>
        </div>

        <p>
          It's not just a road trip. it's a race against time, a battle against broken engines, 
          and a celebration of a friendship that refuse to say goodbye.
        </p>
        
        <div style={{ textAlign: 'right', marginTop: '40px', fontFamily: 'Special Elite' }}>
          - The JIGRIS Crew
        </div>
      </div>
      
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
         <img src="https://www.transparenttextures.com/patterns/old-map.png" alt="Map Texture" style={{ opacity: 0.2, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
      </div>
    </div>
  );
};

export default About;
