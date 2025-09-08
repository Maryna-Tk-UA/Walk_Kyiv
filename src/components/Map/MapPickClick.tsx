import { useMapEvents } from "react-leaflet";


export default function MapPickClick({ onPick }: { onPick:(ll:{lat:number; lng:number})=>void }) {
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

