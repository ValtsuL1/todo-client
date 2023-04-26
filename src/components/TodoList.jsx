
import { TodoItem } from "./TodoItem"


export function TodoList({todos = []}) {

    const todoItems = todos.map((todo)=>{
  
      return <TodoItem todo={todo} key={todo.id}></TodoItem>
  
    })
  
    return <div>
  
      {todoItems}
  
    </div>
  }
  