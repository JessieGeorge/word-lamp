import React, { useState } from 'react';

export default function John_3_30() {
  const [heScaleY, setHeScaleY] = useState(1.0);
  const [iScale, setIScale] = useState(1.0);

  return (
    <div style={styles.container}>
      <div style={styles.gameContainer}>
        
        {/* Left Side: "He" */}
        <div 
          style={{
            ...styles.elementWrapper,
            transform: `scaleY(${heScaleY})`,
            transformOrigin: 'center', 
          }}
        >
          <span style={styles.arrow}>↕</span>
          <span style={styles.heText}>He</span>
        </div>

        {/* Right Side: Stick figure representing "i" */}
        <div 
          style={{
            ...styles.elementWrapper,
            transform: `scale(${iScale})`,
            transformOrigin: 'bottom center',
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
      
      {/* Test Buttons */}
      <div style={styles.controls}>
        <button style={styles.btn} onClick={() => setHeScaleY(prev => Math.min(prev + 0.2, 2.5))}>Stretch He</button>
        <button style={styles.btn} onClick={() => setIScale(prev => Math.max(prev - 0.1, 0.3))}>Pinch i</button>
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