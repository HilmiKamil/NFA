import './App.css'

import TextInput from './Components/TextInput'
import ProfileApp from './Components/ProfileApp'
import Timer from './Components/Timer'
import Produk from './Components/Produk'
import Counter from './Components/Counter'
import CounterReducer from './Components/CounterReducer'
import ExpensiveCalculation from './Components/ExpensiveCalculation'
import ButtonApp from './Components/ButtonApp'
// import FruitList from './Components/List/FruitList'
// import Services from './Components/Services'
// import ClickButton from './Components/ClickButton'

// let array = [1, 2, 3];
// console.log(...array);

// let originalArray = [1, 2, 3];
// let copiedArray = [...originalArray];

// copiedArray.push(4);

// console.log(originalArray);
// console.log(copiedArray);

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let combinedArray = [...array1, ...array2];

// console.log(combinedArray);

// function sum(a, b, c) {
//   return a + b + c;
// }

// let numbers = [10, 20, 30];

// console.log(sum(...numbers));

// let obj1 = { name: "Alice" };
// let obj2 = { age : 25 };

// let combinedObject = {...obj1, ...obj2};

// console.log(combinedObject);

function App() {
  return (
    <>
    {/* <ButtonApp /> */}
    {/* <ButtonApp/> */}
    {/* <ExpensiveCalculation num={30}/> */}
    {/* <CounterReducer/> */}
    {/* <TextInput /> */}
    {/* <ProfileApp /> */}
    {/* <Counter /> */}
    <Produk />
      {/* <FruitList /> */}
      {/* <Services /> */}
      {/* <ClickButton /> */}
    </>
  )
}

export default App