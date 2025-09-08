import { useContext } from "react";
import { PlacesContext } from "./placesContext";

export function usePlaces() {
    const ctx = useContext(PlacesContext);
    if(!ctx) throw new Error("usePlaces must be used within PlacesProvider");
    return ctx;
}