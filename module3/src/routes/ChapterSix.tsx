import ComponentA from "../components/ChapterSix/ComponentA"
import ComponentC from "../components/ChapterSix/ComponentC"
import { useState } from "react"
import CountContext from "../components/ChapterSix/Context"



export const ChapterSix = () => {

    const [count, setCount] = useState(0)



    return (
        <>
            <CountContext.Provider value={{ count, setCount }}>
                <ComponentA />
                <ComponentC />
            </CountContext.Provider>




        </>)
}

export default ChapterSix