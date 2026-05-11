import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const GearShifter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [knobPos, setKnobPos] = useState({ left: '10px', top: '-15px' }); // Default Gear 1
  const [currentGear, setCurrentGear] = useState('1');

  // Map routes to gears and positions
  const gearMap = {
    '/': { label: '1', left: '10px', top: '-15px' },
    '/about': { label: '2', left: '10px', top: '85px' },
    '/cast': { label: '3', left: '86px', top: '-15px' },
    '/gallery': { label: '4', left: '86px', top: '85px' },
  };

  useEffect(() => {
    const gear = gearMap[location.pathname];
    if (gear) {
      setKnobPos({ left: gear.left, top: gear.top });
      setCurrentGear(gear.label);
    }
  }, [location.pathname]);

  const handleGearClick = (path, gearLabel) => {
    if (path === 'R') {
      navigate(-1);
      return;
    }
    navigate(path);
  };

  return (
    <div className="gear-shifter-container">
      <div style={{ marginBottom: '10px', color: '#888', fontSize: '0.7rem', fontWeight: 'bold' }}>SHIFT GEARS</div>
      <div className="gear-pattern">
        {/* H-Pattern Lines */}
        <div className="gear-line vertical-left"></div>
        <div className="gear-line vertical-right"></div>
        <div className="gear-line horizontal"></div>

        {/* Knob */}
        <div className="gear-knob" style={{ left: knobPos.left, top: knobPos.top }}></div>

        {/* Slots */}
        <div 
          className={`gear-slot r ${currentGear === 'R' ? 'active' : ''}`}
          onClick={() => handleGearClick('R', 'R')}
        >R</div>
        
        <div 
          className={`gear-slot g1 ${currentGear === '1' ? 'active' : ''}`}
          onClick={() => handleGearClick('/', '1')}
        >1</div>
        
        <div 
          className={`gear-slot g2 ${currentGear === '2' ? 'active' : ''}`}
          onClick={() => handleGearClick('/about', '2')}
        >2</div>
        
        <div 
          className={`gear-slot g3 ${currentGear === '3' ? 'active' : ''}`}
          onClick={() => handleGearClick('/cast', '3')}
        >3</div>
        
        <div 
          className={`gear-slot g4 ${currentGear === '4' ? 'active' : ''}`}
          onClick={() => handleGearClick('/gallery', '4')}
        >4</div>
      </div>
    </div>
  );
};

export default GearShifter;
