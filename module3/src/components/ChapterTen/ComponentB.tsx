import { useContext } from "react"
import { CountContext } from "./Context"

const ComponentB = () => {

    const context = useContext(CountContext)




    return (
        <>
            <div className="p-4">
                <p>This is Component B</p>

                <p className="text-lg">Count: {context?.state.count}</p>
                <div className="flex space-x-2">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={() => context?.dispatch({ type: 'increment' })}
                    >
                        Increment
                    </button>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded"
                        onClick={() => context?.dispatch({ type: 'decrement' })}
                    >
                        Decrement
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-500 text-white rounded"
                        onClick={() => context?.dispatch({ type: 'reset' })}
                    >
                        Reset
                    </button>
                </div>
            </div>

        </>)
}

export default ComponentB