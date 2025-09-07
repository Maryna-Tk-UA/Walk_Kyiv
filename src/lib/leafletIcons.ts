// Імпортуємо Leaflet API. L — головний об’єкт бібліотеки (класи Map, Marker, icon, тощо).
import L from "leaflet";
// А це - імпортовані зображення іконок
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Функція налаштування:
export function configureLeafletIcons() {
  const DefaultIcon = L.icon({
    iconUrl, iconRetinaUrl, shadowUrl,
    iconSize: [25,41], 
    iconAnchor:[12,41], 
    popupAnchor:[1,-34], 
    shadowSize:[41,41]
  });

// DefaultIcon - об'єкт іконки
// iconUrl — основна картинка маркера.
// iconRetinaUrl - варіант для Retina/HiDPI екранів.
// shadowUrl - тінь під маркером.
// iconSize - розмір іконки у пікселях.
// iconAnchor - «точка прив’язки» іконки (координата, що торкається землі). [12, 41] означає низ по центру.
// popupAnchor - як зсунути попап відносно іконки (щоб «спливав» зверху).
// shadowSize - розмір тіні.


// перезаписую значення за замовчуванням у прототипі Marker.
  L.Marker.prototype.options.icon = DefaultIcon;
}