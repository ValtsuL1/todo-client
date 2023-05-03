import { TodoItem } from "./TodoItem"
import "./TodoList.css"

export function TodoList({todos = []}) {

    const todoItems = todos.map((todo)=>{
  
      return <TodoItem todo={todo} key={todo.id}></TodoItem>
  
    });
  
    return ( <div className="todo-list">
  
      {todoItems}
  
    </div>
    );
  }
  