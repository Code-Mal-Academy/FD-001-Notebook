import { useState, useCallback } from "react";

const ChapterTwelve = () => {
    const [count, setCount] = useState(0);

    // Define a callback function with useCallback
    const handleClick = useCallback(() => {
        console.log('Button clicked!');
        setCount((prevCount) => prevCount + 1);
    }, []); // Empty dependency array means it doesn't depend on any props or state

    return (
        <div className="p-4">
            <h1 className="text-2xl">useCallback Example</h1>
            <p>Parent Component Count: {count}</p>
            <ChildComponent onClick={handleClick} />
        </div>
    );
}

export default ChapterTwelve

interface Props {
    onClick: () => void;
}

const ChildComponent = ({ onClick }: Props) => {
    return (
        <div className="mt-4">
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={onClick}
            >
                Click me
            </button>
        </div>
    );
};
