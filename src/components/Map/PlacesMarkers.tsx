import { Marker, Popup, useMap } from "react-leaflet"
import { seedPlaces } from "@/data/seed"
import { categoryIcons } from "@/lib/mapIcons"
import { useLocation, useNavigate, type Location } from "react-router-dom";
import { useEffect, useRef } from "react";
import { usePlaces } from "@/context/usePlaces";
import css from './PlacesMarkers.module.css'

interface MapLocationState {
  placeId?: string;
}

export default function PlacesMarkers() {
  const {places, removePlace} = usePlaces();

  const map = useMap(); // хук з react-leaflet. Керую картою прямо з коду
  const location = useLocation() as Location & { state: MapLocationState }; 
  // задала йому свій state у:
  // interface Location {
//   pathname: string;
//   search: string;
//   hash: string;
//   state: unknown;  // <-- ось тут проблема
//   key: string;
// }
  // useLocation() - хук з react-router-dom. дає доступ до url
  const navigate = useNavigate(); // хук з react-router-dom. для переходу на інший маршрут, при кліку

  const placeId = location.state?.placeId;

  // тут зберігатиму всі посилання на маркери за їх id:
  const markerRefs = useRef<Record<string, L.Marker | null>>({});

useEffect(() => {
  if (!placeId) return;

  const place = seedPlaces.find(p => p.id === placeId);
  const marker = place ? markerRefs.current[placeId] : null;

  if (place && marker) {
    map.flyTo([place.coords.lat, place.coords.lng], Math.max(map.getZoom(), 14), {
      duration: 0.7,
    });
    marker.openPopup();
  }

  // очищаємо state
  navigate(".", { replace: true, state: {} });
},
  // Відпрацює, коли зміниться щось із цього:
  // -location.state - сюди прилітає placeId
  // -map - об'єкт карти з useMap(), щоб викликати flyTo
  // -navigate - для доступу до функції очистки state
  [map, navigate, placeId])

  return (
    <> 
      {places.map((place) => {
        const icon = categoryIcons[place.category];

        return (
          <Marker
            key={place.id}
            position={[place.coords.lat, place.coords.lng]}
            icon={icon}
            ref={(instance) => {markerRefs.current[place.id] = instance}}
          >
            <Popup>
              <strong>{place.title}</strong>
              <br />
              {place.description}
              <div className={css.buttonWrap}>
                <button
                  onClick={() => removePlace(place.id)}
                  >
                    Видалити
                  </button>
              </div>
            </Popup>
          </Marker>
        )
      })}
    
    </>
  )
}


 

