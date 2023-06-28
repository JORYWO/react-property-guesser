import { useState } from 'react';
import { usePropertyData } from "../../PropertyContext";
import "./guessBar.css"

const GuessBar = () => {
  const { property, guessNum, setGuessNum, handleCurrentImage} = usePropertyData()
  const [priceGuess, setPriceGuess] = useState("")

  const handleInputChange = (e) => {
    // replace if 0 is at the start of the number
    setPriceGuess(e.target.value.replace(/^0+/, ""))
  };

  const handleKeyPress = (e) => {
    if (e.key === "-" || e.key === "." || e.key === "e") {
      e.preventDefault();
    }
  };

  const handleGuessClick = () => {
    if (priceGuess === "") return
    // Guess inbetween 5% of the Property Price
    const percentageLeeway = 5
    if (priceGuess >= property.price.amount * (1 - percentageLeeway/100) && 
        priceGuess <= property.price.amount * (1 + percentageLeeway/100)){
      console.log("won")
    }
    else{
      setGuessNum(prevNum => prevNum + 1)
      setPriceGuess("")
    }
  };

  const ArrowButtonStyles = {
    opacity: guessNum === 1 ? 0.4 : 1,
    cursor: guessNum === 1 ? 'default' : 'pointer'
  };

  const GuessButtonStyle = {
    opacity: priceGuess === "" ? 0.4 : 1,
    cursor: priceGuess === "" ? 'default' : 'pointer',
    backgroundColor: priceGuess === "" ? "#fff" : "rgb(83, 0, 0)"
  }

  return (
    <div className='guessBar-center'>
      <label htmlFor="guessInput"></label>
      <input
        type="number"
        id="guessInput"
        value={priceGuess}
        placeholder="Enter your Guess"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <div className='guessBar-btns'>
        <button 
          style={ArrowButtonStyles}
          onClick={() => handleCurrentImage(-1)}>
          <>&larr;</>
        </button>
        <button onClick={handleGuessClick} style={GuessButtonStyle}>Guess</button> 
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