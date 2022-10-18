"client export"
import React, {useState} from "react"
export default function ClientComponent() {
  const [count, setCount] = useState(0);
  const clickHandler = ()=>setCount(count+1)

  return <button onClick={()=>setCount(count+1)}>{count}</button>
}