import React, { useCallback, useState } from 'react'
function Button ({handleClick}){
    console.log("Button Rendered");
    return <button onClick={handleClick}>Click Me</button>

}

export default function ButtonApp() {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount ((prev) => prev +1);
    }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <Button handleClick={increment} />
    </div>
  )
}
