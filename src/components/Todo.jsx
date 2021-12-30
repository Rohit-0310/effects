import { useEffect,useState } from "react";

export const Todo = () => {
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        getTodo();
    },[]);

    const getTodo = () => {
        fetch("http://localhost:3001/todos")
            .then((d) => d.json())
            .then((res) => {
                setTodo(res);
            });
    };


    const addTodo = () => {
        const payload = {
            title : text,
            status: false,
        };
        fetch("http://localhost:3001/todos", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json"
            }
        }).then(()=>{
            getTodo();
        })
            ;
    }

    return (
        <div>
            <input 
                type="text"
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter Todo" 
                />
                <button onClick={addTodo}>Add Todos</button>

                    {todo.map((e) => (
                        <div>{e.title}</div>
                    ))}
        </div>
        )
}