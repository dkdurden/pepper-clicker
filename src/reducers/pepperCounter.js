const pepperCounterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_PEPPER':
      return state + action.payload;
    case 'REMOVE_PEPPERS':
      return state - action.payload;
    default:
      return state;
  }
};

export default pepperCounterReducer;
