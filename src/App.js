import React, { useState } from 'react';
import {
  StyledMain,
  StyledSection,
  StyledError,
  StyledHeader
} from './App.styles';
import GlobalStyle from './GlobalStyle';
import WeatherForm from './components/WeatherForm/WeatherForm';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import ReactLoading from 'react-loading';
import axios from 'axios';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8703a3b25bdfc07e180bd373faaf47bb&units=metric`;

  const fetchWeather = () => {
    setIsLoading(true);
    axios.get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error();
        }
        setError('');
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError('Enter correct city name');
        setData(null);
        setIsLoading(false);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city !== '') {
      fetchWeather();
      setCity('');
    } else {
      setError('Enter city name');
      setData(null);
    }
  }

  const handleChange = (event) => {
    setCity(event.target.value);
  }

  return (
    <StyledMain>
      <GlobalStyle />
      <StyledSection>
        <StyledHeader>Weather APP</StyledHeader>
        <WeatherForm handleSubmit={handleSubmit} handleChange={handleChange} inputValue={city} />
        <StyledError>{error}</StyledError>
        {isLoading && <ReactLoading type='spin' color='white' />}
        {data && <WeatherInfo data={data} />}
      </StyledSection>
    </StyledMain>
  );
}

export default App;
