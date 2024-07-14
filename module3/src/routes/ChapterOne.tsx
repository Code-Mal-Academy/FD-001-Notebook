import { useEffect, useState } from "react"

const ChapterOne = () => {

    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    //! Will Run Every Time
    useEffect(() => {
        console.log("Hello From Both Counter");
    })

    useEffect(() => {
        console.log("Hello From OnMount")
    }, [])


    //! Will Run When CountOne Change
    useEffect(() => {
        console.log("Hello From Counter One")
    }, [countOne])

    //! Wil lRun When on Dismount
    useEffect(() => {

        return () => {
            console.log("Hello")
        }
    })



    return (
        <>
            <div>
                <p>Counter 1</p>
                <button
                    onClick={() => setCountOne(countOne + 1)}
                />
                <p>{countOne}</p>
            </div>

            <div>
                <p>Counter 2</p>
                <button
                    onClick={() => setCountTwo(countTwo + 1)}
                />
                <p>{countTwo}</p>
            </div>

        </>)
}

export default ChapterOne