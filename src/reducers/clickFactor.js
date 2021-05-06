const clickFactorReducer = (state = 1, action) => {
  switch (action.type) {
    case 'UPGRADE_FACTOR':
      return state + 1;
    default:
      return state;
  }
};

export default clickFactorReducer;
