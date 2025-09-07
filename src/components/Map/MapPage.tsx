import MapContainerWrapper from "./MapContainerWrapper"
import PlacesMarkers from "./PlacesMarkers"
import TileLayerOSM from "./TileLayerOSM"

export default function MapPage() {

    const center: [number, number] = [50.45, 30.52]

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainerWrapper center={center}>
        <TileLayerOSM />
        <PlacesMarkers />
      </MapContainerWrapper>
    </div>
  )
}

