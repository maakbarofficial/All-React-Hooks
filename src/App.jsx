import UseStateHook from "./components/UseStateHook";
import UseEffectHook from "./components/UseEffectHook";
import UseContextHook from "./components/UseContextHook";
import UseRefHook from "./components/UseRefHook";
import UseReducerHook from "./components/UseReducerHook";
import UseLayoutEffectHook from "./components/UseLayoutEffectHook";
import UseMemoHook from "./components/UseMemoHook";
import UseCallbackHook from "./components/UseCallbackHook";
import CustomHook from "./components/CustomHook";
import { createContext } from "react";
import { LoginContextProvide } from "./context/LoginContextProvider";

// Creating Context
export const LoginContext = createContext();

function App() {
  return (
    <div>
      {/* Providing Context */}
      {/* <LoginContextProvide> */}
      <LoginContext.Provider value={"This is login"}>
        <UseStateHook />
        <UseEffectHook />
        <UseContextHook />
        <UseRefHook />
        <UseReducerHook />
        <UseLayoutEffectHook />
        <UseMemoHook />
        <UseCallbackHook />
        <CustomHook />
      </LoginContext.Provider>
      {/* </LoginContextProvide> */}
    </div>
  );
}

export default App;
