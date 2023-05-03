import { useEffect, useState } from "react"
import { AppTitle } from "./components/AppTitle"
import { CreateButton } from "./components/CreateButton"
import { TodoButtons } from "./components/TodoButtons"
import { CreateTodo } from "./components/CreateTodo"
import { TodoList } from "./components/TodoList"
import { getTodos } from "./services/http"

function App() {

  const [showCreate, setShowCreate] = useState(false)
  const [todos, setTodos] = useState([])


    useEffect(()=> {

      getTodos().then((todos)=>{
        setTodos(todos)
      })

  },[showCreate])

  return (
  <>
    <AppTitle></AppTitle>
    <TodoButtons></TodoButtons>
    <TodoList todos={todos}></TodoList>
    <CreateButton onClicked={()=> setShowCreate(!showCreate)}></CreateButton>
    {showCreate && <CreateTodo setShowCreate={setShowCreate}></CreateTodo>}
    </>
  );
}

export default App
