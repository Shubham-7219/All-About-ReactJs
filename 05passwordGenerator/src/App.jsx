// import { useState,useCallback,useEffect,useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [length, setLength] = useState(8)
//   const[numberAllowed, setNumberAllowed] = useState(false);
//   const[charAllowed, setCharAllowed] = useState(false);
//   const[password, setPassword] = useState("");

//    // useRef hook
//     const passwordRef = useRef(null)

//   const passwordGenerator =useCallback(() =>{
//     let pass =""
//     let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwkyz"
//     if(numberAllowed) str +="0123456789"
//     if(charAllowed) str +="!@#$%^&*({}~"

//     for(let i = 1; i<=length;i++){
//       let char = Math.floor(Math.random() * str.length +1)
//       pass += str.charAt(char)
//     }

//     setPassword(pass)

//   },[length, numberAllowed, charAllowed, setPassword])

//  // passwordGenerator() not working

// useEffect(() =>{
//   passwordGenerator()
// },[length, numberAllowed, charAllowed, passwordGenerator])

//   const copyPasswordToClipboard = useCallback(() =>{
//     passwordRef.current?.select();
//     passwordRef.current
//     passwordRef.current?.setSelectionRange(0,5);

//     window.navigator.clipboard.writeText(password)
//   },
// [password])

//   return (
//     <>
//      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
//       <div className='className ="flexshadow rounded-lg overflow-hidden mb-4'>
//         <input type="text" 
//                 value={password}
//                 className='outline-none w-full py-1 px-3'
//                 readOnly
//                 ref={passwordRef}
//             />
//             <button
//             onClick={copyPasswordToClipboard}
//             ref={passwordRef}
//             >copy</button>
//       </div>
//       <div className='flex text-sm gap-x-2'>
//         <div className='flex items-center gap-x-1'>
//           <input type="range" 
//             min = {6}
//             max={100}
//             value={length}
//             onChange={(e) => {setLength(e.target.value)}}
            
//             />
//             <label> Length:{length}</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type='checkbox'
//             defaultChecked ={numberAllowed}
//             id="numberInput"
//             onChange={()=>{
//               setNumberAllowed((prev) => !prev)
//             }}
//           />
//       <label htmlFor='numberInput'>Numbers</label>
          
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type='checkbox'
//             defaultChecked ={charAllowed}
//             id="charInput"
//             onChange={()=>{
//               setCharAllowed((prev) => !prev)
//             }}
//           />
//       <label htmlFor='charInput'>Character</label>
          
//         </div>
//       </div>
//      </div>
//     </>
//   )
// }

// export default App
import { useState, useCallback, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false); // New state for button highlight

  // useRef hook
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*({}~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0, password.length);

    window.navigator.clipboard.writeText(password);
    setCopied(true); // Set copied to true when the button is clicked

    setTimeout(() => {
      setCopied(false); // Revert the button back to its original state after 1 second
    }, 1000);
  }, [password]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`py-1 px-3 ${copied ? 'bg-green-500' : 'bg-blue-500'}`} // Conditional class for highlight
            ref={buttonRef}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label> Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              checked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              checked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='charInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
