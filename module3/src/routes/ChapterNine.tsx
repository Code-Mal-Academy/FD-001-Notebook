import { useReducer, useState } from "react";

const ChapterNine = () => {
    return (
        <>
            <UseReducerComponent />
            <UseStateComponent />
        </>)
}

export default ChapterNine


const UseReducerComponent = () => {
    //! useReducer(ReducerFunction, Initial State)

    interface State {
        count: number;
    }

    type Action =
        | { type: 'increment' }
        | { type: 'decrement' }
        | { type: 'reset' };


    const [state, dispatch] = useReducer(
        (state: State, action: Action): State => {
            switch (action.type) {
                case 'increment':
                    return { count: state.count + 1 };
                case 'decrement':
                    return { count: state.count - 1 };
                case 'reset':
                    return { count: 0 };
                default:
                    throw new Error('Unexpected action');
            }
        }
        ,
        { count: 0 }
    );

    return (
        <div className="p-4">
            <p className="text-lg">Count: {state.count}</p>
            <div className="flex space-x-2">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => dispatch({ type: 'increment' })}
                >
                    Increment
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => dispatch({ type: 'decrement' })}
                >
                    Decrement
                </button>
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded"
                    onClick={() => dispatch({ type: 'reset' })}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}


const UseStateComponent = () => {

    const [count, setCount] = useState(0)

    const IncrementFunction = () => setCount(count + 1)

    const DecrementFunction = () => setCount(count - 1)

    const ResetFunction = () => setCount(0)

    return (
        <div className="p-4">
            <p className="text-lg">Count: {count}</p>
            <div className="flex space-x-2">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={IncrementFunction}
                >
                    Increment
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={DecrementFunction}
                >
                    Decrement
                </button>
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded"
                    onClick={ResetFunction}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}