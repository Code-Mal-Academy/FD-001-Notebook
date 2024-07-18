import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

type Todo = {
    id: number;
    task: string;
    finished: boolean;
};

const PathParam = () => {
    const { pathPromise } = useLoaderData() as { pathPromise: Promise<Todo>; }



    return (
        <div>
            <Suspense fallback={<p>Data Is Loading...</p>}>
                <Await resolve={pathPromise}>
                    {(todo: Todo) => (
                        <div key={todo.id}>
                            <p>Id: {todo.id}</p>
                            <p>Task: {todo.task}</p>
                            <p>Finished: {String(todo.finished)}</p>
                        </div>
                    )}
                </Await>
            </Suspense>
        </div>
    );
};

export default PathParam;
