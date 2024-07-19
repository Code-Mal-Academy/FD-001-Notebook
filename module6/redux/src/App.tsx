import type { RootState } from './store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './slice/counter'
import { Link } from 'react-router-dom'

const App = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="container mx-auto mt-10">
            <div className="counter-wrapper flex items-center space-x-4">
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Increment
                </button>
                <span className="text-xl">{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Decrement
                </button>
            </div>
            <Link to="/data" className='text-blue-400'>
                For Data Fetching, Click This Link
            </Link>
        </div>
    )
}

export default App
