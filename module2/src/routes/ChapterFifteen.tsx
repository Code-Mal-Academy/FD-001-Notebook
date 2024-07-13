import { useState } from "react"

const ChapterFifteen = () => {

    const [count, setCount] = useState(0)


    return (
        <div className="flex flex-col items-center mt-10">
            <p className="text-4xl font-bold my-4">{count}</p>
            <div>
                <button
                    className="bg-green-500 text-white px-4 py-2 m-2 rounded hover:bg-green-700 transition duration-300"
                    onClick={() => setCount(prev => prev + 1)}
                >
                    +
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 m-2 rounded hover:bg-red-700 transition duration-300"
                    onClick={() => setCount(prev => prev - 1)}
                >
                    -
                </button>
            </div>
        </div>)
}

export default ChapterFifteen