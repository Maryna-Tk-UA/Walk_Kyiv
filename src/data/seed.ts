import type { Place } from "../types";
import { v4 as uuidv4 } from "uuid"

export const seedPlaces: Place[] = [
    { 
    id: uuidv4(),
    title: "Парк Перемоги",
    coords: { lat: 50.452, lng: 30.613 },
    category: "nature",
    tags: ["park", "water", "photo"],
    district: "Дніпровський",
    description: "Великий парк з озерами і алеями. Зручно для прогулянок з дітьми.",
    rating: 5,
    accessible: true,
    createdAt: new Date().toISOString()
},
    {
    id: uuidv4(),
    title: "Русанівська набережна",
    coords: { lat: 50.444, lng: 30.585 },
    category: "view",
    tags: ["embankment", "water", "photo"],
    district: "Дніпровський",
    description: "Краєвиди на канал, гарно ввечері.",
    rating: 4,
    accessible: true,
    createdAt: new Date().toISOString()
},
]