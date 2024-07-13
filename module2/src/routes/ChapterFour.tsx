import SubComponentFromAnotherFile from "../components/ChapterFour"

const ChapterFour = () => {
    return (
        <>
            <SubComponent />
            {/* <SubComponent></SubComponent> */}
            <SubComponentFromAnotherFile />
        </>)
}

export default ChapterFour



const SubComponent = () => {
    return (
        <>
            <div>
                Hello, There
            </div>
        </>)
}