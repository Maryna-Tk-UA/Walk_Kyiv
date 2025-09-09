import type { Place } from "@/types";
import { createContext } from "react";


interface Context {
    places: Place[];
    addPlace: (place: Place) => void;
    removePlace: (id: string) => void;
    resetToSeeds?: () => void;
    editPlace: (id: string, updates: Partial<Place>) => void;
    toggleFavorite: (id: string) => void;
}

// createContext - функція у React, яка створює контекст(спосіб передавати
// дані вглиб дерева компонентів без необхідності прокидати пропси
// через кожен рівень). Тобто у моїй коробці PlacesContext буде лежати
// певне значення і будь-який компонент нижче у дереві зможе його зчитати
// через useContext
export const PlacesContext = createContext<Context | null>(null);