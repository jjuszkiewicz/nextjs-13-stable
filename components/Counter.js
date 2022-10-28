"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <div>Ilość: <span>{count}</span></div>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
    </section>
  );
};

export default Counter;
