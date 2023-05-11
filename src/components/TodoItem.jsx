import { useState } from "react"
import "./TodoItem.css"
import { toggleDoneWithId } from "../services/todos";

export function TodoItem({todo, setSelectedId}) {

    const [done, setDone] = useState(todo.done);
  
    const toggle = ()=>{

      const newDoneValue = !done

      setDone(newDoneValue)
      toggleDoneWithId(todo.id, newDoneValue).then((data)=>{
        console.log(data)
      })
    };
  
    return (
      <div onClick={()=> setSelectedId(todo.id)} className="todo-item">
        <p>{todo.title}</p>
        <input checked={done} 
        value={done} 
        onChange={toggle} 
        type="checkbox" 
        onClick={(e)=>e.stopPropagation()}
        />
      </div>
    );
  }