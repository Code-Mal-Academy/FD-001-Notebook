import ChapterSevenComponent from "../components/ChapterSeven"

const ChapterSeven = () => {

    const value = true


    return (

        <>
            {value ? <ChapterSevenComponent /> : "Nothing To Show"}

        </>)
}

export default ChapterSeven