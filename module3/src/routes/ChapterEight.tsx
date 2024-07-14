import { useReducer } from 'react';

interface State {
    count: number;
}

type Action =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'reset' };



const ChapterEight: React.FC = () => {

    //! useReducer(ReducerFunction, Initial State)

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
};

export default ChapterEight;
