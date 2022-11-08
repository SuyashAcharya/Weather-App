import axios from "axios";
import React, { useState } from "react";
import "./CityComponents.css";

const CityComponent = ({ updateCity, fetchWether }) => {
  return (
    <>
      <div>
        <img
          className="WelcomeWeatherLogo"
          src="https://ayushkul.github.io/react-weather-app/icons/perfect-day.svg"
          alt="Cloud_img"
        />
      </div>
      <span className="ChooseCityLabel">Find Weather of your city</span>
      <div>
        <form className="SearchBox" onSubmit={fetchWether}>
          <input
            placeholder="City"
            onChange={(e) => {
            updateCity(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default CityComponent;
