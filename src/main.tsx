import 'leaflet/dist/leaflet.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "modern-normalize";
import App from '@/components/App/App';
import { BrowserRouter } from 'react-router-dom';
import PlacesProvider from './context/PlacesProvider';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />, // каркас (Header, Footer, Outlet)
//     children: [
//       { index: true, element: <MapPage /> },         // для "/"
//       { path: "list", element: <ListPage /> },       // для "/list"
//       { path: "favorites", element: <FavoritesPage /> }, // для "/favorites"
//       { path: "settings", element: <SettingsPage /> }    // для "/settings"
//     ],
//   }
// ])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PlacesProvider>
        <App />
      </PlacesProvider>
    </BrowserRouter>
  </StrictMode>,
)
