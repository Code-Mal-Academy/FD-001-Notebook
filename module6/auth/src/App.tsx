import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { AuthPayload } from "./types"
import Logout from "./components/Logout"

type Blog = {
    id: number,
    title: string,
    text: string,
}


const App = () => {

    const token: AuthPayload = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")!) : null

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["todo"],
        queryFn: async () => {
            const req = await axios.get<Blog[]>("/api/blogs", {
                // headers: {
                //     Authorization: `Bearer ${token?.jwt}`
                // }
            })
            return req.data
        },
        retry: false
    })

    if (isLoading) {
        return (<>Loading....</>)
    }

    if (isError) {
        return (<>{error.message}</>)
    }



    return (
        <>
            {data?.map(blog =>
                <div key={blog.id}>
                    <p>{blog.title}</p>
                    <p>{blog.text}</p>
                </div>)}


            {token && <Logout />}


        </>
    )
}

export default App
