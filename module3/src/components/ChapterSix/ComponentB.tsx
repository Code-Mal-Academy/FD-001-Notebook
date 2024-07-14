import { useContext } from "react"
import CountContext from "./Context"


const ComponentB = () => {

    const context = useContext(CountContext)




    return (
        <>
            <p>This is Component B</p>

            <div>
                <p>{context?.count}</p>

                <button
                    onClick={() => context?.setCount(prev => prev + 1)}
                >
                    Click Me
                </button>

            </div>

        </>)
}

export default ComponentB