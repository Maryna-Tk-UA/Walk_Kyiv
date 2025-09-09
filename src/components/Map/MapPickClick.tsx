import type { AddProps } from "@/types";
import { useMapEvents } from "react-leaflet";


export default function MapPickClick({ onPick }: AddProps) {
    useMapEvents({
        click(e) {
            // shft + click
            if((e.originalEvent as MouseEvent).shiftKey) {
                onPick(e.latlng);
            }
        }
    })
  return null;
}

