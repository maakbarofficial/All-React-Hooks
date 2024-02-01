import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  // UseRef Allow us to access DOM Elements
  // For Creating mutable variables which will not re-render the component

  const [name, setName] = useState("");
  const count = useRef(0);

  console.log(count);

  useEffect(() => {
    count.current = count.current + 1;
  });

  // Reason to use UseRef
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // });

  // Second Usecase => Access DOM
  const inputEle = useRef();

  const handleClick = () => {
    console.log(inputEle.current);
    console.log(inputEle);
    inputEle.current.style.width = "300px";
    inputEle.current.focus();
  };

  return (
    <div>
      <h1 className="heading">UseRefHook</h1>
      <div>
        <h1>First Use</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <h2>Name: {name}</h2>
        {/* <h2>Renders by UseState: {count}</h2> */}
        <h2>Renders by UseRef: {count.current}</h2>
      </div>
      <br />
      <br />
      <div>
        <h1>Second Use</h1>
        <input type="text" ref={inputEle} />
        <button onClick={handleClick}>Click Here</button>
      </div>
    </div>
  );
};

export default UseRefHook;
