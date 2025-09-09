import ModalAddPlace from "@/components/ui/ModalAddPlace";
import { usePlaces } from "@/context/usePlaces";
import type { Category, Place } from "@/types"
import { useState } from "react";
import css from './EditPlaceModal.module.css'

interface EditPlaceModalProps {
  place: Place;
  onClose: () => void;
}

export default function EditPlaceModal({ place, onClose }: EditPlaceModalProps) {
  const { editPlace } = usePlaces();
  const [title, setTitle] = useState(place.title)
  const [category, setCategory] = useState<Category>(place.category);
  const [description, setDescription] = useState(place.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editPlace(place.id, { title, category, description });
    onClose();
  }

  return (
    <ModalAddPlace onClose={onClose} backdropClose>
      <form
        onSubmit={handleSubmit}
        className={css.formEditPlace}
      >
        <h3>Редагувати місце</h3>
        <label>
          Назва
          <input value={title} onChange={e=>setTitle(e.target.value)} required />
        </label>
        <label>Категорія
          <select value={category} onChange={e=>setCategory(e.target.value as Category)}>
            <option value="nature">nature</option>
            <option value="modern">modern</option>
            <option value="kids">kids</option>
            <option value="view">view</option>
            <option value="monument">monument</option>
            <option value="shopping">shopping</option>
          </select>  
        </label>
        <label>Опис
          <textarea value={description} onChange={e=>setDescription(e.target.value)}></textarea>
        </label>
        <div className={css.btnGroupWrapper}>
          <button type='button' onClick={onClose}>Скасувати</button>
          <button type='submit'>Зберегти</button>
        </div>
      </form>
    </ModalAddPlace>
  )
}

