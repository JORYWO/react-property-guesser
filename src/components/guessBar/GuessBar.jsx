import { useState } from 'react';
import { usePropertyData } from "../../PropertyContext";
import "./guessBar.css"

const GuessBar = () => {
  const { property, guessNum, setGuessNum, handleCurrentImage} = usePropertyData()
  const [priceGuess, setPriceGuess] = useState("")

  const handleInputChange = (e) => {
    setPriceGuess(e.target.value);
  };

  const handleGuessClick = () => {
    // Guess inbetween 5% of the Property Price
    const percentageLeeway = 5
    if (priceGuess >= property.price.amount * (1 - percentageLeeway/100) && 
        priceGuess <= property.price.amount * (1 + percentageLeeway/100)){
      console.log("won")
    }
    else{
      setGuessNum(prevNum => prevNum + 1)
    }
  };

  const ArrowButtonStyles = {
    opacity: guessNum === 1 ? 0.6 : 1,
    cursor: guessNum === 1 ? 'default' : 'pointer'
  };

  return (
    <div className='guessBar-center'>
      <label htmlFor="guessInput"></label>
      <input
        type="number"
        id="guessInput"
        value={priceGuess}
        placeholder="Enter your Guess"
        onChange={handleInputChange}
      />
      <div className='guessBar-btns'>
        <button 
          style={ArrowButtonStyles}
          onClick={() => handleCurrentImage(-1)}>
          <>&larr;</>
        </button>
        <button onClick={handleGuessClick}>Guess</button> 
        <button 
          style={ArrowButtonStyles}
          onClick={() => handleCurrentImage(1)}>
          <>&rarr;</>
        </button>
      </div>
    </div>
  );
};

export default GuessBar;