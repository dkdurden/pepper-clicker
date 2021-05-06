import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPepper } from './actions';
import pepper from './jalapeno.jpeg';

function Pepper() {
  const peppers = useSelector(state => state.pepperCounter);
  const factor = useSelector(state => state.clickFactor);
  const dispatch = useDispatch();
  return (
    <div>
      <img
        id='pepper'
        src={pepper}
        alt='Pepper'
        onClick={() => dispatch(addPepper(factor))}
      />
      <h3 className='counter'>{peppers}</h3>
    </div>
  );
}

export default Pepper;
