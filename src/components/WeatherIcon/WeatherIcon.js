import React from 'react';
import { StyledFigure } from './WeatherIcon.styles';

const WeatherIcon = ({ weather }) => {
  return (
    <StyledFigure>
      <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt='weathericon' />
      <figcaption>{weather[0].description}</figcaption>
    </StyledFigure>
  );
}
 
export default WeatherIcon;