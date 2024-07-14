import { Link } from "react-router-dom"

const Setup = () => {
    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4 text-center">Chapters</h1>
            <nav className="space-y-2 mb-6 flex flex-col">
                <Link to="/chapter-1" className="text-blue-500 hover:underline">Chapter-1</Link>
                <Link to="/chapter-4" className="text-blue-500 hover:underline">Chapter-4</Link>
                <Link to="/chapter-5" className="text-blue-500 hover:underline">Chapter-5</Link>
                <Link to="/chapter-6" className="text-blue-500 hover:underline">Chapter-6</Link>
                <Link to="/chapter-8" className="text-blue-500 hover:underline">Chapter-8</Link>
                <Link to="/chapter-9" className="text-blue-500 hover:underline">Chapter-9</Link>
                <Link to="/chapter-10" className="text-blue-500 hover:underline">Chapter-10</Link>
                <Link to="/chapter-11" className="text-blue-500 hover:underline">Chapter-11</Link>
                <Link to="/chapter-12" className="text-blue-500 hover:underline">Chapter-12</Link>

            </nav>
        </div>)
}

export default Setup