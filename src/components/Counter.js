import { useSelector, useDispatch } from 'react-redux'; // llama a los métodos del redux y trae las propiedades
import { counterActions } from '../store/counter-slice'; // llama a los métodos del redux
import { useState } from 'react';

import classes from './Counter.module.css';

const Counter = () => {
  const [hideCounterState, setHideCounterState] = useState(false);

  const dispatch = useDispatch(); // llama a los métodos del redux
  const counter = useSelector((state) => state.counter.counter); // muestra la propiedad counter del redux
  const hideCounterRedux = useSelector((state) => state.counter.hideCounterRedux); // muestra la propiedad hideCounter del redux

  const toggleCounterHandler = () => {
    // setHideCounterState(!hideCounterState);
    dispatch(counterActions.toogleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // cualquier parámetro que mande va a un "payload: 10"
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div>
        <button onClick={incrementHandler}>Incrementar</button>
        <button onClick={increaseHandler}>Incrementar en 5</button>
        <button onClick={decrementHandler}>Decrementar</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      {/* {!hideCounterState && <div className={classes.value}>{counter}</div>} */}
      {!hideCounterRedux && <div className={classes.value}>{counter}</div>}
    </main>
  );
};

export default Counter;
