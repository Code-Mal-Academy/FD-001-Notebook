import { useEffect, useState } from "react"
import AddToDo from "./components/ToDoList/AddToDo"
import DeleteBtn from "./components/ToDoList/DeleteBtn"
import FinishBtn from "./components/ToDoList/FinishBtn"
import axios, { AxiosError } from "axios"
import toast, { Toaster } from 'react-hot-toast';

type Todo = {
    id: number,
    task: string,
    finished: boolean
}



const App = () => {

    const [todo, setTodo] = useState<Todo[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | undefined>(undefined)

    useEffect(() => {
        const getData = async () => {
            try {
                const req = await axios.get("/api")

                if (req.status === 200) {
                    setTodo(req.data)
                    setLoading(false)
                }
            } catch (error) {
                if (error instanceof AxiosError) {
                    setError(error.message)
                }
            }
        }

        getData()

    }, [])

    const addTodoFunction = async (value: string) => {

        const newTodo = {
            task: value,
            finished: false
        }

        try {
            const req = await axios.post("/api/create", newTodo)
            if (req.status === 201) {
                setTodo([...todo, req.data])
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.message)
            }
        }


    }

    const deleteTodoFunction = async (id: number) => {

        try {
            const req = await axios.delete('/api/delete', { data: { id } })

            if (req.status === 204) {
                const newTodo = todo.filter(task => task.id !== id)
                setTodo(newTodo)
            }


        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.message)
            }
        }
    }

    const finishTodoFunction = async (id: number) => {

        try {
            const req = await axios.put("/api/update", { id })
            if (req.status === 200) {
                const newTodo = todo.map(task =>
                    task.id === id ? { ...task, finished: !task.finished } : task
                )
                setTodo(newTodo)
            }

        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.message)
            }
        }





    }

    return (
        <>
            <Toaster />
            <div className="container mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
                <div className="space-y-2 mb-6">

                    {loading ? <div className="flex justify-center items-center h-screen">

                        {error ? <div>{error}</div> :
                            <>
                                <svg className="animate-spin h-5 w-5 mr-3 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0020.538 15.5M20.538 8.5A8.002 8.002 0 008 1.709"></path>
                                </svg>
                                <p>Loading.....</p>
                            </>}
                    </div> :
                        <>
                            {todo.map(task => (
                                <div key={task.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
                                    <span className={`text-lg ${task.finished ? "line-through text-gray-500" : "text-gray-800"}`}>
                                        {task.task}
                                    </span>
                                    <FinishBtn id={task.id} finishTodo={finishTodoFunction} finished={task.finished} />
                                    <DeleteBtn deleteTodo={deleteTodoFunction} id={task.id} />
                                </div>
                            ))}</>}


                </div>
                <AddToDo addTodo={addTodoFunction} />
            </div>


        </>
    )
}

export default App