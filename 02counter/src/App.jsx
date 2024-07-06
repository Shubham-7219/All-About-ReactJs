import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
    let [counter,setCounter] = useState(5) //here useState is hook
  
  //let counter = 5

  const addValue = () =>{
   console.log("clicked", counter);
  
   if(counter<=19)
{
  counter = counter + 1
  setCounter(counter)
}  }

   
  const removeval = () =>{
    if(counter>1){
      setCounter(counter - 1) 
    }
    else{
      setCounter(0)
    }
 
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>
        Add value{counter}</button>
      <br></br>
      <button
      onClick={removeval}>decrease value{counter}</button>
      <footer>footer :{counter}</footer>
    </>
  )
}

export default App
