import { useState } from "react"


type Prop = {
    addTodo: (val: string) => void
}

const AddToDo = ({ addTodo }: Prop) => {
    const [inputValue, setInputValue] = useState("")

    return (
        <div className="flex flex-col items-center mt-10">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border-2 border-gray-300 p-2 rounded-lg mb-4 w-1/2"
                placeholder="Enter your to-do"
            />
            <button
                onClick={() => addTodo(inputValue)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
                Add To Do
            </button>
        </div>
    )
}

export default AddToDo
