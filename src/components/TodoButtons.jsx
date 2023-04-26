import { GetTodos } from "../services/http";


export function TodoButtons() {


    return <div>
        <button onClick={GetTodos}>Kaikki</button>
        <button>Tekemättä</button>
        <button>Tehdyt</button>
    </div>

}