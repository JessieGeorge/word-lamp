import React from 'react';
import GameLayout from './components/GameLayout';
import John_3_30 from './game/John_3_30/John_3_30';

export default function App() {
  return (
    <GameLayout>
      <John_3_30 />
    </GameLayout>
  );
}