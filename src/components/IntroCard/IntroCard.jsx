import "./introCard.css"

const IntroCard = () => (
  <div className='introCard-center'>
    <div className="introCard-mainCard">
      <h1>Property Guesser</h1>
      <hr></hr>
      <h3>The Basics</h3>
      <p>
        Guess the asking price of a house in the UK within 5 tries.
        Each time you guess incorrectly you get a new clue
        <ul>
          <li>Clue 1: Additional Images</li>
          <li>Clue 2: Property Subtype</li>
          <li>Clue 3: Bedroom & Bathroom Number</li>
          <li>Clue 4: Location on the map</li>
        </ul>
        <br />
        Guess Within 5% of the List Price and you win!
      </p>
      <button className="btn hoverEffect"><span>Play Game</span></button>
    </div>
  </div>
)
export default IntroCard