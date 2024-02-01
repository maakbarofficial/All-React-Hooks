import React, { useContext } from "react";
import { LoginContext } from "../App";

const UseContextChild = () => {
  // Consuming Context
  const login = useContext(LoginContext);
  console.log(login);
  return (
    <div>
      <div>
        <h1>UseContextChild</h1>
      </div>
    </div>
  );
};

export default UseContextChild;
