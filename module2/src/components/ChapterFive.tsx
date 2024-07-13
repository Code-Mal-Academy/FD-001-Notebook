
type ChapterFiveProps = {
    name: string,
    age: number,
    gender: string
}


const ChapterFiveComponent = (user: ChapterFiveProps) => {

    console.log(user)

    return (
        <>
            <div>
                {user.name}
                {user.age}
                {user.gender}
            </div>

        </>)
}

export default ChapterFiveComponent