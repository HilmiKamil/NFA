import React, {useState} from 'react'

function Counter() {
    const [Count, setCount] = useState(0);
  return (
    <div>
        <p>Count : {Count}</p>
        <button onClick={()=> setCount(Count +1)}>Increment</button>
        <button onClick={()=> setCount(Count -1)}>Decrement</button>
      
    </div>
  )
}

export default Counter;
