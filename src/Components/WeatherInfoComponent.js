import React from "react";
import "./WeatherInfoComponent.css";

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
  "50d": "http://openweathermap.org/img/wn/50d@2x.png"
};


const WeatherComponent = ({ name, value }) => {
  return (
    <div className="InfoContainer">
      <img
        className="InfoIcon"
        src={WeatherInfoIcons[name]}
        alt="wether-info-img"
      />
      <span className="InfoLabel">
        {value}
        <span>{name}</span>
      </span>
    </div>
  );
};

const WeatherInfoComponent = ({ weather }) => {
  const isDay = weather?.weather[0].icon?.includes('d')
  const getTime = (timeStamp) => {
      return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  }
  return (
    <>
      <div className="WeatherContainer">
        <span className="Condition">
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          <span> {`| ${weather?.weather[0].description}`}</span>
        </span>
        <img
          className="WeatherIcon"
          src={WeatherIcons[weather?.weather[0].icon]}
          alt="Cloudy-img"
        />
      </div>
      <span className="Location ">{`${weather?.name} , ${weather?.sys.country}`}</span>
      <span className="WeatherInfoLabel">Weather Info</span>
      <div className="WeatherInfoContainer">
        <WeatherComponent
          name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
        />
        <WeatherComponent name={"humidity"} value={weather?.main?.humidity} />
        <WeatherComponent name={"wind"} value={weather?.wind?.speed} />
        <WeatherComponent name={"pressure"} value={weather?.main?.pressure} />
      </div>
    </>
  );
};

export default WeatherInfoComponent;
