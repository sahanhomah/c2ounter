import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]  = useState(15)

  // let counter = 15

  
  const addValue=()=>{
    if(counter<20)
    {
      console.log("Clicked Increment");
      counter = counter+1
    setCounter(counter)
  }
  }

  const removeValue = () => {
    if(counter>0)
    {
      console.log("Clicked dec");

    setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
    
    </>
  )
}

export default App