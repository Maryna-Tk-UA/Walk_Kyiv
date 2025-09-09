import { usePlaces } from "@/context/usePlaces"
import { useNavigate } from "react-router-dom";
import css from './FavoritesPage.module.css'
import { getCategoryColor } from "@/types";


export default function FavoritesPage() {
    const { places, toggleFavorite } = usePlaces();
    const favs = places.filter(place => place.isFavorite);
    const navigate = useNavigate();

  return (
    <div className={css.favPageWrap}>
        <h2>Обране</h2>
        {favs.length === 0 && <p>Тут поки порожньо. Додайте свої улюблені місця</p>}
        <ul className={css.favPageList}>
            {favs.map(place => (
                <li key={place.id} className={css.favPageItem}>
                    <span className={css.favPageSpan} style={{backgroundColor: getCategoryColor(place.category)}}>{place.category}</span>
                    <button 
                      type='button'
                      onClick={() => navigate("/map", { state: {placeId: place.id} })}
                      className={css.favPageBtnToggle}
                    >
                        <h3 className={css.itemTitle}>{place.title}</h3>
                        <p className={css.itemDescr}>{place.description}</p>
                    </button>
                    <button type='button' onClick={() => toggleFavorite(place.id)}>Прибрати ★</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

