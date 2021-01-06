import axios from 'axios';

export const setIsLoaded = (isLoad) => ({
  type: 'SET_LOADED',
  payload: isLoad,
});

export const setWeather = (weather) => ({
  type: 'SET_WEATHER',
  payload: weather,
});

export const fetchWeather = (lat, lon) => (dispatch) => {
  setIsLoaded(false);
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=711b672003e62788d9ad03e2065132ab&units=metric`
    )
    .then(({ data }) => {
      dispatch(setWeather(data));
    });
};
