import { useState } from "react"
import ChapterSixteenComponent from "../components/ChapterSixteen"

const ChapterSixteen = () => {

    const [inputState, setInputState] = useState("")

    const handleChange = (newValue: string) => {
        setInputState(newValue)
    };



    return (
        <>
            <p>Value: {inputState}</p>

            <ChapterSixteenComponent
                value={inputState}
                onChange={handleChange}


            />


        </>)
}

export default ChapterSixteen