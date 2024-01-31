import { useState } from 'react'
import {useEffect}from 'react'

const Timer = () => {
    const[sec,setsec]=useState(12)
    const [isActive, setIsActive] = useState(true)
    function handelPause() {
        setIsActive(false)
    }
    useEffect(()=>{
        let interval;
        if(isActive){
        interval=setInterval(()=>{
            setsec((prev)=>{
                if(prev<=1){
                    isActive(false)

                    return 0
                }
                return prev -1
            })
        },1000)
    }
    return()=>{
        clearInterval(interval)
    }
    },[isActive])
  return (
    <div>
        <p>{sec}</p>
        <button onClick={handelPause}>Pause</button>

    </div>
  )
}

export default Timer