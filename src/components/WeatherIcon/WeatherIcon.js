import React from 'react';
import { StyledSection } from './WeatherIcon.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBolt,
  faCloud,
  faCloudRain,
  faCloudShowersHeavy,
  faSun,
  faSmog
} from '@fortawesome/free-solid-svg-icons'

const WeatherIcon = ({ weather }) => {

  const getIcon = (id) => {
    if (id < 300) {
      return (<FontAwesomeIcon icon={faBolt} />);
    } else if (id >= 300 && id < 500) {
      return (<FontAwesomeIcon icon={faCloudRain} />);
    } else if (id >= 500 && id < 600) {
      return (<FontAwesomeIcon icon={faCloudShowersHeavy} />);   
    } else if (id >= 700 && id < 800) {
      return (<FontAwesomeIcon icon={faSmog} />);   
    } else if (id === 800) {
      return (<FontAwesomeIcon icon={faSun} />);  
    } else if (id > 800) {
      return (<FontAwesomeIcon icon={faCloud} />); 
    }
  }

  return (
    <StyledSection>
      <StyledSection fontSize='3.5rem'>{getIcon(weather[0].id)}</StyledSection>
      <div>{weather[0].description}</div>
    </StyledSection>
  );
}

export default WeatherIcon;