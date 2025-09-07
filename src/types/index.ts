export type Category = 'nature' | 'modern' | 'kids' | 'view' | 'monument' | 'shopping';

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
    accessible?: boolean;  // доступність для людей з інвалідністю
    createdAt: string;   // дата створення запису 
                        //  new Date().toISOString()
                        //  new Date() - поточний момент часу
                        // toISOString() - Це метод, який переводить дату у рядок у форматі ISO 8601 (стандартний міжнародний формат).
}