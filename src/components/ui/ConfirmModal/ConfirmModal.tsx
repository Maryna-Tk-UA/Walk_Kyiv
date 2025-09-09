import ModalAddPlace from "../ModalAddPlace";
import css from './ConfirmModal.module.css'

interface ConfirmModalProps {
    title?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onClose: () => void;
}

export default function ConfirmModal({
    title = "Підтвердьте дію",
    message = "Ви впевнені?",
    confirmText = "Так",
    cancelText = "Скасувати",
    onConfirm,
    onClose
}: ConfirmModalProps) {
  return (
    <ModalAddPlace onClose={onClose} backdropClose>
        <div className={css.cofirmModalWrap}>
            <h3>{title}</h3>
            <p>{message}</p>
            <div className={css.btnGroupWrap}>
                <button type='button' 
                  onClick={onClose}
                  className={css.btnCancel}>
                    {cancelText}
                </button>
                <button type='button' 
                  onClick={() => { onConfirm(); onClose() }}
                  className={css.btnConfirm}>
                    {confirmText}
                </button>
            </div>
        </div>
    </ModalAddPlace>
  )
}

