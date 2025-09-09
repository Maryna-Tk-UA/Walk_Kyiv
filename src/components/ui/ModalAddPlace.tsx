import { useEffect } from "react";
import { createPortal } from "react-dom";
import css from './ModalAddPlace.module.css'


interface ModalAddPlaceProps {
    children: React.ReactNode;
    onClose: () => void;
    backdropClose: boolean;
}

export default function ModalAddPlace({ children, onClose, backdropClose = true }: ModalAddPlaceProps) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if(e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        }
    }, [onClose]);

  return createPortal (
    <div
      onClick={() => backdropClose && onClose()}
      className={css.backdrop}>
        <div
        onClick={(e) => e.stopPropagation()}
        className={css.modal}
        >
            <button
          type="button"
          className={css.closeBtn}
          onClick={onClose}
          aria-label="Закрити модалку"
        >
          <svg className={css.closeIcon}>
            <use href="/icons/symbol-defs.svg#icon-close" /> 
          </svg>
        </button>
          {children}
        </div>
    </div>,
    document.body
  )
}

