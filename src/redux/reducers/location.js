const initialState = {
  geolocation: {},
};

const geolocation = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GEOLOCATION':
      return {
        ...state,
        geolocation: action.payload,
      };
    default:
      return state;
  }
};

export default geolocation;
