import React, { useReducer, useState } from "react";

const ACTION = {
  INCREASE: "increase",
  DECREASE: "decrease",
};

const initialState = { count: 0 };

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case ACTION.INCREASE:
      return { count: state.count + 1 };
    case ACTION.DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  // UseReducer use to manage state
  // const [count, setCount] = useState(0); // Applying this state using UseReducer

  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseCount = () => {
    // setCount((prev) => prev + 1);
    dispatch({ type: ACTION.INCREASE });
  };

  const decreaseCount = () => {
    // setCount((prev) => prev - 1);
    dispatch({ type: ACTION.DECREASE });
  };

  return (
    <div>
      <h1 className="heading">UseReducerHook</h1>
      <div>
        {/* <h2>Count: {count}</h2> */}
        <h2>Count: {state.count}</h2>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
      </div>
    </div>
  );
};

export default UseReducerHook;
