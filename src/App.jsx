// src/App.jsx
import React, { useState } from 'react';
import GameLayout from './components/GameLayout';
import GameSuccess from './components/GameSuccess';
import John_3_30 from './game/John_3_30/John_3_30';

export default function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  // Triggered when the graphics game registers success
  const handleGraphicsSuccess = () => {
    setShowSuccess(true);
  };

  // Triggered when "Next" is clicked on the popup
  const handleNextStage = () => {
    setShowSuccess(false); 
    // We will hook up the fill-in-the-blanks transition here later
  };

  return (
    <GameLayout>
      <John_3_30 onSuccess={handleGraphicsSuccess} />

      {/* Success Popup */}
      {showSuccess && (
        <GameSuccess onNext={handleNextStage} />
      )}
    </GameLayout>
  );
}