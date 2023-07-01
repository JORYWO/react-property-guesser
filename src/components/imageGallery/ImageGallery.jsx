import { usePropertyData } from "../../PropertyContext";
import "./imageGallery.css"

const ImageGallery = (props) => {
  const { property, handleCurrentImage, imageIndex } = usePropertyData()

  return (
    <div className="imageGallery-center">
      <button className="imageGallery-exit" onClick={props.exitImageGallery}>Back To Results X</button>
      <div className="imageGallery-imgContainer">
        <img className="imageGallery-img" src={property.propertyImages.images[imageIndex].srcUrl}></img>
        <button className="imageGallery-left" onClick={() => handleCurrentImage(-1)}><>&larr;</></button>
        <button className="imageGallery-right" onClick={() => handleCurrentImage(1)}><>&rarr;</></button>
      </div>
    </div> 
  )
}

export default ImageGallery