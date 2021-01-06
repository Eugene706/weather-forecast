import { useState, useEffect, memo } from 'react';
import { useSelector } from 'react-redux';

import minTemp from '../assets/img/cold.svg';
import maxTemp from '../assets/img/hot-map.svg';

const MaxMinTemp = memo(function MaxMinTemp({ tempMin, tempMax }) {
  const degreesRedux = useSelector(({ degrees }) => degrees.degrees);

  const [tempMinRound, setTempMinRound] = useState(null);
  const [tempMaxRound, setTempMaxRound] = useState(null);

  useEffect(() => {
    if (degreesRedux === 0) {
      setTempMinRound(Math.round(tempMin));
      setTempMaxRound(Math.round(tempMax));
    } else {
      setTempMinRound(Math.round((9 / 5) * tempMin + 32));
      setTempMaxRound(Math.round((9 / 5) * tempMax + 32));
    }
  }, [degreesRedux]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setTempMinRound(Math.round(tempMin));
    setTempMaxRound(Math.round(tempMax));
  }, [tempMin]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="highlight max-min-temp">
      <span className="max-min-temp-header">Max/min temperature</span>
      <div className="min-temp">
        <img src={minTemp} alt="minTemp" className="max-min-temp-pic" />
        <span className="max-min-temp-text">{tempMinRound}°</span>
      </div>
      <div className="max-temp">
        <img src={maxTemp} alt="maxTemp" className="max-min-temp-pic" />
        <span className="max-min-temp-text">{tempMaxRound}°</span>
      </div>
    </div>
  );
});

export default MaxMinTemp;
