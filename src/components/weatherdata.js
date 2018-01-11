import React from 'react';
import WeatherTemperature from './weathertemperature';
import WeatherExtraInfo from './weatherextrainfo';

const WeatherData = () => (
  <div>
  <WeatherTemperature weatherState={'cloud'}/>
  <WeatherExtraInfo/>
  </div>
);

export default WeatherData;
