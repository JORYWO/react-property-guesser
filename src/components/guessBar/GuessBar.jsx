import { useState } from 'react';
import "./guessBar.css"

const GuessBar = () => {
  const [guess, setGuess] = useState("");

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuessClick = () => {
    console.log(`Guess submitted: ${guess}`);
  };

  return (
    <div className='guessBar-center'>
      <label htmlFor="guessInput"></label>
      <input
        type="number"
        inputmode="numeric"
        id="guessInput"
        value={guess}
        placeholder="Enter your Guess"
        onChange={handleInputChange}
      />
      <button onClick={handleGuessClick}>Guess</button> 
    </div>
  );
};

export default GuessBar;