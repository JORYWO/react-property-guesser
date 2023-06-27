import { useState } from 'react';
import { usePropertyData } from "../../PropertyContext";
import "./guessBar.css"

const GuessBar = () => {
  const { setGuesses, handleCurrentImage} = usePropertyData()
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
        id="guessInput"
        value={guess}
        placeholder="Enter your Guess"
        onChange={handleInputChange}
      />
      <div className='guessBar-btns'>
        <button onClick={() => handleCurrentImage(-1)}><>&larr;</></button>
        <button onClick={handleGuessClick}>Guess</button> 
        <button onClick={() => handleCurrentImage(1)}><>&rarr;</></button>
      </div>
    </div>
  );
};

export default GuessBar;