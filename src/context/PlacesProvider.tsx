import { seedPlaces } from "@/data/seed";
import type { Place } from "@/types";
import { useEffect, useMemo, useState } from "react";
import { PlacesContext } from "./placesContext";

const LS_KEY = "walkkyiv.places.v1"




export default function PlacesProvider({ children }: { children: React.ReactNode }) {
    const [places, setPlaces] = useState<Place[]>(() => {
        try {
           const raw = localStorage.getItem(LS_KEY);
           return raw ? JSON.parse(raw) : seedPlaces;
        } catch {return seedPlaces;}
    });

    useEffect(() => {
        localStorage.setItem(LS_KEY, JSON.stringify(places));
    }, [places]);

    const addPlace = (p: Place) => setPlaces(prev => [p, ...prev]);

    const removePlace = (id: string) => {
      setPlaces(prew => prew.filter(p => p.id !== id));
    }

    // const resetToSeeds = () => setPlaces(seedPlaces);

    const value = useMemo(
      () => ({ places, addPlace, removePlace }), [places]);
    
  return (
    <PlacesContext.Provider value={value}>{children}</PlacesContext.Provider>
  )
}



