import React from 'react';
import {
  StyledSection,
  StyledHeader,
  ParameterWrapper
} from './WeatherInfo.styles';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const WeatherInfo = ({ data }) => {

  const parametersToDisplay = [
    { name: 'temperature', value: `${data.main.temp.toFixed(2)} °C` },
    { name: 'sensed temperature', value: `${data.main.feels_like.toFixed(2)} °C` },
    { name: 'humidity', value: `${data.main.humidity} %` },
    { name: 'pressure', value: `${data.main.pressure} hPa` },
    { name: 'wind speed', value: `${(data.wind.speed * 3.6).toFixed(2)} km/h` },
  ]

  return (
    <StyledSection>
      <StyledHeader>{data.name}, {data.sys.country}</StyledHeader>
      <WeatherIcon weather={data.weather} />
      {parametersToDisplay.map(parameter => (
        <ParameterWrapper key={parameter.name}>
          <div>{parameter.name}</div>
          <div>{parameter.value}</div>
        </ParameterWrapper>
      ))}
    </StyledSection>
  );
}

export default WeatherInfo;
