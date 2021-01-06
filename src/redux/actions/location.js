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
    dispatch(fetchWeather(obj.latitude, obj.longitude));
  } else {
    axios.get('https://api.ipify.org?format=json').then(({ data }) => {
      axios
        .get(
          `http://api.ipapi.com/${data.ip}?access_key=f5c21d11481bbc30f5444ceae364949c`
        )
        .then(({ data }) => {
          dispatch(setGeolocation(data));
          localStorage.setItem('geolocation', JSON.stringify(data));
          dispatch(fetchWeather(data.latitude, data.longitude));
        });
    });
  }
};
