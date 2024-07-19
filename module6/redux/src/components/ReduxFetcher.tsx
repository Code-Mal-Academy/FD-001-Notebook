import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { fetchTodo } from "../slice/todo"

const ReduxFetcher = () => {

    const todo = useSelector((state: RootState) => state.todo)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch])


    if (todo.isLoading) {
        return (
            <>
                Data is Loading
            </>)
    }

    if (todo.error) {
        return (
            <>
                {todo.error}
            </>
        )
    }

    return (
        <>
            {todo.todo.map(x =>
                <div key={x.id}>
                    <p>{x.id}</p>
                    <p>{x.task}</p>
                    <p>{String(x.finished)}</p>
                </div>)}


        </>)
}

export default ReduxFetcher