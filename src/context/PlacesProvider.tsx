import { seedPlaces } from "@/data/seed";
import type { Place } from "@/types";
import { useEffect, useMemo, useState } from "react";
import { PlacesContext } from "./placesContext";

const LS_KEY = "walkkyiv.places.v1"

interface PlacesProviderProps {
  children: React.ReactNode
}


export default function PlacesProvider({ children }: PlacesProviderProps) {
    const [places, setPlaces] = useState<Place[]>(() => {
        try {
           const raw = localStorage.getItem(LS_KEY);
           const data: Place[] = raw ? JSON.parse(raw) : seedPlaces;
           return data.map(place => ({ isFavorite: false, ...place }))
          //  return raw ? JSON.parse(raw) : seedPlaces;
        } catch {return seedPlaces.map(place => ({ isFavorite: false, ...place }))}
        // {return seedPlaces;}
    });

    useEffect(() => {
        localStorage.setItem(LS_KEY, JSON.stringify(places));
    }, [places]);

    const addPlace = (p: Place) => setPlaces(prev => [p, ...prev]);

    const removePlace = (id: string) => {
      setPlaces(prew => prew.filter(p => p.id !== id));
    }

     const editPlace = (id: string, updates: Partial<Place>) => {
      setPlaces(prev =>
        prev.map(el => el.id === id ? { ...el, ...updates } : el)
      )
     }

    // const resetToSeeds = () => setPlaces(seedPlaces);

    const toggleFavorite = (id: string) => {
      setPlaces(prev => prev.map(place => place.id === id ? {...place, isFavorite: !place.isFavorite} : place))
    }

    const value = useMemo(
      () => ({ places, addPlace, removePlace, editPlace, toggleFavorite }), [places]);
    
  return (
    <PlacesContext.Provider value={value}>{children}</PlacesContext.Provider>
  )
}



