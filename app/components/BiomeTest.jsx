import React, { useState } from 'react';

export default function BiomeTest() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Biome Test Component</h1>
      <p className="mb-2">Count: {count}</p>
      <button
        type="button"
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
    </div>
  );
}
