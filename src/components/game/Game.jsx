import { useState, useEffect } from "react";
import { usePropertyData } from "../../PropertyContext";
import Spinner from "../spinner/Spinner";
import GuessBar from "../guessBar/GuessBar"
import axios from "axios"
import "./Game.css"

const Game = () => {
  const { property, setProperty, guesses, imageIndex } = usePropertyData()
  const [isLoading, setIsLoading] = useState(true)

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
          <h1>Guess {guesses}</h1>
          <h3>Info</h3>
        </div>
        <div className="game-center">
          <h1>{property.price.amount}</h1>
          <img src={property.propertyImages.images[imageIndex].srcUrl}></img>
          <GuessBar />
        </div>
      </div>
      )}
    </>
  )
}
  
  

export default Game