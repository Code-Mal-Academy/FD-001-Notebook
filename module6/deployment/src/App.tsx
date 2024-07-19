import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type Todo = {
    id: number,
    task: string,
    finished: boolean
}


const App = () => {

    const { data, isLoading } = useQuery({
        queryKey: ["todo"],
        queryFn: async () => {
            const req = await axios.get<Todo[]>("/api/todo")
            return req.data
        }
    })

    if (isLoading) {
        return (<>Loading....</>)
    }



    return (
        <>
            <p>This is Deployed Website</p>
            {data?.map(todo =>
                <div>
                    <p>{todo.task}</p>
                </div>)}

        </>
    )
}

export default App
