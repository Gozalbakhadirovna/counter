import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  
  function incr() {
    setCount(count + 1)//(prev => prev + 1)
  }

  function decr() {
    setCount(count - 1)//(prev => prev - 1)
  }
  return(
    <>
    <h3>Count: {count}</h3>
      <button 
        onClick={incr}
      className="btn btn-success">INCR</button>
      <button 
      onClick={decr}
      className="btn btn-danger">DECR</button>
    </>
  )
}