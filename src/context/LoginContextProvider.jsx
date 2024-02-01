import React, { Children, createContext, useState } from "react";

// Creating Context
export const LoginContextProvide = createContext();

const LoginContextProvider = () => {
  const [userDetails, setUserDetails] = useState(true);
  return (
    <LoginContextProvide.Provider value={userDetails}>
      {children}
    </LoginContextProvide.Provider>
  );
};

export default LoginContextProvider;
