
const TODO_API_BASE_URL = "http://localhost:8000"

async function todoApi(endpoint, options = {}) {

    const response = await fetch(TODO_API_BASE_URL + endpoint, options)

    if (!response.ok) throw new Error("Request failed with statuscode" + response.status)
    
    const data = await response.json()

    return data
}

function createQueryParams(params) {

    if(!params) return ""

    return "?" + new URLSearchParams(Object.entries(params)).toString()
}

export async function GetTodos(params) {
    
    const test = createQueryParams()
    console.log(test)

    const todos = todoApi("/todos", params)
    console.log("jipii")

    return todos
}

export async function CreateTodo(newTodo) {

}

export async function RemoveTodoById(id) {

}

export async function GetTodoById(id) {

}

export async function UpdateTodoWithId(id, editedTodo) {

}

export async function ToggleDoneWithId(id, currentDone) {

}