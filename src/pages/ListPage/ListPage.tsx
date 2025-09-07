import { seedPlaces } from '@/data/seed'
import css from './ListPage.module.css'

export default function ListPage() {
  return (
    <div>
        <h2>Список місць</h2>
        <ul className={css.listPageUl}>
          {seedPlaces.map((place) => 
            <li key={place.id} className={css.listPageLi}>
              <h3>{place.title}</h3>
              <p>{place.description}</p>
            </li>
          )}
        </ul>
    </div>
  )
}

