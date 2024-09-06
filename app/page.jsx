"use client"

import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);

  const handleCLick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCLick}>Increase state</button>
    </>
  );
}
