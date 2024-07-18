import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

type Todo = {
    id: number;
    task: string;
    finished: boolean;
}


const ChapterSeven = () => {

    const [todo, setTodo] = useState<Todo[]>([])
    const [searchParams] = useSearchParams();
    const task = searchParams.get('task');

    useEffect(() => {
        const getData = async () => {
            const req = await axios.get(`/api/search?task=${task}`)
            console.log(req.data)
            setTodo(req.data)
        }
        getData()

    }, [])


    return (
        <>
            <div>Query Params: {task}</div>
            {todo?.map(x =>
                <div>
                    <p>Task: {x.task}</p>
                    <p>Finished: {String(x.finished)}</p>
                </div>
            )}
        </>


    )
}


export default ChapterSeven