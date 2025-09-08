import { seedPlaces } from '@/data/seed'
import css from './ListPage.module.css'
import { getCategoryColor } from '@/types'
import { useNavigate } from 'react-router-dom'

export default function ListPage() {

  const navigate = useNavigate();

  const handlePick = (id: string) => {
    navigate("/map", { state: { placeId: id } });
  }

  return (
    <div className={css.page}>
        <h2>Список місць</h2>
        <ul className={css.listPageUl}>
          {seedPlaces.map((place) => 
            <li 
            key={place.id}
            onClick={() => handlePick(place.id)} 
            className={css.listPageLi}>
              <span className={`${css.badge}`}
              style={{ backgroundColor: getCategoryColor(place.category) }}
              >
                {place.category}
                </span>
              <h3>{place.title}</h3>
              <p>{place.description}</p>
            </li>
          )}
        </ul>
    </div>
  )
}

