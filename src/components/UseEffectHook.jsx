import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  // UseEffect used to perform side effects in component
  // Example: Fetching Data From API, Updating DOM & Window, Timer Functions : SetTimeout & SetInterval

  // useEffect(callback, dependencies) = what to run, when to run
  // UseEffect is a example of componentDidMount componentDidUpdate componentWillUnmount

  // Variations of UseEffect:
  // without dependencies, with empty array, with variables

  // without dependencies
  const [num, setNum] = useState(0);
  const [othernum, setOthernum] = useState(5);

  // without dependencies
  // useEffect(() => {
  //   document.title = `${num} new messages`;
  // });

  // with empty array => Will run only once when components render
  // useEffect(() => {
  //   document.title = `${num} new messages`;
  // }, []);

  // with variables
  // useEffect(() => {
  //   document.title = `${othernum} new messages`;
  // }, [othernum]);

  // useEffect(() => {
  //   setInterval(() => {
  //     setTime(time + 1);
  //   }, 1000);
  // });

  const [time, setTime] = useState(0);
  const [count, setcount] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(time + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // });

  useEffect(() => {
    console.log("Run UseEffect", count);

    return () => {
      console.log("Cleanup", count);
    };
  }, [count]);

  // Cleanup is used in few cases like when need to stop repeated side effect

  return (
    <div>
      <h1 className="heading">UseEffectHook</h1>
      <div>
        <p>Counter: {num}</p>
        <button onClick={() => setNum(num + 1)}>+</button>
      </div>
      <div>
        <p>Counter: {othernum}</p>
        <button onClick={() => setOthernum(othernum + 1)}>+</button>
      </div>

      <div>
        <h3>{time} in seconds</h3>
      </div>

      <div>
        <p>Counter: {count}</p>
        <button onClick={() => setcount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default UseEffectHook;
