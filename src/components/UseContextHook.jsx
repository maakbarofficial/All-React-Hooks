import React from "react";
import UseContextChild from "./UseContextChild";

const UseContextHook = () => {
  // UseContext Hook used to manage a global state in our app
  // Accessing Data in anywhere in app
  // Creating Context
  // Providing Context
  // Consuming Context

  return (
    <div>
      <h1 className="heading">UseContextHook</h1>
      <div>
        <UseContextChild />
      </div>
    </div>
  );
};

export default UseContextHook;
