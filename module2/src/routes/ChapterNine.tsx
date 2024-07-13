const ChapterNine = () => {

    const array = [{ id: 1, name: "Tom" }, { id: 2, name: "Alex" }, { id: 3, name: "Myo" }]

    return (
        <>
            {array.map((user) =>
                <div key={user.id}>
                    {user.name}
                </div>)}
        </>)
}

export default ChapterNine