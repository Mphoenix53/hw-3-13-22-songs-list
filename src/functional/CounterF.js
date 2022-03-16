
import { useState } from "react"

const Counterf = (props)=>{
  const[count, setCount] = useState(0)
    console.log('prier to functional counter return')
    return (
    <div className="border">
      <h1>Counter</h1>
      <p>count: {count}</p>
      <button onClick={()=> setCount(count + 1)}>ADD</button>
    </div>
  )
}

export default Counterf