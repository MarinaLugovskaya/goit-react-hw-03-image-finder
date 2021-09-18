import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

function BtnLoadMore({ onClick }) {

  return (
    <button type="button" className={style.button} onClick={onClick}>
      Load More
    </button>
  );
}

BtnLoadMore.propTypes = {
  onClick: PropTypes.func,
};

export default BtnLoadMore;
