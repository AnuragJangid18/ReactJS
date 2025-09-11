import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
    const handleClearSearch = () => {
        setSearch(''); // Clear the search input when the button is clicked
    };

    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search" className="sr-only">Search Posts</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search Posts"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search for posts"
                />
                {search && (
                    <button type="button" onClick={handleClearSearch} className="clear-search">
                        Clear
                    </button>
                )}
            </form>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
