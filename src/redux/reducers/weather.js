const initialState = {
  weather: {},
  isLoaded: false,
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WEATHER':
      //let newWeather = JSON.parse(JSON.stringify(...weather));
      // newWeather.current = { ...state.weather.currernt };
      // newWeather.daily = { ...state.weather.daily };
      // newWeather.hourly = { ...state.weather.hourly };
      //console.log(newWeather);
      return {
        ...state,
        weather: action.payload,
        isLoaded: true,
      };
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default weather;
