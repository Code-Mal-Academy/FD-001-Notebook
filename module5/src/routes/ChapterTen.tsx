import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

type Todo = {
    id: number;
    task: string;
    finished: boolean;
};

const ChapterTen = () => {
    const { todoPromise } = useLoaderData() as { todoPromise: Promise<Todo[]>; }



    return (
        <div>
            <Suspense fallback={<p>Data Is Loading...</p>}>
                <Await resolve={todoPromise}>
                    {(todos: Todo[]) => (
                        <div className="flex flex-col gap-8">
                            {todos.map((todo) => (
                                <div key={todo.id}>
                                    <p>Id: {todo.id}</p>
                                    <p>Task: {todo.task}</p>
                                    <p>Finished: {String(todo.finished)}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </Await>
            </Suspense>
        </div>
    );
};

export default ChapterTen;
