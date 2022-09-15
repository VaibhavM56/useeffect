import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function RightUseEffect() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("use effect executed in mounting phase");

    return () => {
      console.log("component will un mount phase"); // whatever useEffect is returning will be unmounted
    };
  }, []); // useEffect has two arguments if the second argument(array) is empty it is in mounting phase similar to didMount.

  useEffect(() => {
    if (count !== 0) {
      console.log("use effect componentDidUpdate is executed");
    }
  }, [count]); // if you have dependancies array in your useEffect it updating phase
  return (
    <div>
      <h1>count-{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
    </div>
  );
}

export default RightUseEffect;
