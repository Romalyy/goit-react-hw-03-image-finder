import { Component } from "react";
import { createPortal } from "react-dom";

import s from "./modal.module.css";

const modal = document.getElementById('root-modal');

class Modal extends Component {

    componentDidMount() {
    document.addEventListener('keydown', this.handleClose)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleClose);
    }

    handleClose = e => {
        const { closeModal } = this.props;
            if(e.target === e.currentTarget) {
                closeModal();
                return;
            }
            if (e.code === "Escape") {
                closeModal();
            }
        }

    render() {
        const { children } = this.props;
        const { handleClose } = this;

        return createPortal(
      <div className={s.overlay} onClick={handleClose}>
        <div className={s.modal}>{children}</div>
      </div>,
      modal
    );
    }
}

export default Modal;