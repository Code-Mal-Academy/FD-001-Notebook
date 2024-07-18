import { useState, Suspense } from 'react';
import { useLoaderData, Await, Link } from 'react-router-dom';


type Todo = {
    id: number;
    task: string;
    finished: boolean;
};


const ChapterEleven = () => {


    const { todoPromise } = useLoaderData() as { todoPromise: Promise<Todo[]>; }
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        window.location.href = `/chapter-11/search?task=${encodeURIComponent(searchTerm)}`
    };


    return (
        <div className="p-4 max-w-md mx-auto">
            <div className="flex items-center border border-gray-300 rounded w-full mb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 rounded-l"
                />
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 bg-blue-500 text-white rounded-r">
                    Search
                </button>
            </div>


            <Suspense fallback={<p>Data Is Loading...</p>}>
                <Await resolve={todoPromise}>
                    {(todos: Todo[]) => (
                        <ul className="list-disc list-inside">
                            {todos.map(item => (
                                <li key={item.id} className="py-1">
                                    <Link to={`/chapter-11/${item.id}`} >
                                        {item.task}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </Await>
            </Suspense>
        </div>






    );
};

export default ChapterEleven;
