import { useState } from "react"
import "./CreateTodo.css"
import { createTodo } from "../services/http"

export function CreateTodo({setShowCreate}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const close = () => {
        setShowCreate(false)
    }

    const onSave = ()=>{

        if(!title) {
            return
        }

        const newTodo = {
            title,
            description
        };

        createTodo(newTodo).then(()=>{

            close()
        })
    };

    return <div className="overlay">

        <div className="create-todo">

            <div className="create-header">

                <p>Luo uusi</p>
                <p onClick={close}>X</p>

            </div>

            <label htmlFor="title">Otsikko</label>
            <input value={title} onInput={e => setTitle(e.target.value)} id="title" type="text"/>
   
            <label htmlFor="description">Kuvaus</label>
            <textarea value={description} onInput={e => setDescription(e.target.value)} name="description" id="" cols="30" rows="5"></textarea>

            <button onClick={onSave}>Tallenna</button>
            <button onClick={close}>Peruuta</button>
        </div>


    </div>

}