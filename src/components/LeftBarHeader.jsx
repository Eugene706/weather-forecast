import { useState, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useDebounce } from 'use-debounce';
import { fetchGeolocation, setGeolocation } from '../redux/actions/location';
import { fetchWeather } from '../redux/actions/weather';

import home from '../assets/img/home.svg';

const LeftBarHeader = memo(function LeftBarHeader() {
  const dispatch = useDispatch();
  const [inputValue, setInutValue] = useState('');
  const [debInpValue] = useDebounce(inputValue, 1000);
  const [dataSearch, setDataSearch] = useState([]);

  useEffect(() => {
    if (debInpValue.trim()) {
      searchFetch();
    }
  }, [debInpValue]); // eslint-disable-line react-hooks/exhaustive-deps

  const searchFetch = () => {
    axios
      .get(
        `https://rapidapi.p.rapidapi.com/v1/geo/cities?minPopulation=50000&namePrefix=${debInpValue}`,
        {
          headers: {
            'x-rapidapi-key':
              '58ad440e31msh0236048abb04924p1be107jsnb6f722599e7a',
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        setDataSearch(data.data);
      });
  };

  const setGeoloc = (obj) => {
    dispatch(
      setGeolocation({
        city: obj.city,
        country: obj.country,
        loc: `${obj.latitude},${obj.longitude}`,
      })
    );
    dispatch(fetchWeather(obj.latitude, obj.longitude));
    setDataSearch([]);
    setInutValue('');
  };

  const myGeolocation = () => {
    dispatch(fetchGeolocation());
  };

  return (
    <div className="header-left">
      <input
        type="text"
        placeholder="search for places ..."
        name="search"
        className="search-city"
        value={inputValue}
        onChange={(event) => setInutValue(event.target.value)}
      />
      {dataSearch.length > 0 && debInpValue.trim() && (
        <ul className="search-city-data">
          {dataSearch.slice(0, 4).map((obj) => (
            <li
              className="search-city-item"
              key={obj.id}
              onClick={() => setGeoloc(obj)}
            >
              {obj.city}, {obj.countryCode}
            </li>
          ))}
        </ul>
      )}
      <button className="own-location" onClick={myGeolocation}>
        <img src={home} alt="home" />
      </button>
    </div>
  );
});

export default LeftBarHeader;
