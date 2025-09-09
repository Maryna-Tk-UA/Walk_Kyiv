import { categoryIcons } from "@/lib/mapIcons";

export type Category = 'nature' | 'view' | 'kids' | 'modern' | 'monument' | 'shopping' | 'default';

// Record<string, string> - я створюю новий дженерік-тип, де ключ- Category, значення - рядок 
export const categoryColors: Record<Category, string> = {
  nature: "#61c261",
  view: "#4f4fef",
  default: "#626262",
  monument: "#141414",
  kids: "#7b0b0b",
  modern: "#8a2586",
  shopping: "#e3e326"
}

export const getCategoryColor = (c: Category) => categoryColors[c];
export const getCategoryIcon = (c: Category) => categoryIcons[c];

export type Tag = 'park' | 'water' | 'embankment' | 'bridge' | 'art' | 'playground' | 'mall' | 'island' | 'forest' | 'sport' | 'photo';

export interface Coords {lat: number; lng: number} // lat — широта (latitude), lng — довгота (longitude)

export interface Place {
    id: string;
    title: string;
    coords: Coords;
    category: Category;
    tags: Tag[];
    district?: string;  // район міста
    description?: string;  // опис місця
    images?: string[];
    rating?: number;
    isFavorite?: boolean;
    accessible?: boolean;  // доступність для людей з інвалідністю
    createdAt: string;   // дата створення запису 
                        //  new Date().toISOString()
                        //  new Date() - поточний момент часу
                        // toISOString() - Це метод, який переводить дату у рядок у форматі ISO 8601 (стандартний міжнародний формат).
}

export interface LatLngProps {
  lat: number;
  lng: number;
}

export interface AddProps {
  onPick: (ll: LatLngProps) => void;
}