import React from 'react';

const Cast = () => {
  const castMembers = [
    { 
      name: 'Krishna Burugula', 
      role: 'Karthik', 
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      name: 'Ram Nitin', 
      role: 'Praveen', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      name: 'Mani Vaka', 
      role: 'Prashanth', 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      name: 'Dheeraj Athreya', 
      role: 'Vinay', 
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      name: 'Mast Ali', 
      role: 'Bilal', 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' 
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
              style={{ width: '100%', height: '280px', objectFit: 'cover' }}
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
