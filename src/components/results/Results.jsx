import { usePropertyData } from "../../PropertyContext";
import "./results.css"

const Results = () => {
  const { property, guessNum, guessList } = usePropertyData()
  // gameState True if less than 6 tries
  const gameWon = guessNum < 6 ? true : false;

  const getClosestGuess = () => {
    let closestGuess = null
    let minDif = Infinity;

    for (let i = 0; i < guessList.length; i++){
      const dif = Math.abs(property.price.amount - guessList[i])
      if (dif < minDif){
        minDif = dif
        closestGuess = guessList[i]
      }
    }
    return closestGuess
  }

  const getPercentageDif = () => {
    const dif = Math.abs(property.price.amount - getClosestGuess())
    return ((dif / property.price.amount) * 100).toFixed(2) 
  }

  const openListing = () => {
    window.open(`https://www.rightmove.co.uk${property.propertyUrl}`)
  }

  return (
    <div>
    <div>
      <h1>You {gameWon ?     
        <>
          Won in <span>{guessNum - 1}</span> Guess{guessNum - 1 === 1 ? "" : "es"}.
        </> 
        : "Lost"}
      </h1>
      <p>List Price: £{property.price.amount}</p>
      <p>
        Your {gameWon ? `Guess: £${guessList[guessList.length - 1]}` 
        :
        `best Guess: £${getClosestGuess()}`
      }
      </p>
      <p>{getPercentageDif()}% from the exact price</p>
      <button onClick={() => openListing()}>View Listing</button>
    </div>
  </div>
  )
}

export default Results