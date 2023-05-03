
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

export async function getTodos(params) {

    const todos = todoApi("/todos" + createQueryParams(params))
    return todos
}

export async function createTodo(newTodo) {

    const todo = await todoApi("/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

    return todo
}

export async function removeTodoById(id) {

}

export async function getTodoById(id) {

}

export async function updateTodoWithId(id, editedTodo) {

}

export async function toggleDoneWithId(id, currentDone) {

}