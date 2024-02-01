import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  // UseMemo used to apply Memoization
  // Use to avoid expensive calculation on every render when the return value is not changed

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const memuCalcu = useMemo(() => {
    return expensiveFunction(number);
  }, [number]);
  // const calculation = expensiveFunction(number);

  const cssStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div>
      <h1 className="heading">UseMemoHook</h1>
      <div style={cssStyle}>
        <input
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          value={number}
        />
        <h2>Calculation: {memuCalcu}</h2>
        <button onClick={() => setDark(!dark)}>Toggle</button>
      </div>
    </div>
  );
};

function expensiveFunction(num) {
  console.log("Loop Started");

  for (let i = 0; i < 1000000; i++) {}
  return num;
}

export default UseMemoHook;
