// src/components/FIBSuccess.jsx
import React from 'react';

export default function FIBSuccess() {
  return (
    <div style={styles.overlay}>
      {/* Kerosene lampignition and flickering animations */}
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
        @keyframes glowFlicker {
          0% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.1); opacity: 0.25; }
          100% { transform: scale(1); opacity: 0.15; }
        }
        .flame-glow {
          transform-origin: 50px 92px;
          animation: ignite 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, glowFlicker 1.2s ease-in-out infinite 0.6s;
        }
        .flame-outer {
          transform-origin: 50px 92px;
          animation: ignite 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, flameFlicker 1.2s ease-in-out infinite 0.6s;
        }
        .flame-inner {
          transform-origin: 50px 92px;
          animation: ignite 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, flameFlicker 0.9s ease-in-out infinite 0.6s;
        }
        .lamp-display {
          display: inline-block;
        }
      `}</style>

      <div style={styles.popup}>
        <h2 style={styles.popupText}>Yes!</h2>
        
        {/* Simple visual-only display container (not clickable) */}
        <div className="lamp-display">
          <svg viewBox="0 0 100 150" width="120" height="180">
            {/* Wire Handle */}
            <path d="M 25 125 C 20 20, 80 20, 75 125" fill="none" stroke="#444444" strokeWidth="2.5" />
            
            {/* Brass Base */}
            <ellipse cx="50" cy="122" rx="32" ry="14" fill="#8B7500" stroke="#CD9B1D" strokeWidth="1.5" />
            
            {/* Collar */}
            <rect x="42" y="103" width="16" height="5" fill="#5E4F00" />
            <rect x="40" y="101" width="20" height="2" fill="#CD9B1D" />

            {/* Burner Cap */}
            <path d="M 41 101 C 41 93, 59 93, 59 101 Z" fill="#7C5D12" />

            {/* Flame Glow */}
            <circle cx="50" cy="80" r="18" fill="#ffa000" className="flame-glow" />

            {/* Outer Flame */}
            <path d="M 50 93 Q 41 81 50 51 Q 59 81 50 93" fill="#ff5500" className="flame-outer" />

            {/* Inner Flame Core */}
            <path d="M 50 93 Q 45 84 50 66 Q 55 84 50 93" fill="#ffe600" className="flame-inner" />

            {/* Glass Chimney */}
            <path 
              d="M 44 95 C 33 85, 33 45, 45 28 L 55 28 C 67 45, 67 85, 56 95 Z" 
              fill="rgba(255, 255, 255, 0.05)" 
              stroke="#A0A0A0" 
              strokeWidth="1.5" 
              opacity="0.8" 
            />
            <path d="M 45 28 L 55 28" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
            
            {/* Glass Highlight */}
            <path d="M 41 78 C 37 68, 38 48, 46 32" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.5" />
          </svg>
        </div>
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
  },
  popupText: {
    fontSize: '2rem',
    margin: '0 0 15px 0',
    color: '#FFFFFF',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  }
};