import { useState, useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import img from '../images/img';

const WeatherWeek = memo(function WeatherWeek({
  date,
  minTemp,
  maxTemp,
  weatherId,
  activeDate,
}) {
  const degreesRedux = useSelector(({ degrees }) => degrees.degrees);
  const dateNow = new Date(date * 1000);

  const [tempMin, setTempMin] = useState(null);
  const [tempMax, setTempMax] = useState(null);

  useEffect(() => {
    setTempMin(Math.round(minTemp));
    setTempMax(Math.round(maxTemp));
  }, [minTemp]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (degreesRedux === 0) {
      setTempMin(Math.round(minTemp));
      setTempMax(Math.round(maxTemp));
    } else {
      setTempMin(Math.round((9 / 5) * minTemp + 32));
      setTempMax(Math.round((9 / 5) * maxTemp + 32));
    }
  }, [degreesRedux]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="weather-day">
      <span className="day">
        {activeDate === 1
          ? dateNow.toString().slice(0, 4)
          : dateNow.toTimeString().slice(0, 5)}
      </span>
      <img src={img(weatherId)} alt="sun" className="pic" />
      <div className="degree">
        <span className="max-degree">{tempMin}°</span>
        {activeDate === 1 && <span className="min-degree">{tempMax}°</span>}
      </div>
    </div>
  );
});

export default WeatherWeek;
