import React from "react";
import style from "./style.module.css";
import PropTypes from "prop-types";

function Modal({ onClickImage, imageForModal, title, onClick }) {
  return (
    <div className={style.overlay} onClick={onClickImage}>
      <div className={style.modal}>
        <img src={imageForModal} alt={title} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClickImage: PropTypes.func,
  imageForModal: PropTypes.string,
  titile: PropTypes.string,
};

export default Modal;
