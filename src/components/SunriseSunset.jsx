import { memo } from 'react';

import sunriseSunset from '../assets/img/sunriseSunset.svg';

const SunriseSunset = memo(function SunriseSunset({ sunrise, sunset }) {
  const sunriseObj = new Date(sunrise * 1000);
  const sunsetObj = new Date(sunset * 1000);

  const sunriseTime = sunriseObj.toTimeString().slice(0, 5);
  const sunsetTime = sunsetObj.toTimeString().slice(0, 5);

  return (
    <div className="highlight sunriseSunset">
      <span className="sunriseSunset-text">Sunrise & Sunset</span>
      <div className="sunrise">
        <img src={sunriseSunset} alt="sunriseSunset" className="sunrise-pic" />
        <span className="sunrise-text">{sunriseTime}</span>
      </div>
      <div className="sunset">
        <img src={sunriseSunset} alt="sunriseSunset" className="sunset-pic" />
        <span className="sunset-text">{sunsetTime}</span>
      </div>
    </div>
  );
});

export default SunriseSunset;
