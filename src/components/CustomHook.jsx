import React from "react";
import useFetch from "../hooks/useFetch";

const CustomHook = () => {
  // Custom hooks are basically a reusable functions
  // Logic which will reuse in app
  // "https://jsonplaceholder.typicode.com/users"

  // Custom Hook to fetch data from API
  const data = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <h1 className="heading">CustomHook</h1>
      <div>
        <h3>useFetch Custom Hook To Fetch Data From API</h3>
        <>
          {data.map((res) => {
            return (
              <h4 key={res.id}>
                {res.id} . {res.name}
              </h4>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default CustomHook;
