export const addPepper = factor => {
  return {
    type: 'ADD_PEPPER',
    payload: factor,
  };
};

export const removePeppers = cost => {
  return {
    type: 'REMOVE_PEPPERS',
    payload: cost,
  };
};

export const upgradeFactor = () => {
  return {
    type: 'UPGRADE_FACTOR',
  };
};
