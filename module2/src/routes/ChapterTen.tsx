const ChapterTen = () => {

    const array = [{ id: 1, name: "Tom", age: 18 }, { id: 2, name: "Alex", age: 16 }, { id: 3, name: "Myo", age: 10 }]

    const filteredArray = array.filter(x => x.age > 10)

    const sortedArray = array.sort((a, b) => b.age - a.age)


    return (
        <>
            {array.map((user) =>
                <div key={user.id}>
                    {user.name}
                </div>)}
        </>)
}

export default ChapterTen