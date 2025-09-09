import { useState } from "react"
import MapContainerWrapper from "./MapContainerWrapper"
import PlacesMarkers from "./PlacesMarkers"
import TileLayerOSM from "./TileLayerOSM"
import MapPickClick from "./MapPickClick";
import AddHereButton from "./AddHereButton";
import AddPlaceModal from "@/pages/AddPlace/AddPlaceModal";
import type { Place } from "@/types";
import EditPlaceModal from "@/pages/EditPlace/EditPlaceModal";


export default function MapPage() {
  const [draftCoords, setDraftCoords] = useState<{lat: number; lng: number} | null>(null);
  const [editing, setEditing] = useState<Place | null>(null)

    const center: [number, number] = [50.45, 30.52]

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainerWrapper center={center}>
        <TileLayerOSM />
        <PlacesMarkers />
        <MapPickClick onPick={(ll) => setDraftCoords(ll)} />
        <AddHereButton onPick={(ll) => setDraftCoords(ll)} />
      </MapContainerWrapper>
      {draftCoords && (
        <AddPlaceModal
          coords={draftCoords}
          onClose={() => setDraftCoords(null)}
         />
      )}
      {editing && (
        <EditPlaceModal place={editing} onClose={() => setEditing(null)} />
      )}
    </div>
  )
}

