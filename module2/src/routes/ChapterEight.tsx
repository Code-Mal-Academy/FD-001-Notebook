const ChapterEight = () => {

    const array = ["Tom", "Alex", "Myo"]

    return (
        <>
            {array.map((name, index) =>
                <div key={index}>
                    {name}
                </div>)}
        </>)
}

export default ChapterEight