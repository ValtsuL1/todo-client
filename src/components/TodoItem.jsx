import { useState } from "react"

export function TodoItem({todo}) {

    const [done, setDone] = useState(todo.done)
  
    const toggle = ()=>{
      setDone(!done)
    }
  
    return <div onClick={toggle}>{todo.title} {todo.id} {done.toString()}</div>
  }