import React from "react";
import "../Components/Loader.css"; // Import CSS for styling
import loadingGif from "../Assets/Images/weather.gif"; // Import GIF from the local folder

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={loadingGif} alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default Loader;
