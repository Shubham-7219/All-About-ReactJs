import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
    // let myObj = {
    //   username:"hitesh",
    //   age:21
    // }

    let arr = [1,2,3]
  return (
    <>
    <h1 className='bg-green-400 rounded-xl'>Tailwind Css</h1>
    <Card username="chaiaurcode" little ="kaik 1"/>
    <Card username="shubham" little = "kaik 2"/>
   </>
  )
}

export default App
