import { TodoItem } from "./TodoItem"
import "./TodoList.css"

export function TodoList({todos = [], setSelectedId}) {

    const todoItems = todos.map((todo)=>{
  
      return <TodoItem todo={todo} key={todo.id} setSelectedId={setSelectedId}></TodoItem>
  
    });
  
    return ( <div className="todo-list">
  
      {todoItems}
  
    </div>
    );
  }
  