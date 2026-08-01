import React from 'react';

export default function GameSuccess({ onNext }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={styles.popupText}>Got it!</h2>
        <button style={styles.nextBtn} onClick={onNext}>
          Next
        </button>
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
    margin: '0 0 20px 0',
    color: '#FFFFFF',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  nextBtn: {
    padding: '10px 24px',
    fontSize: '1.2rem',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontFamily: 'inherit',
  }
};