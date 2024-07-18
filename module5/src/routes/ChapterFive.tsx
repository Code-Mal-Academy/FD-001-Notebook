import { Link, NavLink } from "react-router-dom"

const ChapterFive = () => {



    return (
        <>
            <li><Link to="/chapter-5/part-1">Part 1</Link></li>
            <li>
                <NavLink
                    to="/chapter-5/part-2"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-blue-400" : isActive ? "text-red-400" : ""
                    }
                >
                    Part 2
                </NavLink>
            </li>
        </>)
}

export default ChapterFive