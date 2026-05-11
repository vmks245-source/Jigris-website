import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ 
      background: 'white', 
      color: 'var(--primary-blue)', 
      borderTop: '1px solid var(--soft-gray)',
      padding: '40px 20px',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <p style={{ fontWeight: '800', fontSize: '1.2rem', margin: '0', fontFamily: 'Montserrat, sans-serif' }}>JIGRIS</p>
      <p style={{ opacity: 0.6, fontSize: '0.8rem', marginTop: '10px' }}>&copy; 2026 JIGRIS - One Last Ride. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
