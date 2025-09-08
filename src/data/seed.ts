import type { Place } from "../types";

export const seedPlaces: Place[] = [
    { 
    id: crypto.randomUUID(),
    title: "Парк Перемоги",
    coords: { lat: 50.4615, lng: 30.604 },
    category: "nature",
    tags: ["park", "water", "photo"],
    district: "Дніпровський",
    description: "Великий парк з озерами і алеями. Зручно для прогулянок з дітьми.",
    rating: 5,
    accessible: true,
    createdAt: new Date().toISOString()
},
    {
    id: crypto.randomUUID(),
    title: "Русанівська набережна",
    coords: { lat: 50.442, lng: 30.59 },
    category: "view",
    tags: ["embankment", "water", "photo"],
    district: "Дніпровський",
    description: "Краєвиди на канал, гарно ввечері.",
    rating: 4,
    accessible: true,
    createdAt: new Date().toISOString()
},
]