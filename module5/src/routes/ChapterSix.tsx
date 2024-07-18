import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type Todo = {
    id: number;
    task: string;
    finished: boolean;
}


const ChapterSix = () => {

    const param = useParams<{ id: string }>()
    const [todo, setTodo] = useState<Todo | undefined>(undefined)

    useEffect(() => {
        const getData = async () => {
            const req = await axios.get(`/api/todo/${param.id}`)
            setTodo(req.data)
        }
        getData()

    }, [])


    return (
        <>
            <div>ParamId: {param.id}</div>
            {todo &&
                <>

                    <p>TaskId: {todo?.id}</p>
                    <p>Task: {todo?.task}</p>
                    <p>Finished: {String(todo?.finished)}</p></>}
        </>)
}

export default ChapterSix