import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet";

interface MapContainerWrapperProps {
    children: React.ReactNode;
    center: [number, number];
    zoom?: number;
}

export default function MapContainerWrapper({children, center, zoom = 12}: MapContainerWrapperProps) {

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
    >
        {children}
    </MapContainer>
  )
}

