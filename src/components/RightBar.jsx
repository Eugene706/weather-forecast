import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, memo } from 'react';
import { setDegreesRedux } from '../redux/actions/degrees';

import {
  WeatherWeek,
  UvIndex,
  WindStatus,
  SunriseSunset,
  Humidity,
  Visibiliti,
  MaxMinTemp,
  Map,
} from './index';

const dayChoice = ['Today', 'Week'];
const degreesChoice = ['°C', '°F'];

const RightBar = memo(function RightBar() {
  const dispatch = useDispatch();

  const weather = useSelector(({ weather }) => weather.weather);
  const isLoaded = useSelector(({ weather }) => weather.isLoaded);

  const [activeDate, setActiveDate] = useState(1);
  const [degrees, setDegrees] = useState(0);

  useEffect(() => {
    dispatch(setDegreesRedux(degrees));
  }, [degrees]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="right-bar">
      <div className="header-right">
        <div className="menu">
          {dayChoice.map((obj, index) => (
            <button
              className={`menu-text ${
                activeDate === index ? 'selected-text' : ''
              }`}
              onClick={() => setActiveDate(index)}
              key={index}
            >
              {obj}
            </button>
          ))}
        </div>
        <div className="select-degrees">
          {degreesChoice.map((obj, index) => (
            <button
              className={`degrees-btn ${
                degrees === index ? 'selected-degrees' : ''
              }`}
              onClick={() => setDegrees(index)}
              key={index}
            >
              {obj}
            </button>
          ))}
        </div>
      </div>
      <div className="weather-week">
        {activeDate === 1 &&
          weather.daily.map((obj, index) => {
            if (index === 0) {
              return null;
            }
            return (
              <WeatherWeek
                date={obj.dt}
                minTemp={obj.temp.min}
                maxTemp={obj.temp.max}
                weatherId={obj.weather[0].id}
                key={index}
                activeDate={activeDate}
              />
            );
          })}
        {activeDate === 0 &&
          weather.hourly.slice(0, 21).map((obj, index) => {
            if (index % 3 !== 0) {
              return null;
            }
            return (
              <WeatherWeek
                date={obj.dt}
                minTemp={obj.temp}
                weatherId={obj.weather[0].id}
                key={index}
                activeDate={activeDate}
              />
            );
          })}
      </div>
      <div className="main-right">
        <span className="highlight-text">Today’s Highlights</span>
        <div className="highlights">
          <div className="highlights-only">
            <div className="highlights1">
              <UvIndex uvIndex={weather.daily[0].uvi} />
              <WindStatus
                windSpeed={weather.daily[0].wind_speed}
                isLoaded={isLoaded}
              />
              <SunriseSunset
                sunrise={weather.daily[0].sunrise}
                sunset={weather.daily[0].sunset}
              />
            </div>
            <div className="highlights2">
              <Humidity
                humidity={weather.daily[0].humidity}
                isLoaded={isLoaded}
              />
              <Visibiliti
                visibiliti={weather.current.visibility}
                isLoaded={isLoaded}
              />
              <MaxMinTemp
                tempMin={weather.daily[0].temp.min}
                tempMax={weather.daily[0].temp.max}
              />
            </div>
          </div>
          <Map />
        </div>
      </div>
    </div>
  );
});

export default RightBar;
