import { useState } from 'react'
import './App.css'
import Button from './components/Button'
function App() {
  const [bgColor, setBgColor] = useState("blue");
  const handleColorChange = (color) => {
    setBgColor(color);
   // document.body.style.backgroundColor = color;
  };

  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor:bgColor}}>
      <Button color="red" onClick={handleColorChange} />
      <Button color="green" onClick={handleColorChange} />
      <Button color="blue" onClick={handleColorChange} />
      <Button color="gray" onClick={handleColorChange} />
      </div>
    </>
  )
}

export default App
