import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

export default function Header() {
 
  return (
    <header className={css.header}>
      <div className={css.container}>
        <strong>Walk Kyiv</strong>
        <nav className={css.nav}>

          <NavLink 
            to="/map" 
            className={({ isActive }) => (isActive ? css.activeLink : css.link)}>
              Мапа
          </NavLink>

          <NavLink 
            to="/list" 
            className={({ isActive }) => (isActive ? css.activeLink : css.link)}>
              Список
          </NavLink>

          <NavLink 
            to="/favorites" 
            className={({ isActive }) => (isActive ? css.activeLink : css.link)}>
              Обране ⭐
          </NavLink>

          {/* <p>Обране ⭐</p> */}

          <p>Налаштування</p>
        </nav>
      </div>
    </header>
  );
}
