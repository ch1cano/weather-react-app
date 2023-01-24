import React, { useEffect, useState } from 'react';

import '../css/WeatherCard.css';

const WeatherCard = () => {
  const [temperature, setTemperature] = useState('');
  const [condition, setCondition] = useState('');
  const [icon, setIcon] = useState('');
  const [time, setTime] = useState('');
  const [realFeel, setRealFeel] = useState('');
  const [humidity, setHumidity] = useState('');
  const [uvIndex, setUvIndex] = useState('');
  const [cloud, setCloud] = useState('');
  const [visibility, setVisibility] = useState('');

  useEffect(() => {
    fetch(
      'http://api.weatherapi.com/v1/current.json?key=de1dc24841074eda804193813232301&q=Krasnodar&aqi=no',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((response) => {
        console.log('RESPONSE:', response);
        setTemperature(response.current.temp_c);
        setCondition(response.current.condition.text);
        setIcon(response.current.condition.icon);
        setTime(response.location.localtime);
        setRealFeel(response.current.feelslike_c);
        setHumidity(response.current.humidity);
        setUvIndex(response.current.uv);
        setCloud(response.current.cloud);
        setVisibility(response.current.vis_km);
      });
  }, []);

  return (
    <div className="container weather-card">
      <nav>
        <div className="navigation">
          <ul className="nav-list">
            <li>Weather</li>
            <li>Alerts</li>
            <li>Map</li>
            <li>Satellite</li>
            <li>News</li>
          </ul>
        </div>
      </nav>

      <div className="today__section">
        <h1 className="title-today-card">Today</h1>
        <div className="today-card-container">
          <div className="today-card-main">
            <div className="temperature">
              <p className="temperature__celcius">{temperature} °C</p>{' '}
            </div>
            <div className="weather">
              <p className="condition-title">{condition}</p>
              <img src={icon} alt="condition" className="condition-icon" />
            </div>
            <p className="date-title">{time}</p>
          </div>
          <div className="today-card-secondary">
            <div className="real-feel-temperature">
              <p>RealFeel {realFeel}</p>
            </div>
            <div className="">
              <p>Humidity: {humidity}%</p>
            </div>
            <div className="">
              <p>UV index: {uvIndex}</p>{' '}
            </div>
            <div className="date">
              <p>Cloud Cover: {cloud}%</p>{' '}
            </div>
            <div className="date">
              <p>Visibility: {visibility} km</p>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
