import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  let [id, setId] = useState(null);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    id = setInterval(() => {
      setCount(count+1);
    }, 1000);
    return ()=>{
        clearInterval(id)
    }
  }, [isRunning]);
  function toggle(){
    setIsRunning(!isRunning)
    
  }

  return (
    <div style={{width:"200px", margin:"0 auto"}}>
     {isRunning && (<h3>Count:-{count}</h3>)}
      <button onClick={toggle}>{isRunning?'unmount':"Mount"}</button>
      
    </div>
  );
};

export default Timer;
