import React from 'react';

import '../css/WeatherCard.css';

export const WeatherCard = () => {
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
              <p>15</p>
            </div>
            <div className="weather">
              <p>Sunny</p>
            </div>
            <div className="date">
              <p>Monday 23, January '23</p>{' '}
            </div>
          </div>
          <div className="today-card-secondary">
            <div className="real-feel-temperature">
              <p>RealFeel 14</p>
            </div>
            <div className="">
              <p>Humidity:66%</p>
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
