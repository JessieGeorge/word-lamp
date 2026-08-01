import React from 'react';
import GameLayout from './components/GameLayout';

export default function App() {
  return (
    <GameLayout>
      {/* 
        This is where your interactive John 3:30 graphics will go.
        For now, we will use simple placeholders.
      */}
      <div style={{ textAlign: 'center' }}>
        <p>
          (Gesture interactive graphics will load here)
        </p>
      </div>
    </GameLayout>
  );
}