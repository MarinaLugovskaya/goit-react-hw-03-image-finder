import React from "react";
import css from "../Modal/Modal.module.css";
import PropTypes from "prop-types";

function Modal({ onClickImage, imageForModal, title, onClick }) {
  return (
    <div className={css.overlay} onClick={onClickImage}>
      <div className={css.modal}>
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
