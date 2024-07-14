import { useContext } from "react"
import CountContext from "./Context"


const ComponentC = () => {

    const context = useContext(CountContext)



    return (
        <>
            <p>This is Component C</p>

            <div>
                <p>Value: {context?.count}</p>
            </div>

        </>)
}

export default ComponentC