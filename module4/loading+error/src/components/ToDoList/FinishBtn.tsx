type Props = {
    id: number,
    finished: boolean,
    finishTodo: (id: number) => void,
}


const FinishBtn = ({ finished, finishTodo, id }: Props) => {


    return (
        <>
            <span
                onClick={() => finishTodo(id)}

                className={`text-sm ${finished ? "text-green-600" : "text-red-600"}`}>
                {finished ? "Finished" : "Not Finished"}
            </span>
        </>)
}

export default FinishBtn