import { useState, useEffect } from "react";
import { usePropertyData } from "../../PropertyContext";
import { BsZoomIn, BsMapFill } from "react-icons/bs";
import Spinner from "../spinner/Spinner";
import GuessBar from "../guessBar/GuessBar"
import GuessDropdown from "../guessDropdown/GuessDropdown";
import Map from "../map/Map";
import axios from "axios"
import "./Game.css"

const Game = () => {
  const { property, setProperty, guessNum, imageIndex } = usePropertyData()
  const [isLoading, setIsLoading] = useState(true)
  const [popup, setPopup] = useState(false)
  const [map, setMap] = useState(false)

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

  const toggleInfoPopup = () => {
    setPopup(prevVal => !prevVal)
  }

  const toggleMap = () => {
    if (guessNum > 4) setMap(prevVal => !prevVal)
  }

  const mapStyles = {
    opacity: guessNum > 4 ? 1 : 0.4,
    cursor: guessNum > 4 ? 'pointer' : 'auto'
  }

  if (isLoading) {
    return (<Spinner/>)
  }

  return (
    <>
    {!property ? (<h1>No Property Found< br/>Please Refresh</h1>
    ) : (
      <div className="game-background">
        <div className="game-header">
          <h1>Guess {guessNum}</h1>
          <BsMapFill style={mapStyles} className="game-propertyMap" onClick={toggleMap}/>
        </div>
        <div className="game-center">
          <img src={property.propertyImages.images[imageIndex].srcUrl}></img>
          <div className="game-zoomText" onClick={toggleInfoPopup}><BsZoomIn /> zoom in</div>
          <div className="game-cluesText">
            <p style={{visibility: guessNum > 2 ? "visible" : "hidden"}}>Property Subtype: < br/>{property.propertySubType}</p>
            <p style={{visibility: guessNum > 3 ? "visible" : "hidden"}}>Number Of Bedrooms: {property.bedrooms}<br />Number Of Bathrooms: {property.bathrooms}</p>
          </div>
          <GuessDropdown />
          <GuessBar />
        </div>
        {popup && (
          <div className="game-overlay" onClick={toggleInfoPopup}>
            <img className="game-propertyZoom" src={property.propertyImages.images[imageIndex].srcUrl}></img>
          </div>
        )}

        {map && (
          <div className="game-overlay" onClick={toggleMap}>
            <div onClick={e => e.stopPropagation()}>
              <Map />
            </div>
          </div>
        )}
      </div>
      )}
    </>
  )
}

export default Game