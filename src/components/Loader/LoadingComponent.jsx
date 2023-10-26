import React from "react";
import "./loader.css";
import loading from "../../assets/loader.svg";

const LoadingComponent = () => (
  <div className="loader-container">
    <img src={loading} alt="Loading..." />
  </div>
);

export default LoadingComponent;
