import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ 
      backgroundColor: 'var(--primary-color)', 
      color: '#fdf5e6', 
      padding: '20px', 
      textAlign: 'center',
      borderTop: '3px double var(--accent-color)',
      fontFamily: 'Special Elite'
    }}>
      <p style={{ margin: 0, letterSpacing: '1px' }}>
        &copy; 2026 JIGRIS - ONE LAST RIDE. THE JOURNEY IS THE DESTINATION.
      </p>
    </footer>
  );
};

export default Footer;
