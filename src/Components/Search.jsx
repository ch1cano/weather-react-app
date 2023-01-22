import React from 'react';

import '../css/Search.css';

const Search = () => {
  return (
    <div className="search">
      <div className="search__body">
        <div className="search__row">
          <div className="search__header">
            <div className="search__title title">
              <p>Forecast</p>
            </div>
            <div className="current__location">
              <img src="" alt="logo" />
              <div className="current__location subtitle">Current Location</div>
              <div className="current__location title">Krasnodar, Russia</div>
            </div>
          </div>
        </div>
        <div className="search__row">
          <div className="search__title">
            <h1>The Only Weather Forecast You Need</h1>
          </div>
          {/* Here Line */}
          <div className="search__input">
            <input type="text" />
            <img src="" alt="search icon" />
          </div>
          <div className="search__pick-location">
            <img src="" alt="dart icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
