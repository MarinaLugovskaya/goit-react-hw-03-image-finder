import React from "react";
import PropTypes from "prop-types";
// import style from "./style.module.css";

function ImageGalleryItem({ gallery, onClickGalleryItem }) {
  return (
    <>
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li
          key={id}
          className="ImageGalleryItem"
          onClick={() => onClickGalleryItem(largeImageURL, tags)}
        >
          <img src={webformatURL} alt="" className="ImageGalleryItem_image" />
        </li>
      ))}
    </>
  );
}

ImageGalleryItem.propTypes = {
  gallery: PropTypes.array,
  onClickGalleryItem: PropTypes.func,
};

export default ImageGalleryItem;
