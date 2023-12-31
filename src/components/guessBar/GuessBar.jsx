import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { usePropertyData } from "../../PropertyContext";
import "./guessBar.css"

const GuessBar = () => {
  const { property, guessNum, setGuessNum, handleCurrentImage, appendNewGuess } = usePropertyData()
  const [priceGuess, setPriceGuess] = useState("")
  const navigate = useNavigate()

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
      appendNewGuess(priceGuess)
      setGuessNum(prevNum => prevNum + 1)
      navigate("/results")
    }
    else{
      setGuessNum(prevNum => prevNum + 1)
      appendNewGuess(priceGuess)
      setPriceGuess("")
      if (guessNum === 5) navigate("/results")
    }
  };

  const ArrowButtonStyles = {
    opacity: guessNum > 1 ? 1 : 0.4,
    cursor: guessNum > 1 ? 'pointer' : 'default'
  };

  const GuessButtonStyle = {
    opacity: priceGuess === "" ? 0.4 : 1,
    cursor: priceGuess === "" ? 'default' : 'pointer',
    backgroundColor: priceGuess === "" ? "#fff" : "#283618",
    color: priceGuess === "" ? "#000" : ""
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