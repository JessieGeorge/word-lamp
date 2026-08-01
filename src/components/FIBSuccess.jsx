// src/components/FIBSuccess.jsx
import React from 'react';

export default function FIBSuccess() {
  return (
    <div style={styles.overlay}>
      {/* Flame ignition and flickering animations */}
      <style>{`
        @keyframes ignite {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.2); opacity: 0.9; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes flameFlicker {
          0% { transform: scale(1) rotate(-0.5deg); filter: drop-shadow(0 0 4px #ff5500); }
          25% { transform: scale(1.03) rotate(0.5deg) skewX(0.5deg); filter: drop-shadow(0 0 6px #ffa000); }
          50% { transform: scale(0.97) rotate(-1deg) skewX(-0.5deg); filter: drop-shadow(0 0 5px #ff5500); }
          75% { transform: scale(1.02) rotate(0.5deg); filter: drop-shadow(0 0 7px #ffd000); }
          100% { transform: scale(1) rotate(-0.5deg); filter: drop-shadow(0 0 4px #ff5500); }
        }
        .flame-outer {
          transform-origin: 50px 103px; 
          animation: ignite 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, flameFlicker 1.2s ease-in-out infinite 0.6s;
        }
        .flame-inner {
          transform-origin: 50px 103px; 
          animation: ignite 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, flameFlicker 0.9s ease-in-out infinite 0.6s;
        }
        .lamp-display {
          display: inline-block;
        }
      `}</style>

      <div style={styles.popup}>
        <h2 style={styles.popupText}>Yes!</h2>
        
        {/* Visual Kerosene Lamp Animation */}
        <div className="lamp-display">
          <svg viewBox="0 0 100 150" width="120" height="180">
            {/* 1. Elongated Wire Loop Handle at the Top */}
            <path d="M 44 38 C 44 22, 56 22, 56 38" fill="none" stroke="#CD9B1D" strokeWidth="2.5" />
            
            {/* 2. Compact Side-View Boxy Base & Reservoir Stand */}
            {/* Neck/Collar linking burner to the reservoir */}
            <rect x="44" y="111" width="12" height="6" fill="#5E4F00" stroke="#CD9B1D" strokeWidth="1.5" />
            {/* Main boxy body tank */}
            <rect x="35" y="117" width="30" height="14" rx="1.5" fill="#8B7500" stroke="#CD9B1D" strokeWidth="1.5" />
            {/* Smaller bottom step/rim plate */}
            <rect x="31" y="131" width="38" height="4" rx="0.5" fill="#5E4F00" stroke="#CD9B1D" strokeWidth="1.2" />

            {/* 3. Burner Dome */}
            <path d="M 41 111 C 41 103, 59 103, 59 111 Z" fill="#7C5D12" />

            {/* 4. Outer Flame */}
            <path d="M 50 103 Q 41 91 50 61 Q 59 91 50 103" fill="#ff5500" className="flame-outer" />

            {/* 5. Inner Hot Flame Core */}
            <path d="M 50 103 Q 45 94 50 76 Q 55 94 50 103" fill="#ffe600" className="flame-inner" />

            {/* 6. Glass Chimney */}
            <path 
              d="M 44 105 C 33 95, 33 55, 45 38 L 55 38 C 67 55, 67 95, 56 105 Z" 
              fill="rgba(255, 255, 255, 0.05)" 
              stroke="#A0A0A0" 
              strokeWidth="1.5" 
              opacity="0.8" 
            />
            <path d="M 45 38 L 55 38" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
            
            {/* Glass Highlight Reflection */}
            <path d="M 41 88 C 37 78, 38 58, 46 42" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.5" />
          </svg>
        </div>

        {/* Victory Subtext */}
        <p style={styles.subText}>Thanks for playing Word Lamp!</p>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popup: {
    backgroundColor: '#1E1E1E',
    padding: '30px 50px',
    borderRadius: '12px',
    border: '1px solid #444444',
    textAlign: 'center',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
    maxWidth: '400px',
    width: '90%',
  },
  popupText: {
    fontSize: '2rem',
    margin: '0 0 15px 0',
    color: '#FFFFFF',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  subText: {
    fontSize: '1.1rem',
    color: '#A0A0A0',
    margin: '15px 0 0 0',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    lineHeight: '1.4',
  }
};