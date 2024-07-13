import { Link } from "react-router-dom"

const Setup = () => {
    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4 text-center">Chapters</h1>
            <nav className="space-y-2 mb-6 flex flex-col">
                <Link to="/chapter-2" className="text-blue-500 hover:underline">Chapter-2</Link>
                <Link to="/chapter-3" className="text-blue-500 hover:underline">Chapter-3</Link>
                <Link to="/chapter-4" className="text-blue-500 hover:underline">Chapter-4</Link>
                <Link to="/chapter-5" className="text-blue-500 hover:underline">Chapter-5</Link>
                <Link to="/chapter-6" className="text-blue-500 hover:underline">Chapter-6</Link>
                <Link to="/chapter-7" className="text-blue-500 hover:underline">Chapter-7</Link>
                <Link to="/chapter-8" className="text-blue-500 hover:underline">Chapter-8</Link>
                <Link to="/chapter-9" className="text-blue-500 hover:underline">Chapter-9</Link>
                <Link to="/chapter-10" className="text-blue-500 hover:underline">Chapter-10</Link>
                <Link to="/chapter-11" className="text-blue-500 hover:underline">Chapter-11</Link>                <Link to="/chapter-13" className="text-blue-500 hover:underline">Chapter-13</Link>
                <Link to="/chapter-14" className="text-blue-500 hover:underline">Chapter-14</Link>
                <Link to="/chapter-15" className="text-blue-500 hover:underline">Chapter-15</Link>
                <Link to="/chapter-16" className="text-blue-500 hover:underline">Chapter-16</Link>
                <Link to="/todo" className="text-blue-500 hover:underline">TodoList</Link>
            </nav>
        </div>)
}

export default Setup