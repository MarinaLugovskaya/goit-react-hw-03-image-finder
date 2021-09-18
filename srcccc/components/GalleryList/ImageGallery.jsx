import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ gallery, onClickImage }) {
  return (
    <ul className={style.ImageGallery}>
      <ImageGalleryItem gallery={gallery} onClickGalleryItem={onClickImage} />
    </ul>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.array,
};

export default ImageGallery;
