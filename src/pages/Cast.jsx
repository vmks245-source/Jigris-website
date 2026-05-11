import React from 'react';

const Cast = () => {
  const castMembers = [
    { 
      name: 'Krishna Burugula', 
      role: 'Karthik', 
      image: '/images/krishna-burugula.jpg' 
    },
    { 
      name: 'Ram Nitin', 
      role: 'Praveen', 
      image: '/images/ram-nithin.jpg' 
    },
    { 
      name: 'Mani Vaka', 
      role: 'Prashanth', 
      image: '/images/mani-vaka.jpg' 
    },
    { 
      name: 'Dheeraj Athreya', 
      role: 'Vinay', 
      image: '/images/dheeraj-athreya.jpg' 
    },
    { 
      name: 'Mast Ali', 
      role: 'Bilal', 
      image: '/images/mast-ali.jpg' 
    },
  ];

  return (
    <div className="page cast-modern">
      <h2 style={{ fontSize: '3rem', color: 'var(--primary-blue)', marginBottom: '50px' }}>The Crew</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
        gap: '30px'
      }}>
        {castMembers.map((member, index) => (
          <div key={index} className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <img 
              src={member.image} 
              alt={member.name} 
              style={{ width: '100%', height: '350px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h4 style={{ margin: '0', fontSize: '1.2rem', color: 'var(--primary-blue)' }}>{member.name}</h4>
              <p style={{ margin: '5px 0 0 0', color: 'var(--electric-blue)', fontWeight: '600' }}>as {member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '80px', 
        padding: '40px', 
        borderTop: '2px solid var(--soft-gray)',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '1.5rem', fontWeight: '300', fontStyle: 'italic', color: 'var(--primary-blue)' }}>
          "It's not about the destination, it's about the brothers you have in the back seat."
        </p>
      </div>
    </div>
  );
};

export default Cast;
