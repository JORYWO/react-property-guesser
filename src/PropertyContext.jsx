import { createContext, useContext, useState } from "react";

const PropertyDataContext = createContext();

export function usePropertyData(){
  return useContext(PropertyDataContext)
}

export function PropertyContext({ children }){
  const [property, setProperty] = useState([])
  const [guesses, setGuesses] = useState(0)
  const [imageIndex, setImageIndex] = useState(0)

  const handleCurrentImage = (direction) => {
    // Shouldnt be able to go through images on first try; Clue 1 is additional images
    if (guesses < 1) return;
    setImageIndex((prevIndex) => 
     (prevIndex + direction + property.propertyImages.images.length) 
     % property.propertyImages.images.length)
  }

  return (
    <PropertyDataContext.Provider value={{ property, setProperty, guesses, setGuesses, imageIndex, handleCurrentImage }}>
      {children}
    </PropertyDataContext.Provider>
  )
}