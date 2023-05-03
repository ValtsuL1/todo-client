import { useState } from "react"
import "./TodoItem.css"

export function TodoItem({todo}) {

    const [done, setDone] = useState(todo.done);
  
    const toggle = ()=>{
      setDone(!done)
    };
  
    return ( <div className="todo-item">
      <p>{todo.title}</p>
      <input checked={done} value={done} onChange={toggle} type="checkbox" />
      </div>
    );
  }