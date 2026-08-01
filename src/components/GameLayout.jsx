// src/components/GameLayout.jsx
import React from 'react';

export default function GameLayout({ children, title = "Interact with the Bible verse" }) {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>{title}</h1>
      </header>
      
      {/* This is where the interactive graphics for each Bible verse will render */}
      <main style={styles.gameArea}>
        {children}
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#000000', 
    color: '#FFFFFF',           
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    padding: '20px',
    boxSizing: 'border-box',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#FFFFFF',           
    margin: 0,
  },
  gameArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '600px',
    flexGrow: 1,
  }
};