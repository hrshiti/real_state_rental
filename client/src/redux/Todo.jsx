import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '../redux/slices/counter/Counter';

const Todo = () => {
  const dispatch = useDispatch();
  // Select the counter value from the Redux store
  const counterValue = useSelector((state) => state.counter);

  return (
    <div>
      <div>
        <h1>Counter: {counterValue}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
};

export default Todo;
