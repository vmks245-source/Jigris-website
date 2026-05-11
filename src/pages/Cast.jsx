import React from 'react';

const Cast = () => {
  const castMembers = [
    { name: 'Krishna Burugula', role: 'Karthik', rotation: '-3deg' },
    { name: 'Ram Nitin', role: 'Praveen', rotation: '2deg' },
    { name: 'Mani Vaka', role: 'Prashanth', rotation: '-1deg' },
    { name: 'Dheeraj Athreya', role: 'Vinay', rotation: '4deg' },
    { name: 'Mast Ali', role: 'Bilal', rotation: '-2deg' },
  ];

  return (
    <div className="page cast-page">
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>The Crew</h1>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '40px',
        padding: '20px'
      }}>
        {castMembers.map((member, index) => (
          <div 
            key={index} 
            className="polaroid" 
            style={{ transform: `rotate(${member.rotation})` }}
          >
            <div style={{ 
              width: '220px', 
              height: '250px', 
              backgroundColor: '#e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #ccc',
              fontSize: '1.5rem',
              color: '#999',
              fontWeight: 'bold'
            }}>
              PHOTO
            </div>
            <div className="polaroid-caption">
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{member.name}</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>as {member.role}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <p className="vintage-font" style={{ fontSize: '1.5rem' }}>"Brothers for life, legends for a ride."</p>
      </div>
    </div>
  );
};

export default Cast;
