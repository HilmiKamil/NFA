import React from 'react'

const fruits=["Apple", "Durian", "Banana"];
function FruitList() {
  return (
    <ul>
        {fruits.map((fruit, index) =>(
            <li key={index}>{fruit}</li>
        ))}
      
    </ul>
  )
}

export default FruitList
