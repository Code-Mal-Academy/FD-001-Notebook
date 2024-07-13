import ChapterFiveComponent from "../components/ChapterFive"


const ChapterFive = () => {

    const userObject = {
        name: "Tom",
        age: 19,
        gender: "male"
    }



    return (
        <>
            <ChapterFiveComponent {...userObject} />
        </>)
}

export default ChapterFive