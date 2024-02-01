import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffectHook = () => {
  // Works same useEffect also the same syntax
  // Difference is When its run
  // It runs before the DOM is printed on the browser
  // Whenever need to run the code before the DOM is printed
  // Like measuring of Height, Width & Anything related to Layout
  // It runs Synchronusly

  const [toggle, setToggle] = useState(false);

  const textRef = useRef();

  // useLayoutEffect Runs first then UseEffect Runs
  // useEffect(() => {
  //   if (textRef.current != null) {
  //     console.log("UseEffect Run");
  //     const dim = textRef.current.getBoundingClientRect();
  //     console.log(dim);
  //     textRef.current.style.paddingTop = `${dim.height}px`;
  //   }
  // }, [toggle]);

  useLayoutEffect(() => {
    if (textRef.current != null) {
      console.log("useLayoutEffect Run");
      const dim = textRef.current.getBoundingClientRect();
      console.log(dim);
      textRef.current.style.paddingTop = `${dim.height}px`;
    }
  }, [toggle]);

  // React Calculate Mutations
  // UseLayoutEffect Runs (Sync)
  // React Prints All Elements
  // UseEffect Runs (Async)

  return (
    <div>
      <h1 className="heading">UseLayoutEffectHook</h1>
      <div>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <h4 ref={textRef}>Code is Running</h4>}
      </div>
    </div>
  );
};

export default UseLayoutEffectHook;
