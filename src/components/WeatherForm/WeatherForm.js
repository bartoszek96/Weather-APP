import React from 'react';
import { StyledButton, StyledInput } from './WeatherForm.styles';

const WeatherForm = ({ handleSubmit, handleChange, inputValue }) => {
  return (
    <form onSubmit={handleSubmit}>
      <StyledInput type='text' onChange={handleChange} placeholder='Enter city name' value={inputValue} />
      <StyledButton>GET</StyledButton>
    </form>
  );
}

export default WeatherForm;
