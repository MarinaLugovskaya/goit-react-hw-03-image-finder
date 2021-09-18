import React from "react";
import Loader from "react-loader-spinner";
import style from "./loader.module.css";

function LoadSpinner() {
  return (
    <div className={style.loader}>
      <Loader type="Bars" color="#00BFFF" height={60} width={80} />
    </div>
  );
}

export default LoadSpinner;
