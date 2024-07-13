import { useState } from "react"

const ChapterThirteen = () => {

    const [number, setNumber] = useState(0)

    return (
        <>
            <div>
                {number}
            </div>

            <button onClick={() => setNumber(number + 1)}>
                Click Me
            </button>

            <button onClick={() => setNumber(prev => prev + 1)}>
                Click Me
            </button>

        </>)
}

export default ChapterThirteen