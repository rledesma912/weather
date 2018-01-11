import React from 'react';
import '../App.css';

import Location from './location';
import WeatherData from './weatherdata';

const WeatherLocation  = () => (
  <div>
    <Location city={'Buenos Aires'} />
    <WeatherData/>
  </div>
);

export default WeatherLocation;
