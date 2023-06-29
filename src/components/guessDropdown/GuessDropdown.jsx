import { useState } from "react"
import { usePropertyData } from "../../PropertyContext";
import "./guessDropdown.css"

const GuessDropdown = () => {
  const { property, guessList } = usePropertyData()
  const [userGuess, setUserGuess] = useState(false)

  const toggleUserGuesses = () => {
    if (guessList.length > 0) setUserGuess(prevVal => !prevVal)
  }
  
  const userPriceGreater = (price) => {
    return price > property.price.amount
  }

  const userGuessesArray = guessList.map((price, index) => (
    <>
    <div className="guessDropdown-item" key={index}>
      <div className="guessDropdown-info">
        <p>Guess {index+1}</p>
        <p>£{price}</p>
      </div>
      <div className="guessDropdown-colourElement" style={{backgroundColor: userPriceGreater(price) ? "#981E04" : "	#6AC506"}}>Too {userPriceGreater(price) ? "High" : "Low"}</div>
    </div>
    <br />
    </>
  ))

  const ArrowButtonStyles = {
    opacity: guessList.length > 0 ? 1 : 0.4,
    cursor: guessList.length > 0 ? 'pointer' : 'default'
  };
  
  return (
    <div className="guessDropdown-top">

      <button className="guessDropdown-button" style={ArrowButtonStyles} onClick={toggleUserGuesses}>
        <span>{userGuess ? "⮟" : "⮝"}</span>
      </button>
      {userGuess && (
        <div className="guessDropdown-guesses">
          {userGuessesArray}
        </div>
      )}
    </div>
  )
}

export default GuessDropdown