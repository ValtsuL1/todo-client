import { useState } from "react"
import { AppTitle } from "./components/AppTitle"
import { CreateButton } from "./components/CreateButton"
import { TodoButtons } from "./components/TodoButtons"
import { CreateTodo } from "./components/CreateTodo"
import { TodoList } from "./components/TodoList"

function App() {

  const [showCreate, setShowCreate] = useState(false)

  const todos = [
    {
      id: 1,
      title: "Hae maitoa kaupasta",
      description: "Prisma!!!",
      created_at: 31236187,
      done: false
    },
    {
      id: 2,
      title: "Palauta tehtävät",
      description: "apikurssi",
      created_at: 31236187,
      done: false
    },
    {
      id: 3,
      title: "test",
      description: "test",
      created_at: 31236187,
      done: false
    }
  ]

  return <div>

    <AppTitle></AppTitle>
    <TodoButtons></TodoButtons>
    <TodoList todos={todos}></TodoList>
    <CreateButton onClicked={()=> setShowCreate(!showCreate)}></CreateButton>
    {showCreate && <CreateTodo setShowCreate={setShowCreate}></CreateTodo>}
    </div>
}

export default App
