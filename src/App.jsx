import { useEffect, useState } from "react"
import { AppTitle } from "./components/AppTitle"
import { CreateButton } from "./components/CreateButton"
import { TodoButtons } from "./components/TodoButtons"
import { CreateTodo } from "./components/CreateTodo"
import { TodoList } from "./components/TodoList"
import { getTodoById, getTodos } from "./services/todos"
import { TodoView } from "./components/TodoView"
import { WeatherButton } from "./components/GetWeatherButton"
import { GetWeather } from "./components/GetWeather"


function App() {
  const buttonData = [
    {
        name: "Kaikki",
        active: "ALL"
    },
    {
        name: "Tekemättä",
        active: "NOT_DONE"
    },
    {
        name: "Tehdyt",
        active: "DONE"
    },
    ];

  const [showWeather, setShowWeather] = useState(false)
  const [showCreate, setShowCreate] = useState(false);
  const [todos, setTodos] = useState([]);
  const [activeKey, setActiveKey] = useState(buttonData[1].active);
  const [selectedTodo, setSelectedTodo] = useState();

  const buttons = buttonData.map((button, id) => {
      return <button key={id} onClick={()=>setActiveKey(button.active)} style={{backgroundColor: button.active === activeKey && "aqua"}}> {button.name} </button>
  })

  const selectTodo = (id)=>{

    getTodoById(id).then((todo)=>{
      setSelectedTodo(todo)
    })

  }

  useEffect(()=> {

    const params = {}

    if(activeKey !== "ALL") {
      params.done = activeKey === "DONE"
    }

    getTodos(params).then((todos)=>{
      setTodos(todos)
    })

  },[showCreate, activeKey, selectedTodo])

  return (
  <>
    <AppTitle></AppTitle>
    <TodoButtons buttons={buttons}></TodoButtons>
    <TodoList todos={todos} setSelectedId={selectTodo}></TodoList>
    <CreateButton onClicked={()=> setShowCreate(!showCreate)}></CreateButton>
    {showCreate && <CreateTodo setShowCreate={setShowCreate}></CreateTodo>}
    {selectedTodo && <TodoView setShowCreate={()=>setSelectedTodo(null)} initialTodo={selectedTodo}></TodoView>}
    <WeatherButton onClicked={()=> setShowWeather(!showWeather)}></WeatherButton>
    {showWeather && <GetWeather setShowWeather={setShowWeather}></GetWeather>}
    </>
  );
}

export default App
