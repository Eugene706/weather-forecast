import { useState, useEffect, memo } from 'react';

const WindStatus = memo(function WindStatus({ windSpeed, isLoaded }) {
  const [windStatus, setWindStatus] = useState('');

  useEffect(() => {
    if (windSpeed <= 0.5) {
      setWindStatus('Calm');
    }

    if (windSpeed >= 0.6 && windSpeed <= 3) {
      setWindStatus('Light breeze');
    }

    if (windSpeed >= 3.1 && windSpeed <= 5) {
      setWindStatus('Moderate wind');
    }

    if (windSpeed >= 6.1 && windSpeed <= 8) {
      setWindStatus('High wind');
    }

    if (windSpeed >= 8.1 && windSpeed <= 9) {
      setWindStatus('Very strong wind');
    }

    if (windSpeed >= 9.1 && windSpeed <= 11) {
      setWindStatus('Storm');
    }

    if (windSpeed >= 12) {
      setWindStatus('Hurricane');
    }
  }, [windSpeed]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="highlight wind-status">
      <span className="wind-status-text">Wind Status</span>
      <div className="wind-speed">
        <span className="wind-speed-text">{windSpeed}</span>
        <span className="km">km/h</span>
      </div>
      <span className="wind-status__status">{windStatus}</span>
    </div>
  );
});

export default WindStatus;
