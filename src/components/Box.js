import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();

  function handleClick() {
    const rect = elementRef.current.getBoundingClientRect();
    console.log(rect);
  }

  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button onClick={handleClick}>Measure</button>
    </div>
  );
}

export default Box;
