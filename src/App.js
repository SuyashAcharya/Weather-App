import React,{useState} from "react";
import axios from 'axios';
import './App.css';
import CityComponent from "./Components/CityComponent";
import WeatherInfoComponent from "./Components/WeatherInfoComponent";

function App() {

  const [city , updateCity] = useState();
  const [weather ,updateWeather] = useState();

  const fetchWether = async(e) => {
    e.preventDefault();
   const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`);
   // console.log(response);
     updateWeather(response.data);
  };

  return (
    <div className="Container">
      <span className="AppLabel ">React Weather App</span>
      {city && weather ? (
        <WeatherInfoComponent weather={weather} />
      ):(
        <CityComponent updateCity={updateCity} fetchWether={fetchWether}/>
      )}
      
      
    </div>
  );
}

export default App;
