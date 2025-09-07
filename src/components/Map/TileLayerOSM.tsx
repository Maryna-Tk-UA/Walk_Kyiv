import { TileLayer } from "react-leaflet";

export default function TileLayerOSM() {
  return (
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors"
    />
  )
}

