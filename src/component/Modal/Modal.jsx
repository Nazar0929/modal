import { Component } from "react";
import style from "./Modal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#rootModal");

class Modal extends Component {

    componentDidMount() {
        console.log("componentDidMount");
        window.addEventListener("keydown", this.handleEscapeClick)
        
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        window.removeEventListener("keydown", this.handleEscapeClick)
        
    }

    handleEscapeClick = (event) => {
            if(event.code === "Escape") {
                this.props.onClose()
            }
        }


    handleBackdropClick = (event) => {
        if(event.target === event.currentTarget) {
            this.props.onClose()
        }
    }

    

  render() {
    return createPortal(
      <div className={style.backdrop} onClick={this.handleBackdropClick}>
        <div className={style.modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
