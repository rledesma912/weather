import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, CLOUDY, SUN, SUNNY, RAIN, SNOW, WINDY} from '../constants/weathers'


const stateToIconName = weatherState => {
  switch (weatherState) {
    case CLOUD:
        return "cloud";
    case CLOUDY:
        return "cloudy";
    case SUN:
        return "sun";
    case SUNNY:
        return "sunny";
    case RAIN:
        return "rain";
    case SNOW:
        return "snow";
    case WINDY:
        return "windy";
    default:
        return "sun";
  }
}

const getWeatherIcon = weatherState => {
 return <WeatherIcons name={stateToIconName(weatherState)} size="2x" />
}

const WeatherTemperature = ({ weatherState}) => (
  <div>
    {getWeatherIcon(weatherState)}
    <span>25</span>
</div>
);

export default WeatherTemperature;
