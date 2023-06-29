import { useState } from "react"
import { usePropertyData } from "../../PropertyContext";
import "./guessDropdown.css"

const GuessDropdown = () => {
  const { property, guessList } = usePropertyData()
  const [userGuess, setUserGuess] = useState(false)

  const toggleUserGuesses = () => {
    if (guessList.length > 0) setUserGuess(prevVal => !prevVal)
  }
  
  const userGuessesArray = guessList.map((price, index) => (
    <div key={index}>
      <div>
        <p>Guess {index+1}</p>
        <p>£{price}</p>
      </div>
      <div>Too {price > property.price.amount ? "High" : "Low"}</div>
    </div>
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