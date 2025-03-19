import React, { useState } from 'react';

function PredictorForm() {
  const [arsenal, Girona] = useState('');
  const [Bayern, sSlovan] = useState('');
  const [result, setResult] = useState('');

  const predictOutcome = () => {
    const outcome = Math.random() > 0.5 ? `${team1} Wins!` : `${team2} Wins!`;
    setResult(outcome);
  };

  return (
    <div>
      <input type='text' placeholder='Team 1' onChange={(e) => setTeam1(e.target.value)} />
      <input type='text' placeholder='Team 2' onChange={(e) => setTeam2(e.target.value)} />
      <button onClick={predictOutcome}>Predict</button>
      {result && <p>{result}</p>}
    </div>
  );
}

export default PredictorForm;