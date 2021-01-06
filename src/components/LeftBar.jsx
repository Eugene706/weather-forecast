import { useEffect, useState, memo } from 'react';
import { useSelector } from 'react-redux';

import { LeftBarHeader } from './index';

import img from '../images/img';
import cloudy from '../assets/img/cloudy.svg';
import description from '../assets/img/description.svg';

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday ',
  'Saturday',
];

const LeftBar = memo(function LeftBar() {
  const date = new Date();

  const geolocation = useSelector(({ location }) => location.geolocation);
  const weather = useSelector(({ weather }) => weather.weather);
  const degreesRedux = useSelector(({ degrees }) => degrees.degrees);

  const [temp, setTemp] = useState(null);

  useEffect(() => {
    if (degreesRedux === 0) {
      setTemp(Math.round(weather.current.temp));
    } else {
      setTemp(Math.round((9 / 5) * weather.current.temp + 32));
    }
  }, [degreesRedux]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setTemp(Math.round(weather.current.temp));
  }, [weather.current.temp]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="left-bar">
      <LeftBarHeader />
      <div className="main-left">
        <img
          src={img(weather.current.weather[0].id)}
          alt=""
          className="weather-now"
        />
        <span className="degrees-now">{temp}°</span>
        <span className="location">{`${geolocation.city}, ${geolocation.country}`}</span>
        <div className="date-now">
          <span className="today">{daysOfWeek[date.getDay()]},</span>
          <span className="time">{date.toTimeString().slice(0, 5)}</span>
        </div>
        <hr />
      </div>
      <div className="footer-left">
        <div className="cloudy-feature">
          <img src={cloudy} alt="cloudy" />
          <span className="cloud-percent">
            Clouds - {weather.current.clouds}%
          </span>
        </div>
        <div className="weather-description">
          <img src={description} alt="description" className="description" />
          <span className="description-text">
            {weather.current.weather[0].description}
          </span>
        </div>
      </div>
    </div>
  );
});

export default LeftBar;
