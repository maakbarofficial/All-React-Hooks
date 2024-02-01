import React, { useCallback, useState } from "react";
import PrintTable from "./PrintTable";

const UseCallbackHook = () => {
  // This hook is used to return memoize function
  // It use for preventing functions from being recreated on rerendring
  // Improve Performance of App

  const [number, setNumber] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const cssStyle = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };

  const calculateTable = useCallback(
    (value) => {
      let newNumber = number + value;
      return [
        newNumber * 1,
        newNumber * 2,
        newNumber * 3,
        newNumber * 4,
        newNumber * 5,
      ];
    },
    [number]
  );

  // Fixing Reredring of component below code creates rerendring
  // const calculateTable = () => {
  //   return [number * 1, number * 2, number * 3, number * 4, number * 5];
  // };

  // UseMemo memoize value while useCallback memoize function

  return (
    <div>
      <h1 className="heading">UseCallbackHook</h1>
      <div style={cssStyle}>
        <input
          onChange={(e) => setNumber(e.target.valueAsNumber)}
          type="number"
          value={number}
        />
        <PrintTable calculateTable={calculateTable} />
        <button onClick={() => setDarkTheme(!darkTheme)}>Toggle</button>
      </div>
    </div>
  );
};

export default UseCallbackHook;
