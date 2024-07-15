import { useEffect, useState } from "react"
import AddToDo from "./components/ToDoList/AddToDo"
import DeleteBtn from "./components/ToDoList/DeleteBtn"
import FinishBtn from "./components/ToDoList/FinishBtn"
import axios from "axios"

type Todo = {
    id: number,
    task: string,
    finished: boolean
}



const App = () => {

    const [todo, setTodo] = useState<Todo[]>([])



    useEffect(() => {
        const getData = async () => {
            const req = await axios.get("/api")
            setTodo(req.data)
        }

        getData()
    }, [])

    const addTodoFunction = async (value: string) => {

        const newTodo = {
            task: value,
            finished: false
        }

        const req = await axios.post("/api/create", newTodo)
        if (req.status === 201) {
            setTodo([...todo, req.data])
        }
    }

    const deleteTodoFunction = async (id: number) => {

        //! Axios Delete Is Kinda Weird
        const req = await axios.delete('/api/delete', { data: { id } })

        if (req.status == 204) {
            const newTodo = todo.filter(task => task.id !== id)
            setTodo(newTodo)
        }
    }

    const finishTodoFunction = async (id: number) => {

        const req = await axios.put("/api/update", { id })

        if (req.status === 200) {
            const newTodo = todo.map(task =>
                task.id === id ? { ...task, finished: !task.finished } : task
            )
            setTodo(newTodo)
        }

    }

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

            <div className="space-y-2 mb-6">
                {todo.map(task => (
                    <div key={task.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
                        <span className={`text-lg ${task.finished ? "line-through text-gray-500" : "text-gray-800"}`}>
                            {task.task}
                        </span>
                        <FinishBtn id={task.id} finishTodo={finishTodoFunction} finished={task.finished} />
                        <DeleteBtn deleteTodo={deleteTodoFunction} id={task.id} />
                    </div>
                ))}
            </div>
            <AddToDo addTodo={addTodoFunction} />
        </div >
    )
}

export default App