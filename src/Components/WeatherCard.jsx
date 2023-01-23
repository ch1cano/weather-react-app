import React from 'react';

import '../css/WeatherCard.css';

const WeatherCard = () => {
  // const APIkey =
  //   'http://api.weatherapi.com/v1/current.json?key=de1dc24841074eda804193813232301&q=Krasnodar&aqi=no';

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
    .then((response) => console.log(JSON.stringify(response)));

  const data = {
    localtime: '2023-01-23',
    humidity: '86',
  };
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
              <p></p>
            </div>
            <div className="weather">
              <p>Sunny</p>
            </div>
            <div className="date">
              <p>Monday {data.localtime}</p>{' '}
            </div>
          </div>
          <div className="today-card-secondary">
            <div className="real-feel-temperature">
              <p>RealFeel 14</p>
            </div>
            <div className="">
              <p>Humidity:{data.humidity}%</p>
            </div>
            <div className="">
              <p>UV index: 0 Low</p>{' '}
            </div>
            <div className="date">
              <p>Cloud Cover: 45%</p>{' '}
            </div>
            <div className="date">
              <p>Visibility: 5 km</p>{' '}
            </div>
            <div className="date">
              <p>UV index: 0 Low</p>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
