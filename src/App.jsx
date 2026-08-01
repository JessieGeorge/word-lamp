// src/App.jsx
import React, { useState } from 'react';
import GameLayout from './components/GameLayout';
import GameSuccess from './components/GameSuccess';
import John_3_30 from './game/John_3_30/John_3_30';
import { verses } from './data/verses';
import FillInTheBlanks from './components/FillInTheBlanks';

export default function App() {
  const activeVerse = verses[0];

  const [showSuccess, setShowSuccess] = useState(false);
  // Track the current step of the level ('graphics' or 'blanks')
  const [stage, setStage] = useState('graphics'); 

  // Triggered when the graphics game registers success
  const handleGraphicsSuccess = () => {
    setShowSuccess(true);
  };

  // Triggered when "Next" is clicked on the popup
  const handleNextStage = () => {
    setShowSuccess(false); 
    setStage('blanks');
  };

  // Determine header title based on active stage
  const currentTitle = stage === 'graphics' 
    ? "Interact with the Bible verse" 
    : "Fill in the blanks";

  return (
    <GameLayout title={currentTitle}>
      {/* Conditionally render either the graphics game or the fill-in-the-blanks board */}
      {stage === 'graphics' ? (
        <John_3_30 onSuccess={handleGraphicsSuccess} />
      ) : (
        <div style={appStyles}>
          <FillInTheBlanks verse={activeVerse} />
        </div>
      )}

      {/* Success Popup */}
      {showSuccess && (
        <GameSuccess onNext={handleNextStage} />
      )}
    </GameLayout>
  );
}

// Defined styling to match the black background theme
const appStyles = {
  backgroundColor: '#000000',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem 0',
}