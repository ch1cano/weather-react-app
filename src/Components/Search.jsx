import React from 'react';

import '../css/Search.css';

const Search = () => {
  return (
    <div className="search-container">
      <div className="header-wrapper">
        <div className="logo">React Weather</div>
        <div className="current-location">
          <p className="current-location-text">Current Location</p>
          <p className="current-location-city">Krasnodar, Russia</p>
        </div>
      </div>
      <div className="main-wrapper">
        <h1 className="main-title">The Only Weather Forecast You Need</h1>
        <div className=" search-input-block">
          <input type="text" className="input-search" placeholder="Enter location" />
          <button className="search-button">search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
