import ModalAddPlace from "@/components/ui/ModalAddPlace";
import { usePlaces } from "@/context/usePlaces";
import type { Category } from "@/types";
import { useState } from "react";
import css from './AddPlaceModal.module.css'

interface AddPlaceModalProps {
    coords: {lat: number; lng: number};
    onClose: () => void;
}

export default function AddPlaceModal({ coords, onClose }: AddPlaceModalProps) {
    const { addPlace } = usePlaces();
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState<Category>("default");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addPlace({
            id: crypto.randomUUID(),
            title,
            coords,
            category,
            tags: [],
            district: "",
            description,
            rating: 0,
            accessible: true,
            createdAt: new Date().toISOString(),
        });
        onClose();
    }
  return (
    <ModalAddPlace onClose={onClose} backdropClose>
        <form onSubmit={handleSubmit} className={css.formAddPlace}>
            <h3>Нове місце</h3>

            <label>
                Назва
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />               
            </label>

            <label>
                Категорія
                <select value={category} onChange={e => setCategory(e.target.value as Category)}>
                    <option value="nature">nature</option>
                    <option value="modern">modern</option>
                    <option value="kids">kids</option>
                    <option value="view">view</option>
                    <option value="monument">monument</option>
                    <option value="shopping">shopping</option>
                </select>
            </label>

            <div className={css.divCoords}>
                Координати: {coords.lat.toFixed(5)}, {coords.lng.toFixed(5)}
            </div>

            <label>
                Опис
                <textarea value={description} onChange={e => setDescription(e.target.value)} />
            </label>

            <div className={css.actionsBtnGroup}>
                <button type='button' onClick={onClose}>Скасувати</button>
                <button type='submit'>Додати</button>
            </div>

        </form>
    </ModalAddPlace>
  )
}

