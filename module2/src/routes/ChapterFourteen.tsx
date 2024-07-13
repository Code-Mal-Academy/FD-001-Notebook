import { useState } from "react"

const ChapterFourteen = () => {

    const [inputValue, setInputValue] = useState("")


    return (
        <>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />

            <p>{inputValue}</p>

        </>)
}

export default ChapterFourteen