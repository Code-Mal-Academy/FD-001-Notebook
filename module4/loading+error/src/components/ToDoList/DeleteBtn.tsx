type Prop = {
    id: number,
    deleteTodo: (id: number) => void
}


const DeleteBtn = ({ id, deleteTodo }: Prop) => {




    return (
        <>
            <button
                onClick={() => deleteTodo(id)}
                className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-700 transition duration-300"
            >
                Delete
            </button></>)
}

export default DeleteBtn