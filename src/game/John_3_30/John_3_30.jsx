import React, { useState, useRef } from 'react';

export default function John_3_30() {
  const [heScaleY, setHeScaleY] = useState(1.0);
  const [iScale, setIScale] = useState(1.0);

  // Refs to track vertical distance and starting scale of "He"
  const heStartDistanceY = useRef(0);
  const heStartScaleY = useRef(1.0);

  // Refs to track diagonal distance and starting scale of "i"
  const iStartDistance = useRef(0);
  const iStartScale = useRef(1.0);

  const handleHeTouchStart = (e) => {
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      // Calculate starting vertical distance between two fingers
      heStartDistanceY.current = Math.abs(touch1.clientY - touch2.clientY);
      heStartScaleY.current = heScaleY;
    }
  };

  const handleHeTouchMove = (e) => {
    if (e.touches.length === 2 && heStartDistanceY.current > 0) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const currentDistanceY = Math.abs(touch1.clientY - touch2.clientY);
      
      // Calculate how much the fingers have stretched apart
      const ratio = currentDistanceY / (heStartDistanceY.current || 1);
      
      // Limit stretch scale between 1.0 (normal) and 2.5 (tall)
      const newScale = Math.max(1.0, Math.min(heStartScaleY.current * ratio, 2.5));
      setHeScaleY(newScale);
    }
  };

  const handleHeTouchEnd = () => {
    heStartDistanceY.current = 0; // Reset
  };

  const handleITouchStart = (e) => {
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      // Calculate starting diagonal distance using the Pythagorean theorem
      iStartDistance.current = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      );
      iStartScale.current = iScale;
    }
  };

  const handleITouchMove = (e) => {
    if (e.touches.length === 2 && iStartDistance.current > 0) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const currentDistance = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      );
      
      // Calculate the scale ratio
      const ratio = currentDistance / (iStartDistance.current || 1);
      
      // Limit scale: Pinching shrinks it down to 0.3 minimum, maxes out at 1.0
      const newScale = Math.max(0.3, Math.min(iStartScale.current * ratio, 1.0));
      setIScale(newScale);
    }
  };

  const handleITouchEnd = () => {
    iStartDistance.current = 0; // Reset
  };


  return (
    <div style={styles.container}>
      <div style={styles.gameContainer}>
        
        {/* Left Side: "He" */}
        <div 
          onTouchStart={handleHeTouchStart}
          onTouchMove={handleHeTouchMove}
          onTouchEnd={handleHeTouchEnd}
          style={{
            ...styles.elementWrapper,
            transform: `scaleY(${heScaleY})`,
            transformOrigin: 'center', 
            touchAction: 'none', // Prevents browser scrolling during gesture
          }}
        >
          <span style={styles.arrow}>↕</span>
          <span style={styles.heText}>He</span>
        </div>

        {/* Right Side: Stick figure representing "i" */}
        <div 
          onTouchStart={handleITouchStart}
          onTouchMove={handleITouchMove}
          onTouchEnd={handleITouchEnd}
          style={{
            ...styles.elementWrapper,
            transform: `scale(${iScale})`,
            transformOrigin: 'bottom center',
            touchAction: 'none'
          }}
        >
          <svg width="80" height="150" viewBox="0 0 60 110" stroke="white" strokeWidth="4" fill="none">
            <circle cx="30" cy="20" r="8" />
            <line x1="30" y1="28" x2="30" y2="70" />
            <line x1="30" y1="45" x2="15" y2="25" />
            <line x1="30" y1="45" x2="45" y2="25" />
            <line x1="30" y1="70" x2="15" y2="95" />
            <line x1="30" y1="70" x2="45" y2="95" />
          </svg>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    minHeight: '300px',
  },
  elementWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.1s ease-out',
  },
  arrow: {
    fontSize: '3rem',
    marginRight: '10px',
    color: '#888888',
  },
  heText: {
    fontSize: '5rem',
    fontWeight: 'bold',
  },
  controls: {
    marginTop: '40px',
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btn: {
    padding: '8px 16px',
    fontSize: '1rem',
    backgroundColor: '#333333',
    color: '#FFFFFF',
    border: '1px solid #555555',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};