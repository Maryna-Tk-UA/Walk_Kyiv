import { Marker, Popup } from "react-leaflet"
import { seedPlaces } from "@/data/seed"
import { categoryIcons } from "@/lib/mapIcons"


export default function PlacesMarkers() {
  return (
    <> 
      {seedPlaces.map((place) => {
        const icon = categoryIcons[place.category] || categoryIcons.default;

        return (
          <Marker
            key={place.id}
            position={[place.coords.lat, place.coords.lng]}
            icon={icon}
          >
            <Popup>
              <strong>{place.title}</strong>
              <br />
              {place.description}
            </Popup>
          </Marker>
        )
      })}
    
    </>
  )
}


 

