import { useLoaderData } from "react-router-dom"

type Todo = {
    id: number;
    task: string;
    finished: boolean;
}


const ChapterNine = () => {

    const todos = useLoaderData() as Todo[]



    return (

        <div className="flex flex-col gap-8">
            {todos?.map((todo) => (
                <div key={todo.id}>
                    <p>Id: {todo.id}</p>
                    <p>Task: {todo.task}</p>
                    <p>Finished: {String(todo.finished)}</p>
                </div>
            ))}
        </div>
    )
}

export default ChapterNine