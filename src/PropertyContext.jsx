import { createContext, useContext, useState } from "react";

const PropertyDataContext = createContext();

export function usePropertyData(){
  return useContext(PropertyDataContext)
}

export function PropertyContext({ children }){
  const [property, setProperty] = useState([])
  const [guessNum, setGuessNum] = useState(1)
  const [imageIndex, setImageIndex] = useState(0)
  const [guessList, setGuessList] = useState([])

  const handleCurrentImage = (direction) => {
    // Shouldnt be able to go through images on first try; Clue 1 is additional images
    if (guessNum < 2) return;
    setImageIndex((prevIndex) => 
     (prevIndex + direction + property.propertyImages.images.length) 
     % property.propertyImages.images.length)
  }

  const appendNewGuess = (newGuess) => {
    setGuessList(prevArray => [...prevArray, newGuess])
  }

  return (
    <PropertyDataContext.Provider value={{ property, setProperty, guessNum, setGuessNum, imageIndex, handleCurrentImage, guessList, appendNewGuess }}>
      {children}
    </PropertyDataContext.Provider>
  )
}