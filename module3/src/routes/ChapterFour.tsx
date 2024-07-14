import { useEffect, useRef } from "react"

const ChapterFour = () => {

    //! Strange Typescript Setting For UseRef 
    const inputRef = useRef<HTMLInputElement>(null)

    //! You Will See Use Effect Is Not Firing
    useEffect(() => {
        console.log(inputRef)
    }, [inputRef])



    return (
        <>

            <p>{inputRef.current?.value}</p>


            <input
                ref={inputRef}
            />

            <button onClick={() => console.log(inputRef.current?.value)}>
                Click Me
            </button>

        </>)
}

export default ChapterFour