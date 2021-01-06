import { useState, useEffect, memo } from 'react';

const Humidity = memo(function Humidity({ humidity, isLoaded }) {
  const [humidityStatuі, setHumidityStatus] = useState('');

  useEffect(() => {
    if (humidity <= 30) {
      setHumidityStatus('Dry');
    }

    if (humidity >= 31 && humidity <= 55) {
      setHumidityStatus('Too low humidity');
    }

    if (humidity >= 55 && humidity <= 60) {
      setHumidityStatus('Normal humidity');
    }

    if (humidity >= 61 && humidity <= 74) {
      setHumidityStatus('Not normal humidity');
    }

    if (humidity >= 75) {
      setHumidityStatus('Too much humidity');
    }
  }, [humidity]); // eslint-disable-line react-hooks/exhaustive-deps

  const humidityHeight = Math.round(parseInt(humidity, 10) * 0.76);
  return (
    <div className="highlight humidity">
      <span className="himidity-text">Humidity</span>
      <div className="humidity-percent">
        <div className="humidity-percent-text-d">
          <span className="humidity-percent-text">{humidity}</span>
          <span className="perc">%</span>
        </div>
        <div className="humidity-border">
          <div
            className="humidity-circle"
            style={{ height: `${humidityHeight > 18 ? humidityHeight : 18}px` }}
          ></div>
        </div>
      </div>
      <span className="humidity-status">{humidityStatuі}</span>
    </div>
  );
});

export default Humidity;
