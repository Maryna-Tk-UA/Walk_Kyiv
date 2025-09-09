import { useMap } from "react-leaflet"
import css from './AddHereButton.module.css'
import type { AddProps } from "@/types";



export default function AddHereButton({ onPick }: AddProps) {
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

