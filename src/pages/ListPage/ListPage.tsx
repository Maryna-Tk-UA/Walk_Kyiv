import css from './ListPage.module.css'
import { getCategoryColor, type Place } from '@/types'
import { useNavigate } from 'react-router-dom'
import { usePlaces } from '@/context/usePlaces'
import { useState } from 'react';
import EditPlaceModal from '../EditPlace/EditPlaceModal';
import ConfirmModal from '@/components/ui/ConfirmModal/ConfirmModal';

export default function ListPage() {
  const { places, removePlace, toggleFavorite } = usePlaces();
  const [editing, setEditing] = useState<Place | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null)

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
            className={css.listPageLi}>
              <span className={`${css.badge}`}
              onClick={() => handlePick(place.id)}
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
                type='button'
                className={css.btnFavPlace}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(place.id)}}
                title={place.isFavorite ? "Прибрати з обраного" : "Додати в обране"}
              >
                {place.isFavorite ? "★ Обране" : "☆ В обране"}
              </button>

              <button
                type='button'
                className={css.btnEditPlace}
                onClick={(e) => {
                  e.stopPropagation();
                  setEditing(place)}}
                aria-label={`Редагування: ${place}`}
                title='Редагування'
              >
                Редагування
              </button>

              <button
                type='button'
                className={css.btnDeletePlace}
                onClick={(e) => {
                  e.stopPropagation();
                  // removePlace(place.id);
                  setDeletingId(place.id);
                }}
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
        {deletingId && (
          <ConfirmModal
            title='Видалити місце?'
            message='Дію не можна буде скасувати'
            confirmText='Видалити'
            onConfirm={() => removePlace(deletingId)}
            onClose={() => setDeletingId(null)}
           />
        )}
        {editing && (
          <EditPlaceModal place={editing} onClose={() => setEditing(null)} />
        )}
    </div>
  )
}

