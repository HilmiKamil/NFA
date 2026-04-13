import React from 'react'
import { useMemo } from 'react';

export default function ExpensiveCalculation({num}) {
    const calculate = (num) => {
        console.log("Calculating....")
        return num * 2;
    }

    const result = useMemo(()=>calculate(num), [num]);
  return (
    <p>Result: {result}</p>
  )
}
