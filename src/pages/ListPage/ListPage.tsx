import css from './ListPage.module.css'
import { getCategoryColor } from '@/types'
import { useNavigate } from 'react-router-dom'
import { usePlaces } from '@/context/usePlaces'

export default function ListPage() {
  const { places, removePlace } = usePlaces();

  const navigate = useNavigate();

  const handlePick = (id: string) => {
    navigate("/map", { state: { placeId: id } });
  }

  return (
    <div className={css.page}>
        <h2>Список місць</h2>
        <ul className={css.listPageUl}>
          {places.map((place) => 
            <li 
            key={place.id}
            onClick={() => handlePick(place.id)} 
            className={css.listPageLi}>
              <span className={`${css.badge}`}
              style={{ backgroundColor: getCategoryColor(place.category) }}
              >
                {place.category}
                </span>
                <button
                  className={css.btnGoToMap}
                  onClick={() => handlePick(place.id)}
                  aria-label={`Показати на мапі: ${place.title}`}
                  title="Показати на мапі">    
              <h3>{place.title}</h3>
              <p>{place.description}</p>
              </button>
              <button
                className={css.btnDeletePlace}
                onClick={() => removePlace(place.id)}
                aria-label={`Видалити: ${place.title}`}
                title='Видалити'
              >
                Видалити
              </button>
            </li>
          )}
          {places.length === 0 && (
            <li className={css.noPlace}>Тут поки що немає місць...</li>
          )}
        </ul>
    </div>
  )
}

