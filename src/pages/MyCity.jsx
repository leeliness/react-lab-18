// src/pages/MyCity.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getWeather } from '../api/weather';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiDust } from 'react-icons/wi';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  color: #3A0519;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const WeatherContainer = styled.div`
  background: linear-gradient(135deg, #BE5985 0%, #FAD59A 100%);
  border-radius: 16px;
  padding: 2rem;
  color: #fff;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const WeatherHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Temperature = styled.div`
  font-size: 4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 5rem;
    color: #fff;
  }
`;

const WeatherDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  padding: 1.5rem;
  border-radius: 12px;
`;

const WeatherItem = styled.div`
  text-align: center;
  
  h4 {
    color: #ffe8d6;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

const getWeatherIcon = (condition) => {
  const code = condition?.code;
  if (!code) return <WiDaySunny />;

  if (code === 1000) return <WiDaySunny />;
  if (code >= 1003 && code <= 1009) return <WiCloudy />;
  if (code >= 1063 && code <= 1201) return <WiRain />;
  if (code >= 1204 && code <= 1237) return <WiSnow />;
  if (code >= 1273 && code <= 1282) return <WiThunderstorm />;
  if (code >= 1030 && code <= 1039) return <WiDust />;

  return <WiDaySunny />;
};

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather('Berezan, Ukraine');
        setWeather(data);
        setLoading(false);
      } catch (err) {
        setError('Помилка при завантаженні даних про погоду');
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <PageContainer>
      <Section>
        <Title>Березань — моє місто</Title>
        <p>
          Березань — це невелике місто в Київській області України, яке розташоване на мальовничій річці Недра.
          Місто має багату історію, привітних людей і затишну атмосферу.
        </p>
      </Section>

      <Section>
        <Title>Поточна погода</Title>
        {loading && <p>Завантаження...</p>}
        {error && <p style={{ color: 'tomato' }}>{error}</p>}
        {weather && (
          <WeatherContainer>
            <WeatherHeader>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  {weather.location.name}, {weather.location.country}
                </h3>
                <p>{new Date(weather.location.localtime).toLocaleString('uk-UA', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</p>
              </div>
              <Temperature>
                {getWeatherIcon(weather.current.condition)}
                <span>{Math.round(weather.current.temp_c)}°C</span>
              </Temperature>
            </WeatherHeader>
            <WeatherDetails>
              <WeatherItem>
                <h4>Відчувається як</h4>
                <p>{Math.round(weather.current.feelslike_c)}°C</p>
              </WeatherItem>
              <WeatherItem>
                <h4>Вологість</h4>
                <p>{weather.current.humidity}%</p>
              </WeatherItem>
              <WeatherItem>
                <h4>Вітер</h4>
                <p>{Math.round(weather.current.wind_kph)} км/год</p>
              </WeatherItem>
              <WeatherItem>
                <h4>Умови</h4>
                <p>{weather.current.condition.text}</p>
              </WeatherItem>
            </WeatherDetails>
          </WeatherContainer>
        )}
      </Section>
    </PageContainer>
  );
};

export default MyCity;
