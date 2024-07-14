import { useReducer } from "react"
import { reducerFunction } from "../components/ChapterTen/Context"
import { CountContext } from "../components/ChapterTen/Context"
import ComponentA from "../components/ChapterTen/ComponentA"
import ComponentC from "../components/ChapterTen/ComponentC"


const ChapterTen = () => {

    const [state, dispatch] = useReducer(reducerFunction, { count: 0 })


    return (



        <>
            <CountContext.Provider value={{ state, dispatch }}>
                <ComponentA />
                <ComponentC />

            </CountContext.Provider>


        </>)
}

export default ChapterTen