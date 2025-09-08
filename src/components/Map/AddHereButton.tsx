import { useMap } from "react-leaflet"
import css from './AddHereButton.module.css'


export default function AddHereButton({ onPick }: { onPick: (ll:{lat: number; lng: number})=> void }) {
    const map = useMap();

  return (
    <button 
      onClick={() => onPick(map.getCenter())}
      className={css.btnGetCenter}
      title="Додати точку в центрі мапи"
      >
        + Додати тут
    </button>
  )
}

