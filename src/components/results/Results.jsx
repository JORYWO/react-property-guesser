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
    <div className="results-center">
    <div className="results-card">
      <h1>You {gameWon ?     
        <>
          Won in <span className="results-guessNumBox">{guessNum - 1}</span> Guess{guessNum - 1 === 1 ? "" : "es"}
        </> 
        : "Lost"}
      </h1>
      <p><span className="results-textStart">List Price:</span> £{property.price.amount}</p>
      <p>
        <span className="results-textStart">Your </span> 
        {gameWon ? (
        <><span className="results-textStart">Guess: </span>£{guessList[guessList.length - 1]}</>
        ) : (
        <><span className="results-textStart">Best Guess: </span>£{getClosestGuess()}</>
        )}
      </p>
      <p><span className="results-textStart">{getPercentageDif()}%</span> from the exact price</p>
      <button className="results-listingBtn" onClick={() => openListing()}>View Listing</button>
    </div>
  </div>
  )
}

export default Results