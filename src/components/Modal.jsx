import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ children, open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const dialogEl = dialog.current;
    if (!dialogEl) return;

    if (open && !dialogEl.open) {
      try {
        dialogEl.showModal();
      } catch (error) {
        console.error("Modal could not be opened:", error);
      }
    } else if (!open && dialogEl.open) {
      dialogEl.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
