import { GoogleMap, Marker } from "@react-google-maps/api"
import { usePropertyData } from '../../PropertyContext'
import "./map.css"

const Map = () => {
  const { property } = usePropertyData()

  const center = {
    lat: parseFloat(property.location.latitude), // Latitude of the center of the UK
    lng: parseFloat(property.location.longitude) // Longitude of the center of the UK
  };

  return (
    <GoogleMap 
      mapContainerClassName="map-container"
      zoom={12} 
      center={center}
      options={{
        apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      }} 
    >
      <Marker position={center}/>
    </GoogleMap>
  )
}

export default Map