import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>جاري التحميل...</p>
    </div>
  );
};

export default Loader;
