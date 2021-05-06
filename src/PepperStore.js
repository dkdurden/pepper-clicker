import React, { useEffect } from 'react';
import { upgradeFactor, removePeppers, addPepper } from './actions';
import { useSelector, useDispatch } from 'react-redux';

function PepperStore() {
  const peppers = useSelector(state => state.pepperCounter);
  const factor = useSelector(state => state.clickFactor);
  const dispatch = useDispatch();

  function handleClick() {
    const cost = factor * 10;
    if (cost > peppers) alert('You need more peppers!');
    else {
      dispatch(upgradeFactor());
      dispatch(removePeppers(cost));
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(addPepper(1));
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className='store'>
        <h4>Click factor: {factor}</h4>
        <button className='upgrade-btn' onClick={handleClick}>
          Upgrade
        </button>
        <h4>{factor * 10} Peppers</h4>
      </div>
    </>
  );
}

export default PepperStore;
