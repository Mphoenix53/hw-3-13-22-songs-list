
import { useState, useEffect } from "react"

const Counterf = (props)=>{

  useEffect(()=>{

  },[])

  const[count, setCount] = useState(0)

    const add = ()=>{
      setCount(count + 1)
    }

    return (
    <div className="border">
      <h1>Counter: {props.header}</h1>
      <p>count: {count}</p>
      <button onClick={()=> setCount(count + 1)}>ADD</button>
    </div>
  )
}

export default Counterf