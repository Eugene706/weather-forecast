const initialState = {
  degrees: 0,
};

const degrees = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DEGREES':
      return {
        ...state,
        degrees: action.payload,
      };
    default:
      return state;
  }
};

export default degrees;
