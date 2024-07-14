import { useEffect, useMemo, useState } from "react";


const slowFunction = (num: number): number => {
    console.log('Calling slowFunction...');
    for (let i = 0; i <= 100000000; i++) { /* empty */ } // Simulate slow calculation
    return num * 10
};




const ChapterEleven = () => {
    const [count, setCount] = useState(0);
    // const [calculation, setCalculation] = useState(1);
    const [input, setInput] = useState('');

    //! This Thing Will Crash Your Entire Application
    // useEffect(() => {
    //     console.log('Calling slowFunction...');
    //     for (let i = 0; i <= 10000000000; i++) { /* empty */ } // Simulate slow calculation
    //     setCalculation(count * 10)
    // }, [count])



    //! Use useMemo to memoize the result of slowFunction
    const memoizedValue = useMemo(() => slowFunction(count), [count]);

    return (
        <div className="p-4">
            <h1 className="text-2xl">useMemo Example</h1>
            <p>State Value: {count}</p>
            {/* <p className="text-lg">Not MemoizedValue Value: {calculation}</p> */}
            <p className="text-lg">MemoizedValue Value: {memoizedValue}</p>

            <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setCount((c) => c + 1)}
            >
                Increment Count
            </button>
            <div className="mt-4">
                <input
                    className="border p-2"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type something..."
                />
                <p className="text-lg">Input: {input}</p>
            </div>
        </div>
    );

}

export default ChapterEleven