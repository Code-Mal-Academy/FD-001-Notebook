import { useState } from "react"
import AddToDo from "../components/ToDoList/AddToDo"
import DeleteBtn from "../components/ToDoList/DeleteBtn"
import FinishBtn from "../components/ToDoList/FinishBtn"




const ToDoList = () => {

    const [todo, setTodo] = useState([
        { id: 1, task: "Go Wash Dishes", finished: false },
        { id: 2, task: "Do Laundary", finished: false }
    ])

    const addTodoFunction = (value: string) => {
        const newTodo = {
            id: todo.length + 1,
            task: value,
            finished: false
        }
        setTodo([...todo, newTodo])
    }

    const deleteTodoFunction = (id: number) => {
        const newTodo = todo.filter(task => task.id !== id)
        setTodo(newTodo)
    }

    const finishTodoFunction = (id: number) => {
        const newTodo = todo.map(task =>
            task.id === id ? { ...task, finished: !task.finished } : task
        )
        setTodo(newTodo)

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
        </div>
    )
}

export default ToDoList