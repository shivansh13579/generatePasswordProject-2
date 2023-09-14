import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numAllow,setNumAllow] = useState(false)
  const [charAllow,setCharAllow] = useState(false)
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllow) str +="1234567890"
    if(charAllow) str += "!@$#%^&*()_-+\|?><{}[]"               

    for(let i = 1;i<=length;i++){
       let char = Math.floor(Math.round()*str.length +1)
       pass += str.charAt(char)

    }
      setPassword(pass)

  },[length,numAllow,charAllow,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[charAllow,numAllow,setPassword,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto my-8 bg-gray-800 shadow-md rounded-lg py-3 px-4 text-orange-600'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input 
    type="text" 
    value={password}
    className='w-full outline-none px-1 py-2'
      placeholder='passorword'
      readOnly
    />
    <button className='outline-none bg-blue-700 text-white px-3 py-0.3 shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
      <input 
      type="range" 
      min={8}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
     />
     <label htmlFor="">Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox" 
      defaultChecked={numAllow}
      id='numberInput'
      onChange={()=>{setNumAllow((prev)=>!prev)}}
     />
     <label htmlFor="numberInput">Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox" 
      defaultChecked={charAllow}
      id='charInput'
      onChange={()=>{setCharAllow((prev)=>!prev)}}
     />
     <label htmlFor="charInput">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
