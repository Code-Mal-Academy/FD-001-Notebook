import { useRef, useState } from "react"

const ChapterFive = () => {
    return (<>
        <UseStateComponent />
        <UseRefComponent />
    </>)
}

export default ChapterFive

const UseStateComponent = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Use State Component</p>
            <div>{count}</div>

            <button
                onClick={() => setCount(count + 1)}
            >
                Click me
            </button>
        </div>)
}

const UseRefComponent = () => {

    const countRef = useRef(0)




    return (
        <div>
            <p>Use Ref Component</p>

            <div>{countRef.current}</div>

            <button
                onClick={() => countRef.current + 1
                }
            >
                Click Me
            </button>


        </div >)
}