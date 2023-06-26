import { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import GuessBar from "../guessBar/GuessBar"
import axios from "axios"
import "./Game.css"

const Game = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [property, setProperty] = useState([])

  useEffect(() => {
    getProperty()
  }, [])

  useEffect(() => {
    console.log(property)
  }, [property])

  const getProperty = async () => {
    try {
      const res = await axios.get("http://localhost:8000/");
      setProperty(res.data);
      console.log(property);
    } catch (error) {
      console.error(error);
      return (<h1>No Property Found</h1>)
    }
    setIsLoading(false);
  };
  
  if (isLoading) {
    return (<Spinner/>)
  }

  return (
    <>
    {!property ? (<h1>No Property Found</h1>
    ) : (
      <div className="game-background">
        <div className="game-header">
          <h1>Clue 1</h1>
          <h3>Info</h3>
        </div>
        <div className="game-center">
          <h1>{property.price.amount}</h1>
          <img src={property.propertyImages.mainImageSrc}></img>
          <GuessBar />
        </div>
      </div>
      )}
    </>
  )
}
  
  

export default Game