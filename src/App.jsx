import { useState } from 'react'
import Timer from './Timer'
import './App.css'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
    <button onClick={()=>setShow(!show)}>Toogel</button>
    {show ?<Timer/>:<p>please toogel the switch to get timer</p> }

    </>
  )
}

export default App
