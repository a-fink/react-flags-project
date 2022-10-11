import './SearchBar.css';

function SearchBar() {
    return (
        <div className="search-bar-container">
            <div className="search-icon">
                <ion-icon name="search-outline"></ion-icon>
            </div>
            <input type="text" value="Search for a country..." className="search-bar"></input>
        </div>
    );
}

export default SearchBar;
