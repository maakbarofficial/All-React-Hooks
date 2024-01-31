import React, { useState } from "react";

// Hooks are functions to use some react features in functional components
// In other words Functional Components work like Class Components

const UseStateHook = () => {
  // UseState Hook is used to add a State

  // ------------ Changing States ------------
  // const array = useState(0);
  // const counter = array[0];
  // const setCounter = array[1];
  // console.log(array);

  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    setCounter(counter - 1);
  }

  // ------------ Getting States Of Input ------------
  const [name, setName] = useState("");

  // ------------  All States in Object ------------
  const [details, setDetails] = useState({ counters: 0, names: "" });

  function incCounter() {
    setDetails((prev) => ({
      // calling previous values and then updating it
      ...prev,
      counters: prev.counters + 1,
    }));
  }

  console.log(details);
  return (
    <div>
      <h1 className="heading">UseStateHook</h1>
      <div className="flex items-center gap-4">
        <p>Changing States</p>
        <button
          className="p-2 bg-blue-400 text-white"
          onClick={decreaseCounter}
        >
          Decrease
        </button>
        <h1>Counter: {counter}</h1>
        <button
          className="p-2 bg-blue-400 text-white"
          onClick={increaseCounter}
        >
          Increase
        </button>
      </div>

      <div className="my-5">
        <p>Getting State Of Input</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <h1>{name}</h1>
      </div>

      <div className="my-5">
        <p>States In Object</p>
        <h1>Counter: {details.counters}</h1>
        <button className="p-2 bg-blue-400 text-white" onClick={incCounter}>
          Increase
        </button>
        <br />

        <input type="text" onChange={(e) => (details.names = e.target.value)} />
        <h1>{details.names}</h1>
      </div>
    </div>
  );
};

export default UseStateHook;
