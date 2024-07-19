import { useNavigate } from "react-router-dom"

const Logout = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("auth")
        navigate(0)
    }


    return (
        <button
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={logout}
        >
            Logout
        </button>)
}

export default Logout