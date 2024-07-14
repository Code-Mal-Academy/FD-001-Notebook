import { useState, useEffect } from 'react';

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState<string[]>([]);
    const items = ["apple", "car", "banana", "orange"];

    useEffect(() => {
        const results = items.filter(item =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(results);
    }, [searchTerm]);

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <div className="grid gap-2">
                {filteredItems.map(item =>
                    <div key={item} className="p-2 bg-blue-100 rounded">
                        {item}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchFilter;
