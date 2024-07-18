import { Outlet, Link } from 'react-router-dom';

const ChapterFour = () => {
    return (
        <div>
            <h1>Chapter Three</h1>
            <nav>
                <ul>
                    <li><Link to="part-1">Part 1</Link></li>
                    <li><Link to="part-2">Part 2</Link></li>
                </ul>
            </nav>
            <Outlet /> {/* This is where nested routes will be rendered */}
        </div>
    );
}

export default ChapterFour;
