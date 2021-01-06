import axios from 'axios';

import { fetchWeather } from './weather';

export const setGeolocation = (geolocation) => ({
  type: 'SET_GEOLOCATION',
  payload: geolocation,
});

export const fetchGeolocation = () => (dispatch) => {
  if (localStorage.getItem('geolocation')) {
    const obj = JSON.parse(localStorage.getItem('geolocation'));
    dispatch(setGeolocation(obj));
    const loc = obj.loc.split(',');
    dispatch(fetchWeather(loc[0], loc[1]));
  } else {
    axios.get('https://api.ipify.org?format=json').then(({ data }) => {
      axios
        .get(`https://ipinfo.io/${data.ip}?token=f90c0d7c9fb141`)
        .then(({ data }) => {
          const loc = data.loc.split(',');
          dispatch(setGeolocation(data));
          localStorage.setItem('geolocation', JSON.stringify(data));
          dispatch(fetchWeather(loc[0], loc[1]));
        });
    });
  }
};
