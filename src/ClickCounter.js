import React, { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Click Counter</h1>
      <button onClick={handleClick}>Click me!!</button>
      <p>Click count: {count}</p>
    </div>
  );
}

export default ClickCounter;